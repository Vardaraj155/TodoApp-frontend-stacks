var todotext = document.getElementById("inpu");
var incomptask = document.getElementById("list-incomp");
var comptask = document.getElementById("list-comp");
var combutton=document.createElement("button");
document.getElementById("form").onsubmit = function(){add()}
todotext.addEventListener("keyup",function(event){
    if (event.code == "Enter") {
        document.getElementById("add").click();
    }    
});

function add()
{
    if (todotext.value){
        var litem=document.createElement("li");
        var item=document.createElement("h3");
        var combutton=document.createElement("button");

        item.innerText=todotext.value;
        combutton.innerText="Complete"
        combutton.style.color= "magenta";
        combutton.style.backgroundColor="white";
        litem.appendChild(item);
        litem.appendChild(combutton);
       

        incomptask.appendChild(litem);
        todotext.value="";
        bindTaskEvents(litem);
    }
}

function completeTask(){
    var litem=this.parentNode;
    litem.lastChild.remove();
    comptask.appendChild(litem);
}

var bindTaskEvents=function(taskListItem){
        var h3=taskListItem.querySelector("h3");
        var combutton=taskListItem.querySelector("button");
        combutton.onclick=completeTask;
    }

function deletecomp(){
    var deletecomplete = document.getElementById("list-comp");
    deletecomplete.innerText="";
}

function deleteall(){
    var delete2 = document.getElementById("list-incomp");
    var delete1 = document.getElementById("list-comp");
    delete1.innerText="";
    delete2.innerText="";
}