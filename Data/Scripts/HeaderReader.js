var msg = new SpeechSynthesisUtterance();
document.querySelectorAll("h1").forEach((header) => {
    header.onmouseover = (event) => {
        msg.text = header.innerText;
        window.speechSynthesis.speak(msg);
    };
});
