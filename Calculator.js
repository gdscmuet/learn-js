let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'X') {
            buttonText = '*';
            screenValue+=buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
            screenValue = "";
        }
        else {
            screenValue+= buttonText;
            screen.value = screenValue;
        }
    })
}