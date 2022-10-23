function addTask() {
    const value = document.querySelector('input#taskInput').value;
  
    document.querySelector('div.tasksList').innerHTML += `
    <div class="taskItem">
      <span>${value}</span>
      <button onclick="deleteItem(this)" class="deleteBtn">x</button>
    </div>
  `;
  
    document.querySelector('input#taskInput').value = '';
  }
  
  function deleteItem(btn) {
    document.querySelector('.tasksList').removeChild(btn.parentElement);
  }