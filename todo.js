let input = document.querySelector(".in");
let button = document.querySelector(".add");
let taskmai = document.querySelector(".taskmains")

function addTask()
{
    if(input.value == "")
    {
        alert("please enter the task");
    }
    else
    {
        let child = document.createElement("li");
        child.textContent= input.value;
        // let taskmai = document.querySelector(".taskmains");
        taskmai.appendChild(child);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        child.appendChild(span);
        input.value = "";
    }

    saveData();
}

taskmai.addEventListener("click",function(e)
{
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }

   else if(e.target.tagName ==="SPAN")
   {
    e.target.parentElement.remove();
    saveData();
   }
},false)


function saveData()
{
    localStorage.setItem("data",taskmai.innerHTML);
}

function showTask()
{
    taskmai.innerHTML=localStorage.getItem("data");
}
showTask();


let date = new Date();
let dat1 = document.querySelector(".timed");
dat1.innerHTML = date.toString(); // Formats the date into a readable string
