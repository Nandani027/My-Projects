const display=document.getElementById('display');
let isDegree=true;


function backspace(){
    display.value=display.value.slice(0,-1);

}

function addDecimal() {
    if(!display.value.includes('.')){
        display.value+='.';
    }
    }

function calculate(){
    let expression =display.value;
    try{
        expression = expression.replace(/sin\(/g, `Math.sin(`);
        expression = expression.replace(/cos\(/g, `Math.cos(`);
        expression = expression.replace(/tan\(/g, `Math.tan(`);

        
        if (isDegree) {
            expression = expression.replace(/Math\.sin\(([^)]+)\)/g, `Math.sin(($1)*Math.PI/180)`);
            expression = expression.replace(/Math\.cos\(([^)]+)\)/g, `Math.cos(($1)*Math.PI/180)`);
            expression = expression.replace(/Math\.tan\(([^)]+)\)/g, `Math.tan(($1)*Math.PI/180)`);
        }


        let result=eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            display.value = "Error";
            setTimeout(() => display.value = '', 2000);
        } else {
            display.value = result;
        }
    }
    catch{
        display.value="Error";
        setTimeout(() => display.value = '', 2000);  
      
    }
}