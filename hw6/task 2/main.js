const colors = ['red', 'blue', 'green', 'black', 'white']

const body = document.querySelector('body')
const submit = document.getElementById('submit-btn')

submit.addEventListener('click', (e)=> {
    const input = document.getElementById("color-input").value;
    if(colors.includes(input)){
        body.style.background = input
    }else{
        alert("Try Another Color")
    }
    e.preventDefault()
})