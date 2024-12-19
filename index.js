const display = document.getElementById('display')

    
    function clearDisplay(){
        display.value = '';
    }
    function appendValue(value){
        display.value += value;
    }
    function CalculateResult(){
        try {
            display.value = eval(display.value);
            if (display.value === 'Infinity'){
                display.value = 'Error';
            }
            } catch (e) {
                display.value = 'Error';
                }
            }
               
    function deleteLast() {
        display.value = display.value.slice(0,-1);
    }
