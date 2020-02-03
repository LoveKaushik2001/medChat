//where chatting will occur
var chatArea = document.getElementById('chatArea');
//help to find the turn
var count = 0;
//chat by whom
var botCount = 0;
var userCount = 0;
//send message(object)
var nextMessage = {
    message: "",
    sender: ""
};
//when some diffrent thing is encountered
var exception = [false,""];
//After lead is generated to stop chatting
var stopChat = false;

//var for database purpose
var disease;
var name;
var mob_no;
var email;
var str;