// =====================
// Part 1: Variables & Conditionals
// =====================
const userName = "Griffnificent";
const userAge = 22;
const conditionalEl = document.getElementById("conditional-output");
if (userAge >= 18) {
  conditionalEl.textContent = `${userName} is an adult (${userAge}).`;
} else {
  conditionalEl.textContent = `${userName} is a minor (${userAge}).`;
}

// =====================
// Part 2: Custom Functions (at least 2)
// =====================
function greet(name) {
  return `Hello, ${name}! Welcome 👋`;
}
function add(a, b) {
  return Number(a) + Number(b);
}

// Hook up Part 2 UI
document.getElementById("greetBtn").addEventListener("click", () => {
  document.getElementById("greetOutput").textContent = greet(userName);
});
document.getElementById("sumBtn").addEventListener("click", () => {
  const a = document.getElementById("inputA").value;
  const b = document.getElementById("inputB").value;
  document.getElementById("sumOutput").textContent = `Result: ${add(a, b)}`;
});

// =====================
// Part 3: Loops (at least 2)
// =====================
// Loop #1: for
document.getElementById("buildLoopListBtn").addEventListener("click", () => {
  const list = document.getElementById("loopList");
  list.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `For loop item ${i}`;
    list.appendChild(li);
  }
});

// Loop #2: while
(function buildWhileExample() {
  let count = 1;
  const list = document.getElementById("interactiveList"); // visible in Part 4
  // only add placeholders once on load
  if (list.children.length === 0) {
    while (count <= 2) {
      const li = document.createElement("li");
      li.textContent = `While loop placeholder ${count}`;
      list.appendChild(li);
      count++;
    }
  }
})();

// =====================
// Part 4: DOM Interactions (at least 3)
// =====================
// 1) Change text content on click
document.getElementById("changeTextBtn").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.textContent = "Button clicked! Text successfully changed 🎉";
});

// 2) Toggle theme class on <body>
document.getElementById("toggleThemeBtn").addEventListener("click", (e) => {
  document.body.classList.toggle("theme-blue");
  const pressed = document.body.classList.contains("theme-blue");
  e.currentTarget.setAttribute("aria-pressed", String(pressed));
});

// 3) Add list items dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  const list = document.getElementById("interactiveList");
  const li = document.createElement("li");
  li.textContent = `Dynamic item ${list.children.length + 1}`;
  list.appendChild(li);
});
