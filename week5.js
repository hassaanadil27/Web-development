// let container = document.querySelector(".box");

// container.innerHTML = "i am a box";
//  let container2 = document.querySelector("#fifth");
//  container2.innerHTML = "i am not a box "

//  let allclass = document.querySelectorAll( ".box");

//     let allclass = document.getElementsByClassName("box");

//     console.log(allclass);
//     for (let box of allclass){

//     box.style.margin = "200px";

//     box.style.backgroundColor = "black";

//     box.innerHTML += "i am thanos";
// }


let allclass = document.querySelectorAll(".box");

let button = document.querySelector(".btn");

button.addEventListener("click",function(){

    for (let box of allclass){

    box.innerHTML += "i am thanos";

    box.style.margin = "200px";
    box.style.backgroundColor = "black";
    box.style.display = "flex";
    }

})

