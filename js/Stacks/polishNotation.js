var evalRPN = function(tokens) {
    
    let stack = [];
    let result = 0;
    //iterate over the arry
    for(let i =0; i < tokens.length; i++){
        let chr = tokens[i];
        console.log(chr);
        if(chr === '+')
        {
            let firstNumber = stack.pop();
            let secondNumber = stack.pop();
            stack.push(firstNumber + secondNumber);

        }else if (chr === '-'){
            let firstNumber = stack.pop();
            let secondNumber = stack.pop();
            stack.push(firstNumber - secondNumber);
        }else if (chr === '*'){
            let firstNumber = stack.pop();
            let secondNumber = stack.pop();
            stack.push(firstNumber * secondNumber);
        }
        else if (chr === '/') {
            let firstNumber = stack.pop();
            let secondNumber = stack.pop();
            stack.push(firstNumber / secondNumber);
        }
        else{
            // is a number
            stack.push(parseInt(chr));
        }
    }

    return stack.pop();



};

evalRPN([["4","13","5","/","+"]])