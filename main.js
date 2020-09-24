function clickNumber(num){
    addScreen(num);
}

function addScreen(btnContent){
    let screen=document.getElementById("screen");
    screen.value+=btnContent;
}

function clickOperator(op){
    addScreen(op);
}