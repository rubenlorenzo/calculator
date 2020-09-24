function addScreen(btnContent){
    let screen=document.getElementById("screen");
    screen.value+=btnContent;
}

function evil(fn) {
    return new Function('return ' + fn)();
}

function count_point(text){
    let c_point=0;

    for(var i=0; i < text.length; i++){
        if(text[i]=="."){
            c_point++;
        }
        if(text[i]=='+' || text[i]=='-' || text[i]=='*' || text[i]=='/'){
            c_point=0;
        }     
    }

    return c_point;
}

function clickNumber(num){    
    if(num!="."){
        addScreen(num);
    }else{
        addScreen(num);
        let screen=document.getElementById("screen");
        if(count_point(screen.value)>1){
            screen.value="";
        }
    }   
}

function clickOperator(op){
    let screen=document.getElementById("screen");
    
    if(op=='+' || op=='-' || op=='*' || op=='/'){
        if(!isNaN(screen.value)){
            addScreen(op);
        }else{
            screen.value="";
        }
    }else if(op=='='){
        screen.value=evil(screen.value);
    }else if(op=='c'){
        screen.value="";
    }
    
}