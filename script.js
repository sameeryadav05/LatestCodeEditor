function run()
{
    let htmlcode = document.getElementById("HTML").value;
    let csscode = document.getElementById("CSS").value;
    let jscode = document.getElementById("JS").value;
    let output = document.getElementById("output")

    output.contentDocument.body.innerHTML = htmlcode + "<style>"+csscode+"</style>";
    output.contentWindow.eval(jscode);
    localStorage.setItem("html",htmlcode.value);
    localStorage.setItem("css",csscode.value);
    localStorage.setItem("js",jscode.value);
}
window.addEventListener("DOMContentLoaded",()=>{
    run();
    htmlButton.classList.add("htmlglow");
    cssButton.classList.remove("cssglow");
    jsButton.classList.remove("jsglow");
    htmlcode.value = localStorage.getItem("html");
    csscode.value = localStorage.getItem("css");
    jscode.value = localStorage.getItem("js");

})
//update
let htmlButton = document.querySelector("#html-btn");
let cssButton = document.querySelector("#css-btn");
let jsButton = document.querySelector("#js-btn");
let htmlbox = document.querySelector(".html")
let cssbox = document.querySelector(".css")
let jsbox = document.querySelector(".js")
let onhtml;
let oncss;
let onjs;

function swap(){
    if(onhtml==true)
    {
        htmlButton.classList.add("on");
    }
    if(onhtml==false)
    {
        htmlButton.classList.remove("on");
    }
    if(oncss==true)
    {
        cssButton.classList.add("on");
    }
    if(oncss==false)
    {
        cssButton.classList.remove("on");
    }
    if(onjs==true)
    {
        jsButton.classList.add("on");
    }
    if(onjs==false)
    {
        jsButton.classList.remove("on");
    }
    
}
window.addEventListener("DOMContentLoaded",()=>{
    onhtml=true;
    oncss=false;
    onjs=false;
})
// let onpage = document.getElementsByClassName("on");
// function change()
// {
//     onpage.innerHTML = "X";
    
// }
/// saving option
let save = document.querySelector("#save");
    save.addEventListener("click",()=>{

        function downloadFile(filename, content) {
            const blob = new Blob([content], { type: 'text/plain' });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        }
    
        // Download the files
        downloadFile("index.html", document.getElementById("HTML").value);
        downloadFile("style.css", document.getElementById("CSS").value);
        downloadFile("script.js", document.getElementById("JS").value);

            

    })
// saving option






htmlButton.addEventListener('click',()=>{
        onhtml=true;
        oncss=false;
        onjs=false;
        swap();
        // change();
        cssbox.classList.add("css-area");
        jsbox.classList.add("js-area");
        htmlbox.classList.remove("html-area");
        htmlButton.classList.add("htmlglow");
        cssButton.classList.remove("cssglow");
        jsButton.classList.remove("jsglow");

})
cssButton.addEventListener('click',()=>{
    onhtml=false;
    oncss=true;
    onjs=false;

    swap();
    // change();
    htmlbox.classList.add("html-area");
    jsbox.classList.add("js-area");
    cssbox.classList.remove("css-area")
    htmlButton.classList.remove("htmlglow");
    cssButton.classList.add("cssglow");
    jsButton.classList.remove("jsglow");



})
jsButton.addEventListener('click',()=>{
    onhtml=false;
    oncss=false;
    onjs=true;
    swap();
    // change();
    jsbox.classList.remove("js-area")
    htmlbox.classList.add("html-area");
    cssbox.classList.add("css-area");
    htmlButton.classList.remove("htmlglow");
    cssButton.classList.remove("cssglow");
    jsButton.classList.add("jsglow");

})


// end of updata

