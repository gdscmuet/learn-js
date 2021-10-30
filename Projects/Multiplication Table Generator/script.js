function generateTable(){
    let num = document.getElementById("number").value;
    let items = document.getElementsByClassName("ans");
    for(let i=0; i<items.length; i++){
        items[i].innerHTML="";
    }
    for(let i = 1; i <=10; i++){
        let answer = document.createElement("h5");
        answer.className = "ans";
        answer.innerHTML = num + "\tx\t" + i + "\t=\t" + num*i;
        document.getElementById("resultSection").appendChild(answer); 
    }
}