console.log("script loaded", document.getElementById("scene"));

const scene = document.getElementById("scene");
const TEXT = "I love you";
const COUNT = 90;          // 🔥 reduced safely
const SPEED = 0.0018;      // smooth escalator

const items = [];
const SCALE = 11.5;        // heart size

function heart(t) {
  return {
    x: 16 * Math.pow(Math.sin(t), 3),
    y:
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
  };
}

// Create words with PROPER arc spacing
for (let i = 0; i < COUNT; i++) {
  const span = document.createElement("span");
  span.className = "word";
  span.textContent = TEXT;
  scene.appendChild(span);

  items.push({
    el: span,
    t: (Math.PI * 2 * i) / COUNT
  });
}

function animate() {
  items.forEach(obj => {
    const p = heart(obj.t);

    // depth illusion (front → back)
    const depth = (Math.sin(obj.t) + 1) / 2;  
    const scale = 0.7 + depth * 0.6;
    const opacity = 0.35 + depth * 0.65;



    obj.el.style.left = `${260 + p.x * SCALE}px`;
    obj.el.style.top = `${260 - p.y * SCALE}px`;

    obj.el.style.transform = `scale(${scale})`;
    obj.el.style.opacity = opacity;
    obj.el.style.zIndex = Math.floor(depth * 100);

    obj.t += SPEED;
    if (obj.t > Math.PI * 2) obj.t -= Math.PI * 2;
  });

  requestAnimationFrame(animate);
}

animate();

