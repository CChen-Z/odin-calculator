let operand1=0;
let operand2=undefined;
let operatorFlag=false;
let preOperator='+';

const btns=document.querySelectorAll('button');
const numBtns=document.querySelectorAll('button.num');
const operatorBtns=document.querySelectorAll('button.operator')
const screen=document.querySelector('.screen');
const clear=document.querySelector('#clear');
const neagte=document.querySelector('#negate');
const backspace=document.querySelector('#backspace');

btns.forEach(button =>{
    button.style.opacity=1;
    button.addEventListener('mousedown',e=>(e.target.style.opacity=0.7));
    button.addEventListener('mouseup',e=>(e.target.style.opacity=1));
})

numBtns.forEach(numBtn=>{
    numBtn.addEventListener('click',function(e){
        if(e.target.textContent==='.'){
            if (screen.textContent.includes('.')) {return;}
            if (screen.textContent===''){screen.textContent='0';}
        }
        if (operatorFlag==false){
            screen.textContent+=e.target.textContent;
        }else {
            screen.textContent='';
            screen.textContent+=e.target.textContent;
            operatorFlag=false;
        }
        if (screen.textContent.length>9){
            screen.textContent=Number(screen.textContent).toExponential(7).toString();
        }
    })
})

operatorBtns.forEach(operatorBtn=>{
    operatorBtn.addEventListener('click',(e)=>{
        screen.textContent=calculate(preOperator).toString();
        preOperator=e.target.textContent;
        operatorFlag=true;
        if (screen.textContent.length>8){
            screen.textContent=Number(screen.textContent).toExponential(6).toString();
        }
    });
})

clear.addEventListener('click',()=>{
    operand1=0;
    operand2=undefined;
    operatorFlag=false;
    preOperator='+';
    screen.textContent='';
})

neagte.addEventListener('click',()=>{
    if(screen.textContent===''){
        screen.textContent=0;
    }
    screen.textContent=screen.textContent*-1;
})

backspace.addEventListener('click',()=>{
    if(screen.textContent.length>0){
        screen.textContent=screen.textContent.slice(0,screen.textContent.length-1);
    }
})

function calculate(method){
    if (operand2===undefined){
        operand2=Number(screen.textContent);
    }else {
        operand1=operand2;
        operand2=Number(screen.textContent);
    }
    switch(method){
        case '+': return operand2=(operand1+operand2); 
        case '-': return operand2=(operand1-operand2);
        case '×': return operand2=(operand1*operand2); 
        case '/': return operand2=(operand1/operand2);
        case '=': return operand2;
    }
    
    
}
