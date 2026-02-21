let tasks=[];
function addTask(){
    let taskEle=document.getElementById("taskinput");
    let task=taskEle.value;
    if(task==="") return ;
    tasks.push(task);
    taskEle.value="";
    displayTasks();
}

function displayTasks(){
        let conEle=document.getElementById("con");
        let ol=document.createElement("ol");
         conEle.innerHTML = "";  
        tasks.forEach((task,index )=> {
                
                let li=document.createElement("li");

                li.innerText=task;
                 let deletebtn=document.createElement("button");
                 deletebtn.onclick=()=>{deleteTask(index);};

              li.appendChild(deletebtn);
        ol.appendChild(li);
        });
        conEle.appendChild(ol);
}

function deleteTask(index){
    tasks.splice(index,1);
    displayTasks();


}

