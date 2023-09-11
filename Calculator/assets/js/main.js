//get calc sreen
const screen = document.querySelector(".calc_screen")
//get calculator buttons
const btns = document.querySelectorAll("button")
var btnId

//add button event listeners
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        //get clicked button id
        btnId = btn.id

        //pass id to button handler function
        buttonHandler(btnId)
    })
})

/***********button handler*****/
//set variables
var num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0, num6 = 0, num6 = 0, num7 = 0, num8 = 0, num9 = 0
var operator = "", control = "", result = 0, num = 0
var expNum = 1, on = -1

function buttonHandler(btnId) {
    console.clear()

    if (btnId == "on") {
        //turn on calculator
        on *= -1

        if (on == 1) {
            screen.textContent = "0"
            reset()
        } else {
            screen.textContent = "off"
            reset()
        }
    }

    //do this if calculator is on
    if (on == 1) {
        if (btnId == "=") {
            //call calculation function
            calculate(num, operator)
            //reset variables
            reset()
        }

        //check if id is a control button
        controls()

        //check if id is for an operator button
        operators()

        //listen for number buttons
        if (btnId == "1" || btnId == "2" || btnId == "3" || btnId == "4" || btnId == "5" || btnId == "6" || btnId == "7" || btnId == "8" || btnId == "9" || btnId == "0") {
            //console.log(btnId);
            if (expNum == 1) {
                num1 += btnId
                num1 = Number(num1) //convert to number
                //show to screen
                screen.textContent = num1
            } else if (expNum == 2) {
                num2 += btnId
                num2 = Number(num2) //convert to number
                //show to screen
                screen.textContent = num2
            } else if (expNum == 3) {
                num += btnId
                num = Number(num) //convert to number
                //show to screen
                screen.textContent = num
            }
        }
    }
}

/**********Control keys*****/
function controls() {
    if (btnId == "del" || btnId == "ac" || btnId == "on" || btnId == "pow" || btnId == "ans") {

        if (btnId == "ac") {
            screen.textContent = "0"
            reset()
        } else if (btnId == "del") {
            //delete last number
            if (expNum == 1) {
                num1 = num1.toString()
                num1 = num1.slice(0, -1)
                num1 = Number(num1)
                screen.textContent = num1
            } else if (expNum == 2) {
                num2 = num2.toString()
                num2 = num2.slice(0, -1)
                num2 = Number(num2)
                screen.textContent = num2
            }
        }
        if (btnId == "ans") {
            //show result to screen
            screen.textContent = result
            console.log("answer: " + result);

            num = result
        }

    }
}

/**********Operator keys*****/
function operators() {
    if (btnId == "+" || btnId == "-" || btnId == "*" || btnId == "/" || btnId == "+-" || btnId == "sqrt") {

        if (expNum >= 3) {
            calculate(num, operator)
            num = 0
        } else {
            //set excpeted number
            expNum++
        }


        //set operator
        if (btnId == "+") {
            operator = "add"
        } else if (btnId == "-") {
            operator = "sub"
        } else if (btnId == "*") {
            operator = "mult"
        } else if (btnId == "/") {
            operator = "dev"
        } else if (btnId == "sqrt") {
            operator = "sqrt"
        }
    }
}

/******do calculations******* */
function calculate(num, operator) {

    if (expNum <= 2) {
        console.log(expNum);

        if (operator == "add") {
            result = num1 + num2
        } else if (operator == "sub") {
            result = num1 - num2
        } else if (operator == "mult") {
            result = num1 * num2
        } else if (operator == "dev") {
            result = num1 / num2
        } else if (operator == "sqrt") {
            result = Math.sqrt(num1)
        }
    }
    if (expNum >= 3) {
        console.log(expNum);

        if (operator == "add") {
            result += num
        } else if (operator == "sub") {
            result -= num
        } else if (operator == "mult") {
            result *= num
        } else if (operator == "dev") {
            result /= num
        } else if (operator == "sqrt") {
            result = Math.sqrt(num)
        }
    }

    //show to screen
    screen.textContent = result

    console.log("operator: " + operator);
    console.log("result: " + result);
}

/******reset variables******** */
function reset() {
    num1 = 0, num2 = 0, operator = "", control = ""
    expNum = 1, num = 0
}

