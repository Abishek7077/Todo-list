const inputbox=document.getElementById("inputbox");
const listcontainer=document.getElementById("listcontainer");
const searchBar = document.getElementById("searchBar");


function addtask(){
    if(inputbox.value === ''){
        alert("you must write something first!");
    }

    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);  
         
    }
    inputbox.value = "";  
    saveData();  
}

  
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); 

    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); 
    }
    }, false);




function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
     
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();

function searchTask() {
    let filter = searchBar.value.toLowerCase();
    let tasks = listcontainer.getElementsByTagName('li');
    
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i].textContent || tasks[i].innerText;
        if (task.toLowerCase().indexOf(filter) > -1) {
            tasks[i].style.display = "";
        } else {
            tasks[i].style.display = "none";
        }
    }
}