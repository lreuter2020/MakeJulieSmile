document.addEventListener("DOMContentLoaded", () => {
    let Quotes = [
        "You are loved and appreciated!",
        "You are the best!",
        "I appreciate you!",
        "You got milf potential!",
        "You are one of a kind!",
        "Have a wonderful day!",
        "Nobody could replace you!",
        "Tavernetti loves you!",
        "You are more fun than anyone or anything I know, including bubble wrap",
        "You light up any room you are in",
        "I appreciate our friendship",
        "Nothing can stop you",
        "You are an excellent friend"
    ]

    let loggedIn = sessionStorage.getItem('isJulie');
    let play = false;
    console.log(loggedIn)
    if(loggedIn){
        play = true
    } else {
        if(confirm("Are You Julie")){
            console.log("Hello Julie")
            sessionStorage.setItem('isJulie', true)
            play = true;
        } else {
            document.getElementById("content").innerText = "Fuck off then"
        }
    }
    
    

    if(play){
        document.getElementById("content").innerText = "Hello Julie"
        setInterval(() => {
            document.getElementById("content").classList.toggle("active")
            document.getElementById("content").classList.toggle("faded")
            document.getElementById("content").innerText = Quotes[Math.floor(Math.random() * Quotes.length)]
        }, 10000)
    }
})