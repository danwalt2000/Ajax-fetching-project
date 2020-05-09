var us = new Vue({
    el: '#app',
    data() {
        return {
            message: "Не удается загрузить данные",
            info: null,
            name: null,
            title: null,
            base: null
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
            }).catch(error => console.log(error));
    },
    methods:{
        onDivInput: function(e) {
            this.title = e.target.innerHTML;
        },
        showMore: function(){
            this.message = this.base.slice(0, this.message.length + 6);
            if(this.message.length === this.base.length){
                document.getElementById('showMoreBut').classList.add('hidden');
            }
        }
    },
});
