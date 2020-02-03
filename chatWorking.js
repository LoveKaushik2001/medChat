function lookForChat(){
    if(count == 0){
    startBot();
}
console.log("Looking for chat " + (count+1));

last = nextMessage.sender;

if(last == "bot"){
    userChat();
} 
else{
    text.focus();

    if(stopChat){
        nextMessage.sender = "bot";
        nextMessage.message = "";
        listenFor();
    }
    else{
        if(count == 0){
           wait = 100;
           console.log(wait);
        }
        else{
            wait = 500;
        }
        setTimeout(function(){
            console.log("waiting for bot");
            botChat();
        },wait);
        }
    }
}

function startBot(){
    console.log("starting bot");
    chatArea.innerHTML = '';
    document.getElementById('message').style.display = 'block';
}

//send function
function send(sender,message){
    console.log("what is it...........................?");
    chatArea.insertAdjacentHTML("beforeend", "<div id='chat-"+ count +"' class='chat-container'><div class='chat-wrapper' id='chat-a-" + count + "'><p id='a-' class='chat-"+ sender + "'>"+message + "</p><div"+sender+"></div></div></div>");
    document.getElementById('chat-'+count).scrollIntoView();
    count+=1;
}