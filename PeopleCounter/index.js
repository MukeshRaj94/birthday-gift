// document.getElementById("count").innerText=5;
/* comment */
let count = 0
let countEl =  document.getElementById("count")
let saveEl = document.getElementById("save-el")
console.log(countEl)

console.log(saveEl)
function increment(){
    count += 1
    countEl.textContent=count;
}

function save(){
    let finCount = count + " - "
    saveEl.textContent += finCount
    count = 0
    countEl.textContent=count
    console.log(finCount)
}
