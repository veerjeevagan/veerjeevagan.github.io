const cardBlock = document.querySelector(".main-block");
var smallBlock = document.querySelectorAll(".small-block");
var info = document.querySelectorAll(".info");
console.log(info )
cardBlock.addEventListener('click' , ()=>{
    cardBlock.classList.toggle("main-block-press");
    for(block of smallBlock) {
        block.classList.toggle("small-block-out" );
        // block.info.classList.toggle("info-out");
    }
    info.forEach(i => {i.classList.toggle("info-out");});
});

var smallBlockOut = document.querySelectorAll(".small-block-out");

// var element = document.createElement("a");

var about = document.querySelector(".about-info");
var project = document.querySelector(".project-info");
var game = document.querySelector(".game-info");
// console.log(smallBlock)
// for(block of smallBlock) { 
//     console.log(block)
//     block.addEventListener('click' , ()=> {
//         block.classList.remove("small-block-out");
        

//         // element.setAttribute("href", 'https://www.w3schools.com/jsref/met_node_appendchild.asp');
//         // smallBlock.appendChild(element);
//         // setTimeout('window.open("#","_self")', 700);

//         setTimeout('window.open("#","_self")', 700);
//     });
// }

about.addEventListener('click' , ()=> {
    about.classList.remove("small-block-out");
    setTimeout('window.open("./about_me.html","_self")', 700);
}
);
project.addEventListener('click' , ()=> {
    project.classList.remove("small-block-out");
    setTimeout('window.open("./projects.html","_self")', 700);
}
);
game.addEventListener('click' , ()=> {
    game.classList.remove("small-block-out");
    setTimeout('window.open("./game.html","_self")', 700);
}
);