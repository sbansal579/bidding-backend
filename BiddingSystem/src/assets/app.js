var stompClient = null;

window.onload = function(){
    console.log('on load');
    connect();
    sendName();
};

// function setConnected(connected) {
//     $("#connect").prop("disabled", connected);
//     $("#disconnect").prop("disabled", !connected);
//     if (connected) {
//         $("#conversation").show();
//     }
//     else {
//         $("#conversation").hide();
//     }
//     $("#greetings").html("");
// }

function connect() {
    var socket = new SockJS('/rt-auction');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      //  setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/rt-product/auction-updates/1', function (greeting) {
           // showGreeting(JSON.parse(greeting.body).content);
           console.log('>>>> '+JSON.parse(greeting.body));
        });
    });
}

/* function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
} */

function sendName() {
    //stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
    stompClient.send("/rt-auction/join/1", {}, JSON.stringify({'userId':'1','userName':'abc','joiningTime':Date.now() }));
} 

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

/* $(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
}); */