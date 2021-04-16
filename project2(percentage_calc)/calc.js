var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var resultfield = document.getElementById("resultfield");
var form = document.getElementById("xpercentageofy");
form.addEventListener('submit',function(event){
    var x=parseFloat(num1.value);
    var y=parseFloat(num2.value);
    if(!x || !y){
        alert("Please enter values for X and Y correctly");
    }
    else{
        var result=x/y*100;
        resultfield.innerText="Result : "+result+" %";
        event.preventDefault();
    }

})