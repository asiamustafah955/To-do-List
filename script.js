const inputBox = document.getElementById("input-text");
const list = document.getElementById("List");

function addTask(){
    if(inputBox.value=== ''){
       alert("bitch a u dum, write something!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);//this li will be displayed under the container list
        let span = document.createElement("span");
        span.innerHTML="\u00d7";//that is for crossing out
        li.appendChild(span);
    }
    inputBox.value= "";// this clears it and makes it empty after the value has been input
    saveData();
}
list.addEventListener("click", function(e){//for crossing out list items
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       saveData();
    } 
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();





















