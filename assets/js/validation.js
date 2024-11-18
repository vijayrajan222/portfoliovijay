function validateForm(){
    var fuser=document.getElementById('Name').value;
    if(fuser.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/)) {
        return true;
        document.getElementById('myform').reset(); 
    } else {
        alert('Wrong name');
        return false;
    }
}