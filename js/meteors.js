/* ============ MOUSE-INTERACTIVE METEOR SHOWER (dark mode) ============ */
(function initMeteorShower(){
  const canvas = document.getElementById('meteor-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize(){
    canvas.width = window.innerWidth * Math.min(window.devicePixelRatio, 2);
    canvas.height = window.innerHeight * Math.min(window.devicePixelRatio, 2);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(Math.min(window.devicePixelRatio, 2), 0, 0, Math.min(window.devicePixelRatio, 2), 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const METEOR_COLORS = ['#ffffff', '#ff3b3f', '#e10600'];
  let meteors = [];

  function spawnMeteor(x, y, vx, vy, opts = {}){
    meteors.push({
      x, y, vx, vy,
      trail: [],
      trailLen: opts.trailLen || (18 + Math.random() * 14),
      life: 0,
      maxLife: opts.maxLife || (60 + Math.random() * 40),
      size: opts.size || (1.4 + Math.random() * 1.6),
      color: opts.color || METEOR_COLORS[Math.floor(Math.random() * METEOR_COLORS.length)],
    });
  }

  /* --- ambient shower: soft steady trickle of meteors, regardless of mouse --- */
  function spawnAmbientMeteor(){
    const startX = Math.random() * window.innerWidth * 1.2 - window.innerWidth * 0.1;
    const startY = -20;
    const angle = (55 + Math.random() * 20) * (Math.PI / 180); // mostly downward-diagonal
    const speed = 6 + Math.random() * 5;
    spawnMeteor(startX, startY, Math.cos(angle) * speed, Math.sin(angle) * speed);
  }
  setInterval(() => {
    if(document.body.classList.contains('site-light-mode')) return;
    spawnAmbientMeteor();
  }, 3200);

  /* --- mouse-interactive: fast mouse movement streaks meteors from the cursor --- */
  let lastX = null, lastY = null, lastT = null;
  window.addEventListener('mousemove', (e) => {
    if(document.body.classList.contains('site-light-mode')) return;
    const now = performance.now();
    if(lastX !== null){
      const dt = Math.max(now - lastT, 1);
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const speed = Math.hypot(dx, dy) / dt; // px per ms

      if(speed > 0.55 && Math.random() < 0.5){
        const dirX = dx / (Math.hypot(dx, dy) || 1);
        const dirY = dy / (Math.hypot(dx, dy) || 1);
        const boost = Math.min(speed * 9, 16);
        spawnMeteor(
          e.clientX, e.clientY,
          dirX * boost, dirY * boost,
          { size: 1.8 + Math.random() * 1.8, maxLife: 45 + Math.random() * 25 }
        );
      }
    }
    lastX = e.clientX; lastY = e.clientY; lastT = now;
  });

  /* --- click: burst of meteors radiating outward from the cursor --- */
  window.addEventListener('click', (e) => {
    if(document.body.classList.contains('site-light-mode')) return;
    const burst = 3 + Math.floor(Math.random() * 2);
    for(let i = 0; i < burst; i++){
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 7;
      spawnMeteor(
        e.clientX, e.clientY,
        Math.cos(angle) * speed, Math.sin(angle) * speed,
        { size: 1.6 + Math.random() * 1.4, maxLife: 35 + Math.random() * 20, trailLen: 12 + Math.random() * 10 }
      );
    }
  });

  function hexToRgb(hex){
    const v = parseInt(hex.slice(1), 16);
    return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
  }

  function draw(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    meteors.forEach(m => {
      m.trail.unshift({ x: m.x, y: m.y });
      if(m.trail.length > m.trailLen) m.trail.pop();

      m.x += m.vx;
      m.y += m.vy;
      m.vx *= 0.992;
      m.vy *= 0.992;
      m.life++;

      const { r, g, b } = hexToRgb(m.color);
      const fade = Math.max(0, 1 - m.life / m.maxLife);

      // trail
      for(let i = 1; i < m.trail.length; i++){
        const a = (1 - i / m.trail.length) * fade * 0.85;
        if(a <= 0) continue;
        ctx.beginPath();
        ctx.moveTo(m.trail[i-1].x, m.trail[i-1].y);
        ctx.lineTo(m.trail[i].x, m.trail[i].y);
        ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
        ctx.lineWidth = m.size * (1 - i / m.trail.length);
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // glowing head
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.size * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${fade})`;
      ctx.shadowColor = m.color;
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    meteors = meteors.filter(m =>
      m.life < m.maxLife &&
      m.x > -100 && m.x < window.innerWidth + 100 &&
      m.y > -100 && m.y < window.innerHeight + 100
    );

    requestAnimationFrame(draw);
  }
  draw();
})();
