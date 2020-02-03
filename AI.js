function botChat(){
    nextMessage.sender = "bot";
    if(botCount >= botScript.length){
        nextMessage.message = goodbye
        stopChat = true;
    }
    else{
        nextMessage.message = botScript[botCount];
    }

    if(exception[0]){
        nextMessage.message = exception[1];
    }

    //BOT WILL MESSAGE  
    send(nextMessage.sender, nextMessage.message);

    //record for further chat
    if(exception[0]){
        exception = [false,""];
    }
    else{
        botCount += 1;
    }
    
    //user is replying
    listenFor();
}

//Bot reply cases :
var botScript = [
    "We got it we can help you in this but for that please tell your name...",
    "For a proper communication can you provide us your mobile number?",
    "For information regarding your problem please share your email-id",
    "Thank you for providing the info we will contact you soon"
];

var goodbye = "Have a nice day";