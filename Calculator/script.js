let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})



// .........................................................................................


let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('toggle')

const enableLightMode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightMode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if(lightmode === "active") enableLightMode()

themeSwitch.addEventListener("click", () =>{
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightMode() : disableLightMode()
})