let htmlcode = document.getElementById("HTML");
let csscode = document.getElementById("CSS");
let jscode = document.getElementById("JS")
let btn = document.querySelector("#btn");
window.addEventListener('DOMContentLoaded',()=>{
    htmlcode.value = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome !</h1>
    
</body>
</html>`
csscode.value = `h1{
color:black;
}
body{
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
}`
run();
})
btn.addEventListener('click',()=>{
    htmlcode.value = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flappy Bird</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="background"></div>
        <img src="https://c0.klipartz.com/pngpicture/66/12/sticker-png-graphics-flappy-bird-computer-icons-sprite-flyer-bird-flappy-bird-artwork-food-drinks-thumbnail.png" class="bird" id="bird-1">
        <div class="message">
            Enter to start Game <p><span style="color:red;">&uarr;</span>&nbsp;Arrowup to control</p>
        </div>
        <div class="score">
            <span class="score_title"></span>
            <span class="score_val"></span>
        </div>

    <script src="script.js"></script>
</body>
</html>`
csscode.value = `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
.background{
    height: 100vh;
    width: 100vw;
    background:url("https://e1.pxfuel.com/desktop-wallpaper/982/569/desktop-wallpaper-flappy-bird-backgrounds-flappy-bird.jpg") no-repeat center center fixed;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -moz-background-size:cover;
    background-size:cover;
}
.bird{
    height: 100px;
    width: 130px;
    position: fixed;
    top:40vh;
    left: 30vw;
    z-index: 100;
}
.pipe_sprite{
    position: fixed;
    top: 40vh;
    left: 100vw;
    height: 70vh;
    width: 6vw;
    background: radial-gradient(lightgreen 50%,green);
    border:5px solid black;
}
.message{
    position: absolute;
    z-index: 10;
    color: black;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.messagestyle{
    background: white;
    padding: 30px;
    box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
    border-radius: 5%;
}
.score{
    position: fixed;
    z-index: 10;
    height: 10vh;
    font-size: 10vh;
    font-weight: 100;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    top:0;
    left: 0;
    margin: 10px;
}
.score_val{
    color: gold;
    font-weight: bold;
}
@media only screen and (max-width:1000px){
    .message{
        font-size: 50px;
        top: 50%;
        white-space: nowrap;
    }
    .score{
        font-size: 8vh;
    }
    .bird{
        width: 120px;
        height: 90px;
    }
    .pipe_sprite{
        width: 14vw;

    }
}`
jscode.value = `let move_speed = 3,gravity = 0.5;
let bird= document.querySelector(".bird");
let img = document.getElementById("bird-1");
let bird_props = bird.getBoundingClientRect();

let background = document.querySelector(".background").getBoundingClientRect();
let score_val = document.querySelector(".score_val");
let message = document.querySelector(".message");
let score_title = document.querySelector(".score_title");

let game_state = 'start';
img.style.display = 'none';
message.classList.add('messagestyle');
document.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter' && game_state != 'play')
    {
        document.querySelectorAll('.pipe_sprite').forEach((e) =>{
            e.remove();
        });

        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'play';
        message.innerHTML = '';
        score_title.innerHTML = 'Score : ';
        score_val.innerHTML = '0';
        message.classList.remove('messagestyle');
        play();
    }
});
function play()
{
    function move(){
        if(game_state != 'play')return;
        let pipe_sprite = document.querySelectorAll(".pipe_sprite");
        pipe_sprite.forEach((element)=>{
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if(pipe_sprite_props.right <= 0){
                element.remove();
            }
            else{
                if(bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width>pipe_sprite_props.left && bird_props.top<pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top){

                    game_state = 'End';
                    message.innerHTML = 'Game over'.fontcolor('red') + '<br>Press Enter To Restart';

                    message.classList.add("messagestyle");
                    img.style.display = 'none';
                    return;
                }else{
                    if(pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score == '1'){
                        score_val.innerHTML = score_val.innerHTML + 1;
                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy = 0;
    function apply_gravity(){
        if(game_state != 'play')return;
        bird_dy = bird_dy + gravity;
        document.addEventListener('keydown',(e)=>{
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = "https://c0.klipartz.com/pngpicture/66/12/sticker-png-graphics-flappy-bird-computer-icons-sprite-flyer-bird-flappy-bird-artwork-food-drinks-thumbnail.png";
                bird_dy = -7.6;
            }
        });
        document.addEventListener('keyup',(e)=>{
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = 'https://c0.klipartz.com/pngpicture/66/12/sticker-png-graphics-flappy-bird-computer-icons-sprite-flyer-bird-flappy-bird-artwork-food-drinks-thumbnail.png';
            }
        });
        if(bird_props.top <= 0 || bird_props.bottom >=background.bottom){
            game_state = 'End';
            message.style.left = '20vw';
            window.location.reload();
            message.classList.remove('messagestyle');
            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);
    let pipe_seperation = 0;
    let pipe_gap = 35;
    function create_pipe(){
        if(game_state != 'play')return;

        if(pipe_seperation > 115){
            pipe_seperation = 0;
            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi -70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';
            document.body.appendChild(pipe_sprite_inv);
            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';
            document.body.appendChild(pipe_sprite);
        }
        pipe_seperation++;
        requestAnimationFrame(create_pipe);
    }
    requestAnimationFrame(create_pipe);
}
`
run();

})

// edits

const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".CreateBtn");
let notes = document.querySelectorAll(".input-box");

function shownotes()
{
    notescontainer.innerHTML = localStorage.getItem("notes");
}
shownotes();
function updateStorage()
{
    localStorage.setItem("notes",notescontainer.innerHTML);
}


createBtn.addEventListener("click",()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true")
    img.src = "delete.png";
    notescontainer.appendChild(inputbox).appendChild(img);
})

notescontainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }

})
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

let noteBTn = document.querySelector(".note");
noteBTn.addEventListener("click",()=>{

})

let noteBtn = document.querySelector(".note");
let bodyTag = document.querySelector("body");
let editor = document.querySelector("#editor");
let cross = document.querySelector("#cross");
let NoteMainContainer = document.querySelector(".notecontainer");
let onnote = false

noteBTn.addEventListener("click",(event)=>{
    onnote = true;
    bodyTag.classList.remove("bodyp");
    bodyTag.classList.remove("bimg");
    editor.classList.add("dis");
    NoteMainContainer.classList.remove("dis");
    cross.classList.remove("dis");
      
    // window.location.reload(false);
})


cross.addEventListener("click",()=>{
    onnote=false;
    bodyTag.classList.add("bodyp");
    bodyTag.classList.add("bimg");
    editor.classList.remove("dis");
    NoteMainContainer.classList.add("dis");
    cross.classList.add("dis");

})
