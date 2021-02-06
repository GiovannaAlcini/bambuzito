let btn = document.querySelector(".btn");
let img = document.querySelector(".muda_fundo");

btn.addEventListener("click", event=>{
    var confirma = confirm ('já tomou água hoje?');
    if(confirma == true){
        img.src= './img/bambuzito.png';
    }else{
        img.src= './img/bambutriste.jpg';
    }
})
// img.addEventListener("mouseenter", event=>{
//     confirm(`já tomou água hoje?`)
//     var name = prompt("qual seu nome?")
//     alert(`tá hidratrado hihi ${name} ;)`);
// })