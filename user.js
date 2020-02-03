//Listen the events
var enterListener = window;
var startListener = document.getElementById("chatting");
var sendListener = document.getElementById("sendbtn");
var text = document.getElementById("text");
var sense,e;

if(count == 0){
    console.log("Here count is 0 and will start the chatting.");
    listenFor();
}

function listenFor(){
    console.log("It sense the enter and click of mouse");

    enterListener.addEventListener("keydown",listen);
    startListener.addEventListener("click",listen);
    sendListener.addEventListener("click",listen);
}
function listen(e){
    if(e.keyCode === 13){
        console.log("Enter the listen function");
        e.preventDefault();
        if(!e.shiftKey){
            console.log("Listen Event : " + e + "Type : " + e.type);
            pauseListening();
            if(count == 0){
                sendMessage();
            }
            lookForChat();
        }
    }
    if(e.type == "click"){
        console.log("STOP");
        pauseListening();
        lookForChat();
    }
}

//prevent the enter key after another enter key
function pauseListening(){
    enterListener.removeEventListener("keydown", listen);
    sendListener.removeEventListener("click",listen);
    console.log("Stop Listening");
}
var input_area;
var check = true;
var flag=0;
var valid;
//user input
function userChat(){
    //user input
    input_area = document.getElementById('text');
    nextMessage.sender = 'user';
    nextMessage.message = input_area.value;
    input_area.value = "";
    if(validation()){
        check = false;
        console.log("Check is changed to " + check);
        flag += 1;
        console.log("flag : "+flag)
    }
    else{check = true;}
    console.log("check is " + check);


        if(check){
        exception = [true,"We need your this information to help you....<br>Please Enter your valid info"];
    }

    //user message send
    send(nextMessage.sender, nextMessage.message);

    userCount += 1;

    lookForChat();
}

//VALIDATION
function validation(){
    console.log("Enter the validation function");
    console.log(nextMessage.message + "count : " + count);
    //validation for name
    if(count == 1){
        console.log("checking for first message");
        console.log(isNaN(nextMessage.message));
        valid = isNaN(nextMessage.message);
        if(valid == true){
            //store the name for db
            name = nextMessage.message;
        }
        return valid; 
    }
    if(count > 1 && flag==0){
        name = nextMessage.message;
        return true;
    }

    //validation for mobile number
    else if(count>1 && flag == 1){
        console.log("checking for second message");
        console.log(!isNaN(nextMessage.message));
        valid = !isNaN(nextMessage.message);
        if(valid == true){
            mob_no = nextMessage.message;
        }
        return valid;
    }

    //validation for email
    else if(count > 1 && flag==2){
        console.log("checking for second message");
    var re = /\S+@\S+\.\S+/;
    valid = re.test(nextMessage.message);
    if(valid == true){
        email = nextMessage.message;

        //Storing on database
        sendData();
    }
    return valid;
    }
    else if(count > 1 && flag == 3){
        return true;
    }
}


///Store data to data base
function sendData(){
    name;mob_no;email;

    var httpr = new XMLHttpRequest();
    httpr.open("GET","./aj_f/get_data.php",true);
    httpr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    httpr.onreadystatechange = function(){
        if(httpr.readyState == 4 && httpr.status == 200){
            document.getElementById("response").innerHTML = httpr.responseText;
        }
    }
    httpr.send("name=" + name + "&mob_no=" + mob_no + "&email="+email);
}