let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStr = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
let tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStr){
    myLeads = leadsFromLocalStr
    renderLeads(myLeads)
}

function renderLeads(leads){
    let listItems = ""
    for(let i=0; i< leads.length; i++){
        // listItems += "<li><a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>"
        listItems += `<li>
                <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
            </li>`
    }
    ulEl.innerHTML = listItems

}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
    
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = [] 
    renderLeads(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)
})

