const characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','!','£','$','%','&','@','~','#','>'];
let pass ="";
console.log(pass)
const element = document.getElementById("btn");
console.log(element)
element.addEventListener("click", function () {
    let x=0;
    for(let i=0;i<8;i++)
    {
        x=Math.floor(Math.random()*characters.length);
        pass+=characters[x];
    }
    let y =(document.getElementById("item-1"));
    y.textContent=pass;
    pass=""
    for(let i=0;i<8;i++)
    {
        x=Math.floor(Math.random()*characters.length);
        console.log(x)
        pass+=characters[x];
        console.log(pass)
    }
    
    y=(document.getElementById("item-2"));
    y.innerHTML=pass;

    pass=""
    for(let i=0;i<8;i++)
    {
        x=Math.floor(Math.random()*characters.length);
        pass+=characters[x];
    }
    y=(document.getElementById("item-3"));
    y.innerHTML=pass;
    pass=""
    for(let i=0;i<8;i++)
    {
        x=Math.floor(Math.random()*characters.length);
        pass+=characters[x];
    }
    y=(document.getElementById("item-4"));
    y.innerHTML=pass;
    pass=""
  });


 let x=0;
 
function copytext(x){
    if(x===1)
    {
        var copyText = document.getElementById("item-1");
        let xx= copyText.innerText;
        navigator.clipboard.writeText(xx);
        // text = document.querySelector("#item-1");
        popup.classList.add("active");
        popup.addEventListener("animationend", () => {
            popup.classList.remove("active");
          });
    }
    else if(x===2)
    {
        var copyText = document.getElementById("item-2");
        let xx= copyText.innerText;
        navigator.clipboard.writeText(xx);
        // text = document.querySelector("#item-2");
        popup.classList.add("active");
        popup.addEventListener("animationend", () => {
            popup.classList.remove("active");
          });
    }
    else if(x===3)
    {
        var copyText = document.getElementById("item-3");
        let xx= copyText.innerText;
        navigator.clipboard.writeText(xx);
        // text = document.querySelector("#item-1");
        popup.classList.add("active");
        popup.addEventListener("animationend", () => {
            popup.classList.remove("active");
          });
    }
    else
    {
        var copyText = document.getElementById("item-4");
        let xx= copyText.innerText;
        navigator.clipboard.writeText(xx);
        popup.classList.add("active");
        popup.addEventListener("animationend", () => {
            popup.classList.remove("active");
          });
    }
}
let text = document.querySelector("#item-1");
const popup = document.querySelector(".popup");

text.addEventListener("click", () => {
  popup.classList.add("active");
  copyToClipBoard();
});
popup.addEventListener("animationend", () => {
  popup.classList.remove("active");
});