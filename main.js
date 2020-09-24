function addScreen(btnContent){
    let screen=document.getElementById("screen");
    screen.value+=btnContent;
}

function evil(fn) {
    return new Function('return ' + fn)();
}


function clickNumber(num){
    addScreen(num);
}

function clickOperator(op){
    let screen=document.getElementById("screen");
    
    if(op=='+' || op=='-' || op=='*' || op=='/'){
        if(!isNaN(screen.value)){
            addScreen(op);
        }else{
            screen.value=0;
        }
    }else if(op=='='){
        screen.value=evil(screen.value);
    }
    
}