// ==========================
// PASSWORD
// ==========================

const PASSWORD = "14042026";

// ==========================
// ELEMENTS
// ==========================

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");

const passwordScreen = document.getElementById("passwordScreen");
const loadingScreen = document.getElementById("loadingScreen");
const intro = document.getElementById("intro");

const typing = document.getElementById("typing");
const wrong = document.getElementById("wrong");

// ==========================
// TYPEWRITER TEXT
// ==========================

const message = `This note isn't handwritten because of my handwriting...

It's written with every feeling in my heart.

Every word you are about to read comes from a place where only you exist.

So, take your time...

Because every page holds a little piece of my heart.

— Just for you, Akriti ❤️`;

// ==========================
// PASSWORD
// ==========================

unlockBtn.addEventListener("click", ()=>{

if(passwordInput.value===PASSWORD){

passwordScreen.classList.add("hidden");

loadingScreen.classList.remove("hidden");

setTimeout(()=>{

loadingScreen.classList.add("hidden");

intro.classList.remove("hidden");

typeWriter();

},2500);

}else{

wrong.innerHTML="❌ Wrong Password";

passwordInput.style.border="2px solid red";

}

});

// ==========================
// TYPEWRITER
// ==========================

let i=0;

function typeWriter(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

// ==========================
// HEARTS
// ==========================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.opacity=.7;

heart.style.animation="floatHeart 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,350);

// ==========================
// FLOAT HEART ANIMATION
// ==========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:translateY(0) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
// Continue Button

document
.getElementById("continueBtn")
.addEventListener("click",()=>{

document.getElementById("intro").classList.add("hidden");

document.getElementById("envelopeSection").classList.remove("hidden");

});

// Open Envelope

document
.getElementById("openLetter")
.addEventListener("click",()=>{

document.querySelector(".flap").style.transform="rotateX(180deg)";

document.querySelector(".letter").style.top="5%";

});
