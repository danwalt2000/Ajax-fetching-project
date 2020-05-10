var patternPhone = /^[\+]{0,1}380([0-9]{9})/;
var patternEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

var errorPhone = document.getElementById("errorPhone");
var errorEmail = document.getElementById("errorEmail");
var wid, hei;

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var closeModalWin = document.getElementById('closeModalWin');
var showModalWin = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

closeModalWin.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var us = new Vue({
    el: '#app',
    data() {
        return {
            message: "Can not upload data",
            info: null,
            name: null,
            title: null,
            position: null,
            base: null,
            token: null,
            isHiddenPhoneError: true,
            isHiddenEmailError: true,
            isHiddenFileError: true,
            isErrorEmail: false,
            isErrorPhone: false,
            isErrorFile: false,
        };
    },
    mounted() {
        axios
            .get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=100')
            .then(response => (this.info = response))
            .then((info)=>{
                var users = info.data.users;
                var userArr = [];
                for(elem in users){
                    userArr.push([elem, users[elem]]);
                }
                userArr.sort((a, b)=>{
                    return a.registration_timestamp - b.registration_timestamp;
                });
                for(let i = 0; i < userArr.length; i++){
                    userArr[i].shift();
                }
                this.base = userArr;
                this.message = userArr.slice(0, 6);

                //console.log(this.message);
            }).catch(error => console.log("Error while taking base" + error));
        axios
            .get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            .then(response => (this.position = response.data.positions))
            .catch(error => console.log("Error while taking positions" + error));
        axios
            .get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(response => (this.token = response.data.token))
            .catch(error => console.log("Error while taking token" + error));
    },

    methods:{
        imgLoad: function(){
            var _URL = window.URL || window.webkitURL;
            var file, img;
            var f = document.getElementById('file').files[0];
            if ((file = f)) {
                img = new Image();
                img.onload = function() {
                    wid = this.width;
                    hei = this.height;
                };
                img.src = _URL.createObjectURL(file);
            }
        },
        onDivInput: function(e) {
            this.title = e.target.innerHTML;
        },
        showMore: function(){
            this.message = this.base.slice(0, this.message.length + 6);
            if(this.message.length === this.base.length){
                document.getElementById('showMoreBut').classList.add('hidden');
            }
        },
        valid: function(e){
            var nameInput = document.getElementById('name').value;
            var phoneInput = document.getElementById('phone').value;
            var emailInput = document.getElementById('email').value;
            var fileInput = document.getElementById('file').value;
            var files = document.getElementById('file').files[0];
            var radioBtn = document.querySelectorAll("input[name=radio]");
            var checkedPosition = null;

            for(var i=0; i < radioBtn.length; i++){
                if(radioBtn[i].checked){
                    checkedPosition = radioBtn[i].parentElement.id;
                    break;
                }
            }

            if(!patternPhone.test(phoneInput) && !patternEmail.test(emailInput) && !fileInput){
                this.isHiddenEmailError = false;
                this.isHiddenPhoneError = false;
                this.isHiddenFileError = false;
                this.isErrorFile = true;
                this.isErrorPhone = true;
                this.isErrorEmail = true;
                e.preventDefault();
            }else if(!patternEmail.test(emailInput)){
                this.isHiddenPhoneError = true;
                this.isHiddenEmailError = false;
                this.isHiddenFileError = false;
                this.isErrorEmail = true;
                this.isErrorPhone = false;
                this.isErrorFile = false;
                e.preventDefault();
            }else if(!patternPhone.test(phoneInput)){
                this.isHiddenEmailError = true;
                this.isHiddenPhoneError = false;
                this.isHiddenFileError = false;
                this.isErrorPhone = true;
                this.isErrorEmail = false;
                this.isErrorFile = false;
                e.preventDefault();
            }else if(!fileInput ||
                files.type !== "image/jpeg" ||
                files.size > 5000000 ||
                wid < 70 || hei < 70
            ){
                this.isHiddenFileError = false;
                this.isHiddenEmailError = true;
                this.isHiddenPhoneError = true;
                this.isErrorFile = true;
                this.isErrorPhone = false;
                this.isErrorEmail = false;
                e.preventDefault();
            }else{
                var formData = {
                    'position_id': checkedPosition,
                    'name': nameInput,
                    'email': emailInput,
                    'phone': phoneInput,
                    'photo': files,
                };


                axios({
                    method: 'post',
                    url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
                    data: formData,
                    headers: { 'Token': this.token }
                })
                    .then(function (response) {
                        //handle success
                        console.log(response);
                        showModalWin();
                    })
                    .catch(function (error) {
                        console.log("Error while posting " + error);
                    });



            }

        },
    },

});


