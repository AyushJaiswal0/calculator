function add(a, b)
{
    return Math.floor(Math.round((a + b) * (10 ** 8)))/(10 ** 8);
}

function subtract(a,b)
{
    return Math.floor(Math.round((a - b) * (10 ** 8)))/(10 ** 8);
}

function multiply(a, b)
{
    return Math.floor(Math.round((a * b) * (10 ** 8)))/(10 ** 8);
}

function divide(a, b)
{
    if(b == 0)
    {
        return "ERROR";
    }
    return Math.floor(Math.round((a / b) * (10 ** 8)))/(10 ** 8);
}

function operate(op, fNum, sNum)
{
    if(op == "" && sNum == 0)
    {
        return fNum;
    }
    else if(op == "-")
    {
        return subtract(fNum, sNum);
    }
    else if(op == "*")
    {
        return multiply(fNum, sNum);
    }
    else if(op == "/")
    {
        return divide(fNum, sNum);
    }
    else if(op == "+")
    {
        return add(fNum, sNum);
    }
    else
    {
        return "";
    }
}

let firstNum = 0, operator = "", secondNum = 0, output = "", display = "";

const screen = document.querySelector(".screen"); 
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let choice = button.id;
        if(choice == "AC")
        {
            firstNum = "";
            operator = "";
            secondNum = "";
            display = "";
            screen.textContent = "";
        }
        else if(choice == "C")
        {
            if(!operator)
            {
                let len = display.length ;
                display = display.substring(0, len-1);
                screen.textContent = display;
            }
            else
            {
                operator = "";
                display = firstNum;
                screen.textContent = firstNum;
            }
        }
        else if(choice == "=")
        {
            firstNum = operate(operator, (+firstNum), (+secondNum));
            output = firstNum;
            screen.textContent = output;
            display = output;
            operator = "";
            secondNum = 0;
        }
        else if(!operator)
        {

            if(choice == "+" || choice == "-" || choice == "*" || choice == "/")
            {
                operator = choice;
                if(choice == "*")
                {
                    choice = "×";
                }
                screen.textContent += choice;
                display += choice;
                secondNum = 0;
            }
            else
            {
                firstNum += choice;
                display += choice;
                screen.textContent += choice;
            }
        }
        else
        {
            if(choice == "+" || choice == "-" || choice == "*" || choice == "/")
            {
                firstNum = operate(operator, (+firstNum), (+secondNum));
                operator = choice;
                if(choice == "*")
                {
                    choice = "×";
                }
                display += choice;
                screen.textContent = firstNum;
                screen.textContent += choice;
                secondNum = 0;
            }
            else
            {
                secondNum += choice;
                display += choice;
                screen.textContent += choice;
            }
        }
    });
});
