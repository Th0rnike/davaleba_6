const button = document.getElementById("submit-btn")

button.addEventListener("click", (e) => {
    let sum = 0;
    
    // takes input field
    const inputField = document.getElementById("calculate-input")

    // retrieve value
    const input = inputField.value

    // clear input field because preventDefault prevents it
    inputField.value = "";
    
    // creates array with ":"
    let splitedArr = input.split(":")


    // select every character from splited array
    for (const num of splitedArr) {
        // convert every character into number
        const toNum = parseInt(num)
        
        // check if values are nan/number or string
        if(isNaN(toNum) || typeof toNum === 'string'){
            alert("Enter All Numbers With Double Dots ':' !!! ")
            // if values are one of them prevent printing inaccurate answers with clearing answer field
            answer.innerText = ""
        }else{
            sum += toNum;
        }
    }
    const res = sum / splitedArr.length;
    const answer = document.getElementById("answer")
    answer.innerText = res;
    e.preventDefault()
})

