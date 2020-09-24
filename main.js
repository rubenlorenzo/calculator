function clickNumber(num){
    addScreen(num);
}

function addScreen(btnContent){
    let screen=document.getElementById("screen");
    screen.value+=btnContent;
}

function clickOperator(op){
    let screen=document.getElementById("screen");
    
    if(op=='+' || op=='-' || op=='*' || op=='/'){
        if(!isNaN(screen.value)){
            addScreen(op);
        }else{
            screen.value=0;
        }
    }
    
}