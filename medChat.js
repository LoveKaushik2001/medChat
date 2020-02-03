var li,inputValue,t,b,button;
//Add message to chat box
function sendMessage(){
    inputValue = document.getElementById("text").value;

     if(inputValue === "" ){
         alert("no message written");
     }
     else{
         //select the problem
         if(inputValue == "Disease 1" || inputValue == "disease 1")
         disease1();
         else if(inputValue == "Disease 2" || inputValue == "disease 2")
         disease2();
         else if(inputValue == "Disease 3" || inputValue == "disease 3")
         disease3();
         else if(inputValue == "Disease 4" || inputValue == "disease 4")
         disease4();
         else if(inputValue == "Disease 5" || inputValue == "disease 5")
         disease5();
         else if(inputValue == "Disease 6" || inputValue == "disease 6")
         disease6();
         else if(inputValue == "Other" || inputValue == "other")
         other(); 
     }

     //Erase the previous message from text box
     document.getElementById("text").value = "";

}

//Condition (Check the problem selected)
function disease1(){
    console.log("I am in disease 1()");
    if(inputValue == undefined)
      inputValue = "Disease 1";
    disease = inputValue;
    document.getElementById("response").innerHTML = inputValue;
    document.getElementById('response').style.color = "red";
}
function disease2(){
    console.log("I am in disease 2()");
    disease = inputValue;
    document.getElementById("response").innerHTML = inputValue;
    document.getElementById("reponse").style.color = 'red';
}
function disease3(){
    console.log("I am in disease 3()");
    disease = inputValue;
    document.getElementById("response").innerHTML = inputValue;
    document.getElementById('response').style.color = 'red';
}
function disease4(){
    console.log("I am in disease 4()");
    disease = inputValue;
    document.getElementById("response").innerHTML = inputValue;
    document.getElementById('response').style.color = 'red';
}
function disease5(){
    console.log("I am in disease 5()");
    disease = inputValue;
    document.getElementById("response").innerHTML = inputValue;
    document.getElementById('reponse').style.color = 'red';
}
function disease6(){
    console.log("I am in disease 6()");
    disease = inputValue;
    document.getElementById("response").innerHTML = inputValue;
    document.getElementById('reponse').style.color = 'red';
}
function other(){
    console.log("I am in other()");
    disease = inputValue;
    document.getElementById("response").innerHTML = inputValue;
    document.getElementById('reponse').style.color = 'red';
    document.getElementById('pb').innerHTML = "So Please specify your problem briefly";
}
