function addScreen(btnContent){
    let screen=document.getElementById("screen");
    screen.value+=btnContent;
}

function evil(fn) {
    return new Function('return ' + fn)();
}

function count_point(text){
    let c_point=0;

    for(var i=0; i < text.value.length; i++){
        if(text.value[i]=="."){
            c_point++;
        }
        if(c_point>1){
            text.value=0;
        } 
    }
}

function clickNumber(num){    
    if(num!="."){
        addScreen(num);
    }else{
        addScreen(num);
        let screen=document.getElementById("screen");
        count_point(screen.value);
        
    }   
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
    }else if(op=='c'){
        screen.value=0;
    }
    
}