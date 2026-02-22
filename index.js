let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


displayTasks();
function saveToLocalStorage(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}


function addTask(){
    let taskEle=document.getElementById("taskinput");
    let task=taskEle.value;
    if(task==="") return ;
    tasks.push(task);
    taskEle.value="";
     saveToLocalStorage();
    displayTasks();

}


/// using table format

// function displayTasks(){
//     let conEle=document.getElementById("con");
//     let trs="";
//     let count=0;
//     for(let i in tasks){
      
//         trs+=`<tr>
//                 <td>  ${++count}. ${tasks[i]}</td>
//                 <td><button onclick="editTask(${i})">edit</button></td>
//                 <td><button  onclick="deleteTask(${i})">delete</button></td>
//             </tr>`
       
//     }
//     let table=`<table border="0px">
//                     ${trs}
//                     </table>`
//      conEle.innerHTML=table;
// }



// function displayTasks(){
//         let conEle=document.getElementById("con");
//         let ol=document.createElement("ol");
//          conEle.innerHTML = "";  
//         tasks.forEach((task,index )=> {
                
//                 let li=document.createElement("li");

//                 li.innerText=task;
//                  let deletebtn=document.createElement("button");
//                  deletebtn.onclick=()=>{deleteTask(index);};

//               li.appendChild(deletebtn);
//         ol.appendChild(li);
//         });
//         conEle.appendChild(ol);
// }



function displayTasks(){
    let conEle=document.getElementById("con");  
    let s="";
    let count=0;
    for( let i in tasks){
         s+=`<div class="task">
                <p> ${++count}. ${tasks[i]}</p> 
                <div class="btns">
                        <button onclick="editTask(${i})">edit</button> 
                        <button  onclick="deleteTask(${i})">delete</button>
                </div>
        </div>`
    }
    conEle.innerHTML=s;
}


function editTask(index){
   let task= prompt("enter task");
     tasks[index]=task;
      saveToLocalStorage();
     displayTasks();
}
function deleteTask(index){
    tasks.splice(index,1);
   saveToLocalStorage();
    displayTasks();
}




