let main = document.querySelector(".main")
console.log(main)

let child = main.children;
console.log(child[1]);


let sib =main.nextElementSibling;
let child2 = sib.children;
console.log(sib.children);
console.log(child2[1].parentElement)