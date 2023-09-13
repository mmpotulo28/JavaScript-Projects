//get reference for inputs and selectors
const fromInput = document.querySelector("#from_input")
const toInput = document.querySelector("#to_input")
const fromSelect = document.querySelector("#from_select")
const toSelect = document.querySelector("#to_select")

//set variables
var from, to, fromOpt, toOpt

function setVar() {
    from = fromInput.value
    to = toInput.value
    fromOpt = fromSelect.value
    toOpt = toSelect.value
}

//handle form submit
const conv_form = document.querySelector("#conv_form")
conv_form.addEventListener("submit", (e) => {
    e.preventDefault()
    setVar()
    convert()
    console.log("form submitted")
})

function convert() {
    //console.log(fromOpt + " " + toOpt)

    if (fromOpt == "bin" && toOpt == "dec") {
        toInput.value = parseInt(from, 2)
    } else if (fromOpt == "bin" && toOpt == "hex") {
        toInput.value = parseInt(from, 2).toString(16)
    } else if (fromOpt == "dec" && toOpt == "bin") {
        toInput.value = parseInt(from, 10).toString(2)
    } else if (fromOpt == "dec" && toOpt == "hex") {
        toInput.value = parseInt(from, 10).toString(16)
    } else if (fromOpt == "hex" && toOpt == "bin") {
        toInput.value = parseInt(from, 16).toString(2)
    } else if (fromOpt == "hex" && toOpt == "dec") {
        toInput.value = parseInt(from, 16)
    } else {
        toInput.value = from
    }
}