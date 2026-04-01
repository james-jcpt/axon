// AXON Stage 1.5 - Persistent Tasks

function setGreeting() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Good morning, James 👋";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon, James 👋";
  } else {
    greeting.textContent = "Good evening, James 👋";
  }
}

setGreeting();

// Load tasks
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("axon_tasks")) || [];
  const list = document.getElementById("taskList");

  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

// Save tasks
function saveTasks(tasks) {
  localStorage.setItem("axon_tasks", JSON.stringify(tasks));
}

// Add task
function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value !== "") {
    const tasks = JSON.parse(localStorage.getItem("axon_tasks")) || [];
    tasks.push(input.value);

    saveTasks(tasks);
    input.value = "";
    loadTasks();
  }
}

// Load on start
loadTasks();

// AI Chat
function sendMessage() {
  const input = document.getElementById("chatInput");
  const box = document.getElementById("chatBox");

  if (input.value !== "") {
    const userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input.value;
    userMsg.classList.add("user");

    const aiMsg = document.createElement("p");
    aiMsg.textContent = "AXON: Thinking...";
    aiMsg.classList.add("ai");

    box.appendChild(userMsg);
    box.appendChild(aiMsg);

    setTimeout(() => {
      aiMsg.textContent = "AXON: I will assist you with that soon.";
    }, 1000);

    input.value = "";
  }
  }
