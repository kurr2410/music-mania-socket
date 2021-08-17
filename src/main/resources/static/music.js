let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");

let audio1=()=>document.getElementById("audio1");
let audio2=()=>document.getElementById("audio2");

btn1.onclick=function(){
audio1().play();
}
btn2.onclick=function(){
audio2().play();
}
btn3.onclick=function(){
 audio1.play();
 }
 btn4.onclick=function(){
 audio2.play();
 }

let sock;
let client;

window.onload = function () {
    sock = new SockJS('/music-mania') // creates a websocket connection
    client = Stomp.over(sock)         // wraps socket into Stomp object

    client.connect({}, function () {
        client.subscribe('/instruments/play', function (data) {
            let body = JSON.parse(data.body)
            document.getElementById(body.instrument).play()
        })
    })
}