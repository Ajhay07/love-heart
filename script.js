const heart = document.getElementById("heart");
const text = "I love you";
const points = 120;

// Heart curve formula
function heartCurve(t) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);
  return { x, y };
}

for (let i = 0; i < points; i++) {
  const span = document.createElement("span");
  span.className = "love";
  span.innerText = text;

  const t = (Math.PI * 2 * i) / points;
  const { x, y } = heartCurve(t);

  span.style.left = `${250 + x * 12}px`;
  span.style.top = `${250 - y * 12}px`;
  span.style.animationDelay = `${i * 0.03}s`;

  heart.appendChild(span);
}
