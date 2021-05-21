const msgEl=document.getElementById('msg');
const randomNum=getRandomNumber();

console.log('Nambe:',randomNum);

window.SpeechRecognition=
window.SpeechRecognition||window.webkitSpeechRecognition;

let recognition=new window.SpeechRecognition();
recognition.start();
function onSpeak(e){
  const msg=e.results[0][0].transcript;
  console.log(msg);
}

function getRandomNumber(){
    return Math.floor(Math.random()*100)+1;

}
recognition.addEventListener('result' ,onSpeak)