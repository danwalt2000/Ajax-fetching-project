/*var formData = new FormData();
// file from input type='file'
var fileField = document.querySelector('input[type="file"]');


/*
formData.append('position_id', 2);
formData.append('name', 'Jhon');
formData.append('email', 'Jhon@gmail.com');
formData.append('phone', '+380955388485');
formData.append('photo', fileField.files[0]);
*/

$(document).ready(function() {
    $("#phone").focus(function(){
        alert('sefsef');
        /*if(!$("#phone").val()){
            $("#phone").val('+380');
        }*/
    });
});