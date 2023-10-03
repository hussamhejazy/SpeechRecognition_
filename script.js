
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;


recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

    let input = document.getElementById('input')
    let p = document.getElementById('replay')
    input.value = text
    if (e.results[0].isFinal) {
        if (text.includes("how are you")) {
            
            p.classList.add("replay");
            p.innerHTML = "I am fine";
        }
        if (
            text.includes("what's your name") ||
            text.includes("what is your name")
            ) {
                
                p.classList.add("replay");
                p.innerHTML = "My Name is hussam";
        }
        
        if (text.includes("GitHub")) {
          
            p.classList.add("replay");
            p.innerHTML = "opening github channel";
            console.log("opening github");
            window.open("https://github.com/hussamhejazy");
     



      
    }
});



function micOpen() {
    recognition.start();
}



