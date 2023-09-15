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

        onOff()
        //pass id to button handler function
        buttonHandler(btnId)
    })
})

/***********button handler*****/
//set variables
var num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0, num6 = 0, num6 = 0, num7 = 0, num8 = 0, num9 = 0
var operator = "", control = "", result = 0, num = 0
var expNum = 1, on = -1

/***check if calulator is on */
function onOff() {
    if (on == 1) {
        screen.style.borderColor = "green"
    } else {
        screen.style.borderColor = "red"
    }
}

//button handler function
function buttonHandler(btnId) {

    //check which button was clicked
    switch (btnId) {
        case "on":
            //turn on/off calculator
            on *= -1
            onOff()

            if (on == 1) {
                screen.innerHTML = "0"
            } else {
                //clear screen
                screen.innerHTML = ""
                //set control to 0
            }

            control = 0

            break
        case "clear":
            //clear screen
            screen.innerHTML = ""
            //set control to 0
            control = 0
            break
        case "backspace":
            //check if calculator is on
            if (on == 1) {
                //get screen value
                num = screen.innerHTML
                //remove last character
                num = num.slice(0, -1)
                //display new value
                screen.innerHTML = num
            }
            break
        case "plus":
            //check if calculator is on
            if (on == 1) {
                //check if control is 0
                if (control == 0) {
                    //get screen value
                    num = screen.innerHTML
                    //set num1 to screen value
                    num1 = num
                    //clear screen
                    screen.innerHTML = ""
                    //set control to 1
                    control = 1
                    //set operator to +
                    operator = "+"
                }
            }
            break
        case "minus":
            //check if calculator is on
            if (on == 1) {
                //check if control is 0
                if (control == 0) {
                    //get screen value
                    num = screen.innerHTML
                    //set num1 to screen value
                    num1 = num
                    //clear screen
                    screen.innerHTML = ""
                    //set control to 1
                    control = 1
                    //set operator to -
                    operator = "-"
                }
            }
            break
        case "multiply":
            //check if calculator is on
            if (on == 1) {
                //check if control is 0
                if (control == 0) {
                    //get screen value
                    num = screen.innerHTML
                    //set num1 to screen value
                    num1 = num
                    //clear screen
                    screen.innerHTML = ""
                    //set control to 1
                    control = 1
                    //set operator to *
                    operator = "*"
                }
            }
            break
        case "divide":
            //check if calculator is on
            if (on == 1) {
                //check if control is 0
                if (control == 0) {
                    //get screen value
                    num = screen.innerHTML
                    //set num1 to screen value
                    num1 = num
                    //clear screen
                    screen.innerHTML = ""
                    //set control to 1
                    control = 1
                    //set operator to /
                    operator = "/"
                }
            }
            break
        case "equals":
            //check if calculator is on
            if (on == 1) {
                //check if control is 1
                if (control == 1) {
                    //get screen value
                    console.log(control);
                    num = screen.innerHTML
                    //set num2 to screen value
                    num2 = num
                    //check operator
                    switch (operator) {
                        case "+":
                            //add num1 and num2
                            result = parseFloat(num1) + parseFloat(num2)
                            //display result
                            screen.innerHTML = result
                            //set control to 0
                            control = 0
                            break
                        case "-":
                            //subtract num2 from num1
                            result = parseFloat(num1) - parseFloat(num2)
                            //display result
                            screen.innerHTML = result
                            //set control to 0
                            control = 0
                            break
                        case "*":
                            //multiply num1 and num2
                            result = parseFloat(num1) * parseFloat(num2)
                            //display result
                            screen.innerHTML = result
                            //set control to 0
                            control = 0
                            break
                        case "/":
                            //divide num1 by num2
                            result = parseFloat(num1) / parseFloat(num2)
                            //display result
                            screen.innerHTML = result
                            //set control to 0
                            control = 0
                            break
                    }
                }
            }
            break
        case "dot":
            //check if calculator is on
            if (on == 1) {
                //check if control is 0
                if (control == 0) {
                    //check if screen is empty
                    if (screen.innerHTML == "") {
                        //display 0.
                        screen.innerHTML = "0."
                    } else {
                        //display .
                        screen.innerHTML += "."
                    }
                }
            }
            break
        case "plusminus":
            //check if calculator is on
            if (on == 1) {
                //check if control is 0
                if (control == 0) {
                    //get screen value
                    num = screen.innerHTML
                    //check if screen is empty
                    if (num == "") {
                        //display 0
                        screen.innerHTML = "0"
                    } else {
                        //check if screen value is positive
                        if (num > 0) {
                            //display -screen value
                            screen.innerHTML = "-" + num
                        } else {
                            //display screen value without -
                            screen.innerHTML = num.slice(1)
                        }
                    }
                }
            }
            break
        case "percent":
            //check if calculator is on
            if (on == 1) {
                //check if control is 0
                if (control == 0) {
                    //get screen value
                    num = screen.innerHTML
                    //check if screen is empty
                    if (num == "") {
                        //display 0
                        screen.innerHTML = "0"
                    } else {
                        //divide screen value by 100
                        result = parseFloat(num) / 100
                        //display result
                        screen.innerHTML = result
                    }
                }
            }
            break
        case "square":
            //check if calculator is on
            if (on == 1) {
                //get screen value
                num = screen.innerHTML
                //check if screen is empty
                if (num == "") {
                    //display 0
                    screen.innerHTML = "0"
                } else {
                    //square screen value
                    result = parseFloat(num) * parseFloat(num)
                    //display result
                    screen.innerHTML = result
                }
            }
            break
        case "cube":
            //check if calculator is on
            if (on == 1) {
                //get screen value
                num = screen.innerHTML
                //check if screen is empty
                if (num == "") {
                    //display 0
                    screen.innerHTML = "0"
                } else {
                    //cube screen value
                    result = parseFloat(num) * parseFloat(num) * parseFloat(num)
                    //display result
                    screen.innerHTML = result
                }
            }
            break
        case "sqrt":
            //check if calculator is on
            if (on == 1) {
                //get screen value
                num = screen.innerHTML
                //check if screen is empty
                if (num == "") {
                    //display 0
                    screen.innerHTML = "0"
                } else {
                    //square root screen value
                    result = Math.sqrt(parseFloat(num))
                    //display result
                    screen.innerHTML = result
                }
            }
            break
        case "cbrt":
            //check if calculator is on
            if (on == 1) {
                //get screen value
                num = screen.innerHTML
                //check if screen is empty
                if (num == "") {
                    //display 0
                    screen.innerHTML = "0"
                } else {
                    //cube root screen value
                    result = Math.cbrt(parseFloat(num))
                    //display result
                    screen.innerHTML = result
                }
            }
            break
        case "sin":
            //check if calculator is on
            if (on == 1) {
                //get screen value
                num = screen.innerHTML
                //check if screen is empty
                if (num == "") {
                    //display 0
                    screen.innerHTML = "0"
                } else {
                    //calculate sin of screen value
                    result = Math.sin(parseFloat(num))
                    //display result
                    screen.innerHTML = result
                }
            }
            break
        case "cos":
            //check if calculator is on
            if (on == 1) {
                //get screen value
                num = screen.innerHTML
                //check if screen is empty
                if (num == "") {
                    //display 0
                    screen.innerHTML = "0"
                } else {
                    //calculate cos of screen value
                    result = Math.cos(parseFloat(num))
                    //display result
                    screen.innerHTML = result
                }
            }
            break
        case "tan":
            //check if calculator is on
            if (on == 1) {
                //get screen value
                num = screen.innerHTML
                //calculate tan of screen value
                result = Math.tan(parseFloat(num))
                //display result
                screen.innerHTML = result
            }
            break
        case "log":
            //check if calculator is on
            if (on == 1) {
                //calculate logE of screen value
                result = Math.LOG10E(parseFloat(num))
                //display result
                screen.innerHTML = result
            }
            break
        case "exp":
            //check if calculator is on
            if (on == 1) {
                //check if control is 0
                if (control == 0) {
                    //get screen value
                    num = screen.innerHTML
                    //clear screen
                    screen.innerHTML = ""
                    //set num1 to screen value
                    num1 = screen.innerHTML

                    //calculate
                    result = Math.pow(parseFloat(num), parseFloat(num1))
                    //display result
                    screen.innerHTML = result
                    //set control to 1
                    control = 1
                    //set operator to ^
                    operator = "^"
                }
            }
            break
        case "factorial":
            //check if calculator is on
            if (on == 1) {
                //get screen value
                num = screen.innerHTML
                //calculate factorial of screen value
                result = factorial(parseFloat(num))
                //display result
                screen.innerHTML = result
            }
            break
        case "pi":
            //check if calculator is on
            if (on == 1) {
                //display pi
                screen.innerHTML = Math.PI
            }
            break
        case "e":
            //check if calculator is on
            if (on == 1) {
                //display e
                screen.innerHTML = Math.E
            }
            break
        case "zero":
            //check if calculator is on
            if (on == 1) {
                //check if control is 0
                if (control == 0) {
                    //check if screen is empty
                    if (screen.innerHTML == "") {
                        //display 0
                        screen.innerHTML = "0"
                    } else {
                        //display 0
                        screen.innerHTML += "0"
                    }
                }
            }
            break
        case "one":
            //check if calculator is on
            if (on == 1) {
                //display 1
                screen.innerHTML += "1"
            }
            break
        case "two":
            //check if calculator is on
            if (on == 1) {
                //display 2
                screen.innerHTML += "2"
            }
            break
        case "three":
            //check if calculator is on
            if (on == 1) {
                //display 3
                screen.innerHTML += "3"
            }
            break
        case "four":
            //check if calculator is on
            if (on == 1) {
                //display 4
                screen.innerHTML += "4"
            }
            break
        case "five":
            //check if calculator is on
            if (on == 1) {
                //display 5
                screen.innerHTML += "5"
            }
            break
        case "six":
            //check if calculator is on
            if (on == 1) {
                //display 6
                screen.innerHTML += "6"
            }
            break
        case "seven":
            //check if calculator is on
            if (on == 1) {
                //display 7
                screen.innerHTML += "7"
            }
            break
        case "eight":
            //check if calculator is on
            if (on == 1) {
                //display 8
                screen.innerHTML += "8"
            }
            break
        case "nine":
            //check if calculator is on
            if (on == 1) {
                //display 9
                screen.innerHTML += "9"
            }
            break
    }
}

//factorial function
function factorial(num) {
    //check if num is 0
    if (num == 0) {
        //return 1
        return 1
    } else {
        //calculate factorial
        return num * factorial(num - 1)
    }
}