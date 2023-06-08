let counter = 0;

const counterApp = document.createElement('div')
const done=document.createElement('div')
counterApp.classList.add('counter')

const incrementButton = document.createElement('button')
incrementButton.innerText=('increment')
incrementButton.addEventListener('click', () => {
    counter += 1;
    resetButton.disabled = false
    if (counter === 10) {
        console.log(('i am done'));
        incrementButton.disabled = true;
        done.innerHTML=`
        <h1 style="color:palegoldenrod;text-transform: capitalize">Counter is done! <span style="font-size:50px;color:palegoldenrod">${counter}</span></h1>
        `
        document.body.appendChild(done)
    }
    counterSpan.innerText=counter;
})

const resetButton=document.createElement('button')
resetButton.innerText='Reset'
resetButton.disabled=true
resetButton.addEventListener('click',()=>{
    counter=0
    incrementButton.disabled=false
    resetButton.disabled=true
    counter.innerText=counter
    document.body.removeChild(done)
})


const counterSpan=document.createElement('span')
counterSpan.innerText=counter
document.body.appendChild(counterApp)
counterApp.appendChild(incrementButton)
counterApp.appendChild(document.createTextNode('\u00A0'))
counterApp.appendChild(resetButton)
counterApp.appendChild(document.createTextNode('\u00A0'))
counterApp.appendChild(counterSpan)