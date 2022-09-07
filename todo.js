var count=0;
function addtask(){
    var task = ""; 
    task  = prompt("Enter the task ");
    if(task==null){
        return;
    }
    task = task.charAt(0).toUpperCase() + task.slice(1);

    document.getElementById("list").innerHTML += " <div class = task><div class=topic><div>"+task+"</div><div><button type=button onclick=addtoList("+count+")>+</button></div></div><div class=todo id=todo"+count+"></div></div> ";
    count++;

}

var cnt=0;
function check(a){
    var x = "d"+a;
    var z = "l"+a;
    var y = document.getElementById(x);
    //var w = document.getElementById(z);
    //console.log(w);
    if(y.checked == true){
        document.getElementById(z).setAttribute("style","text-decoration:line-through; opacity:0.5;");
    }else{
        document.getElementById(z).setAttribute("style","text-decoration:none; opacity:1;");
    }
    
}
function addtoList(x){
    var todo = "";
    
    todo  = prompt("Enter the sub-tasks ");
    if(todo==null){
        return;
    }
    var a = "todo"+x;
    todo = todo.charAt(0).toUpperCase() + todo.slice(1);
    document.getElementById(a).innerHTML += "<input type=checkbox id=d"+cnt+" onclick=check("+cnt+")><label id=l"+cnt+">"+todo+"</label><br>";
    cnt++;
}



/*
<div class = task><div class=topic><div>My todo list</div><div><button type=submit>+</button></div></div><div class=todo><form><input type =checkbox id=d1><label for=d1>go to supermarket</label><br><input type =checkbox id=d2><label for=d1>buy vegetables</label></form></div></div>
var task = document.createElement('div');
task.classList.add('task');
var topic  = document.createElement('div');
topic.classList.add('topic');
*/