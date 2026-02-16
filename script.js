const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskInput = input.value.trim();
  if(taskInput===""){
    return;
  }
  const li=document.createElement("li");
  li.textContent=taskInput;
  list.appendChild(li);
  input.value="";
});
