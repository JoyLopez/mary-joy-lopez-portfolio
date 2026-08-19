/* ============ THREE.JS BACKGROUND — REAL TWINKLING STARFIELD ============ */
(function initParticles(){
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 6;

  /* --- soft round star sprite texture (replaces the default square point) --- */
  function makeStarTexture(){
    const size = 128;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    g.addColorStop(0.0, 'rgba(255,255,255,1)');
    g.addColorStop(0.2, 'rgba(255,255,255,0.9)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.35)');
    g.addColorStop(1.0, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  }
  const starTexture = makeStarTexture();

  const vertexShader = `
    attribute float aSize;
    attribute float aPhase;
    attribute float aSpeed;
    attribute vec3 color;
    uniform float uTime;
    varying vec3 vColor;
    varying float vAlpha;
    void main(){
      vColor = color;
      float twinkle = sin(uTime * aSpeed + aPhase) * 0.5 + 0.5;
      vAlpha = 0.35 + twinkle * 0.65;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize * (300.0 / -mvPosition.z) * (0.75 + twinkle * 0.5);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;
  const fragmentShader = `
    uniform sampler2D uTexture;
    varying vec3 vColor;
    varying float vAlpha;
    void main(){
      vec4 tex = texture2D(uTexture, gl_PointCoord);
      gl_FragColor = vec4(vColor, vAlpha) * tex;
    }
  `;

  /* minimalist starlight: soft white with a faint rose accent, no rainbow sprinkle */
  const colorChoices = [
    new THREE.Color('#ffffff'), new THREE.Color('#ffffff'), new THREE.Color('#ffffff'),
    new THREE.Color('#ffffff'), new THREE.Color('#ffffff'), new THREE.Color('#ff3b3f')
  ];

  function buildStarLayer({ count, spread, sizeMin, sizeMax, opts = {} }){
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const speeds = new Float32Array(count);

    for(let i = 0; i < count; i++){
      positions[i*3]   = (Math.random() - 0.5) * spread.x;
      positions[i*3+1] = (Math.random() - 0.5) * spread.y;
      positions[i*3+2] = (Math.random() - 0.5) * spread.z + (spread.zOffset || 0);
      const c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i*3] = c.r; colors[i*3+1] = c.g; colors[i*3+2] = c.b;
      sizes[i] = sizeMin + Math.random() * (sizeMax - sizeMin);
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.5 + Math.random() * 1.8;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uTexture: { value: starTexture } },
      vertexShader, fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      ...opts,
    });

    return { points: new THREE.Points(geometry, material), material };
  }

  const isMobile = window.innerWidth < 768;

  /* far layer: dense field of small, distant stars */
  const far = buildStarLayer({
    count: isMobile ? 380 : 900,
    spread: { x: 22, y: 15, z: 10, zOffset: -3 },
    sizeMin: 0.05, sizeMax: 0.13,
  });

  /* mid layer: a bit bigger and brighter */
  const mid = buildStarLayer({
    count: isMobile ? 260 : 600,
    spread: { x: 18, y: 12, z: 8, zOffset: -1 },
    sizeMin: 0.12, sizeMax: 0.22,
  });

  /* near layer: fewer but noticeably bigger stars, sitting closer to the camera for depth */
  const near = buildStarLayer({
    count: isMobile ? 90 : 180,
    spread: { x: 14, y: 9, z: 5, zOffset: 2.5 },
    sizeMin: 0.22, sizeMax: 0.42,
  });

  scene.add(far.points, mid.points, near.points);
  const layers = [far, mid, near];

  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5);
    mouseY = (e.clientY / window.innerHeight - 0.5);
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();
  function animate(){
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    layers.forEach((layer, i) => {
      layer.material.uniforms.uTime.value = t;
      const depthFactor = 1 + i * 0.5; // closer layers drift a touch more with rotation/mouse
      layer.points.rotation.y += 0.00035 * depthFactor;
      layer.points.rotation.x += 0.00012 * depthFactor;
    });
    camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 0.6 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
  animate();
})();
