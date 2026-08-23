const colors = ["#f1f5f8", "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4"]
const btn = document.getElementById("btn")
const colorName = document.getElementById("color-name")

btn.addEventListener("click", function() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.backgroundColor = randomColor
  colorName.textContent = randomColor
})