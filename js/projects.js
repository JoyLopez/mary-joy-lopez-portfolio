/* ============ DATA ============ */
const skills = [
  // Languages & Web
  { name:'HTML', icon:'fa-brands fa-html5', level:90, category:'Languages & Web' },
  { name:'CSS', icon:'fa-brands fa-css3-alt', level:88, category:'Languages & Web' },
  { name:'JavaScript', icon:'fa-brands fa-js', level:80, category:'Languages & Web' },
  { name:'Python', icon:'fa-brands fa-python', level:80, category:'Languages & Web' },
  { name:'SQL', icon:'fa-solid fa-database', level:82, category:'Languages & Web' },
  { name:'Responsive Design', icon:'fa-solid fa-mobile-screen', level:80, category:'Languages & Web' },

  // Tools & Workflow
  { name:'Git', icon:'fa-brands fa-git-alt', level:85, category:'Tools & Workflow' },
  { name:'GitHub', icon:'fa-brands fa-github', level:88, category:'Tools & Workflow' },
  { name:'Jira', icon:'fa-brands fa-jira', level:90, category:'Tools & Workflow' },

  // QA & Testing
  { name:'Manual Testing', icon:'fa-solid fa-magnifying-glass', level:96, category:'QA & Testing' },
  { name:'API Testing', icon:'fa-solid fa-plug', level:80, category:'QA & Testing' },
  { name:'Regression Testing', icon:'fa-solid fa-rotate', level:92, category:'QA & Testing' },
  { name:'Exploratory Testing', icon:'fa-solid fa-compass', level:93, category:'QA & Testing' },

  // Automation
  { name:'Automation Testing', icon:'fa-solid fa-gears', level:80, category:'Automation' },
  { name:'Playwright', icon:'fa-solid fa-robot', level:80, category:'Automation' },
  { name:'Maestro', icon:'fa-solid fa-mobile-screen-button', level:75, category:'Automation' },
];

const projects = [
  { title:'Oops Verse Mystery World Map', desc:'Oopsverse: Mystery World Map is an interactive detective adventure game where players explore mysterious worlds, investigate cases, discover clues, interview witnesses, reconstruct timelines, identify culprits, and solve unique puzzles. Players can unlock new worlds, earn rewards, complete daily missions, and customize their detective as they progress.', 
    tags: ['Mystery Game', 'Detective Game', 'Puzzle Game', 'Adventure Game', 'Investigation Game', 'Interactive Story', 'World Map', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Game Development', 'Web Game', 'AI Game', 'Portfolio Project', 'Software QA', 'QA Engineer', 'Playwright', 'UI/UX', 'Indie Game'], 
    live: 'https://joylopez.github.io/oops-verse-mystery-world-map/',
    github: 'https://github.com/JoyLopez/oops-verse-mystery-world-map', 
    image: 'assets/images/projects/oopsversemysteryworldmap.png'},
  
  { title:'Cat Run', desc:'A endless runner game where players dodge obstacles, collect fish, and compete for the highest score.', 
    tags: ['React','TypeScript','Vite','Three.js','WebGL','Tailwind CSS'], 
    live: 'https://yantano.github.io/cat-run/',
    github: 'https://github.com/YanTano/cat-run', 
    image: 'assets/images/projects/cat-run.jpg'},
  
  { title:'Chickein', desc:'A premium Chicken Inasal restaurant website showcasing cinematic visuals, immersive animations, smooth GSAP interactions, and a modern user experience designed to drive customer engagement.', 
    tags: ['HTML5','CSS3','JavaScript','GSAP'], 
    live: 'https://yantano.github.io/chickein/',
    github: 'https://github.com/YanTano/chickein',
    image: 'assets/images/projects/chickein.jpg'},
  
  { title:'Neural-Vision', desc:'Neural Vision is an AI-powered platform featuring image analysis, visual reasoning, OCR, and an adaptive AI Mock Interview coach that provides realistic interview practice, instant feedback, and personalized coaching to help users build confidence and land their next opportunity.', 
    tags:['React','TypeScript','Vite','Gemini AI','TensorFlow.js','MediaPipe'], 
    live: 'https://yantano.github.io/neural-vision/',
    github: 'https://github.com/YanTano/neural-vision', 
    image: 'assets/images/projects/neural-vision.jpg'},

  { title:'QA Automation Framework', desc:'A Playwright + TypeScript end-to-end test automation framework built with the Page Object Model, API test coverage, and CI-ready configs — clone it or grab the zip to bootstrap your own automation suite.', 
    tags: ['Playwright', 'TypeScript', 'Node.js', 'Page Object Model', 'API Testing', 'CI/CD'], 
    github: 'https://github.com/YanTano/qa-automation-framework',
    download: 'https://github.com/YanTano/qa-automation-framework/archive/refs/heads/main.zip',
    image: 'assets/images/projects/qa-automation-framework.jpg'},

  { title:'E-Commerce Test Automation', desc:'Playwright automation suite covering checkout, payments, coupons, and inventory flows for an e-commerce site, with reusable fixtures and page objects — downloadable source included.', 
    tags: ['Playwright', 'TypeScript', 'Automation Testing', 'Regression Testing'], 
    github: 'https://github.com/YanTano/e-commerce-testing',
    download: 'https://github.com/YanTano/e-commerce-testing/archive/refs/heads/main.zip',
    image: 'assets/images/projects/e-commerce-testing.jpg'},
    /*
  { title:'E-Commerce Testing', desc:'Full regression and exploratory test cycles across checkout, payments, and inventory flows.', tags:['Manual QA','Jira','API'], live: 'https://yantano.github.io/e-commerce-testing/',
    github: 'https://github.com/YanTano/e-commerce-testing', image: 'assets/images/projects/e-commerce-testing.jpg'},
  { title:'Zombie Survival Game', desc:'A browser-based survival game built for fun, then rigorously stress- and bug-tested.', tags:['JavaScript','Canvas','QA'], live: 'https://yantano.github.io/zombie-survival-game/',
    github: 'https://github.com/YanTano/zombie-survival-game', image: 'assets/images/projects/zombie-survival-game.jpg'},
    */
];

const experience = [
  { date:'2023 — 2026', role:'Software QA Engineer', company:'Forty Degrees Celcius Inc.', points:[
      'Test Planning: Create test plans, test cases, and test scripts to ensure thorough testing. ',
      'Test Execution: Execute manual and automated tests, report defects, and verify fixes.',
      'Test Case Development: Develop and maintain test cases, test scripts, and test data.',
      'Identified, documented, and tracked software defects using Jira while collaborating closely with developers and product teams.',
      'Performed functional, regression, UI, cross-browser, and exploratory testing across multiple projects.',
      'Verified payment workflows, coupon systems, admin tools, and user-facing features to ensure compliance with business requirements.',
      'Participated in Agile sprint planning, daily stand-ups, sprint reviews, and release validation activities.']
  },
  { date:'2022 — 2023', role:'Associate Software Engineer', company:'Accenture', points:[
      'Managed Salesforce CRM system, including data entry, record,  maintenance, and user support.',
      'Developed and executed Salesforce automation processes using workflows and process builder.',
      'Created custom reports and dashboards to provide key performance metrics to the sales team and management.',
      'Conducted user training sessions to ensure the sales team effectively utilized Salesforce functionalities.',
      'Collaborated with cross-functional teams to integrate Salesforce with other business systems for seamless data flow.']
  },
  { date:'2018 — 2023', role:'Content Moderation Associate', company:'Wipro Lmtd', points:[
      'Reviewed user generated content to ensure compliance guidelines and content policies.',
      'Responded to user inquiries and concerns related to content moderation decisions with a professional and empathetic approach ',
      'Collaborated with the content moderation team to refine guidelines and improve the overall quality of user-generated content.',
      'Conducted regular data reporting on content-related trends and issues to support platform improvement strategies.']
  }
];

const services = [
  { icon:'fa-solid fa-magnifying-glass', title:'Manual QA', desc:'Thorough functional and exploratory testing to catch what automation misses.' },
  { icon:'fa-solid fa-robot', title:'Automation Testing', desc:'Reliable, maintainable test suites built with Playwright and Python.' },
  { icon:'fa-solid fa-code', title:'Website Development', desc:'Clean, responsive front-end builds with quality baked in from the start.' },
  { icon:'fa-solid fa-bug', title:'Bug Reporting', desc:'Clear, reproducible bug reports that get fixed fast, not argued about.' },
  { icon:'fa-solid fa-object-ungroup', title:'UI Testing', desc:'Pixel-level and cross-device UI verification for a consistent experience.' },
  { icon:'fa-solid fa-gauge-high', title:'Performance Testing', desc:'Load and stress testing to make sure your app holds up under pressure.' },
];

const testimonials = [
  { name:'Carlo Tano', role:'QA, FDCI', text:'Joy consistently demonstrates professionalism, attention to detail, and a strong commitment to quality. She collaborates effectively with the team and always strives to deliver reliable, high-quality results.' },
   /*
   { name:'Innabel Sildora', role:'QA Lead, FDCI', text:'Joy catches issues before they ever reach our users. Her test reports are the clearest I\'ve worked with.' },
  { name:'Lester Padul', role:'QA, FDCI', text:'Meticulous, communicative, and genuinely curious about how things break. Exactly who you want testing your product.' },
   */
];

/* ============ SKILLS GRID RENDER (grouped by category) ============ */
const skillsGrid = document.getElementById('skillsGrid');
const skillCategories = [...new Set(skills.map(s => s.category))];
let skillIndex = 0;

skillCategories.forEach(category => {
  const categoryWrap = document.createElement('div');
  categoryWrap.className = 'col-span-full';
  categoryWrap.setAttribute('data-aos', 'fade-up');

  const heading = document.createElement('p');
  heading.className = 'section-eyebrow text-red-500 text-xs font-semibold uppercase mb-4 mt-2 first:mt-0';
  heading.textContent = category;
  categoryWrap.appendChild(heading);

  const categoryGrid = document.createElement('div');
  categoryGrid.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10';
  categoryWrap.appendChild(categoryGrid);

  skillsGrid.appendChild(categoryWrap);

  skills.filter(s => s.category === category).forEach((s) => {
    const card = document.createElement('div');
    card.className = 'tilt-card glass glow-border rounded-2xl p-6 group';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String((skillIndex % 4) * 100));
    skillIndex++;
    card.innerHTML = `
      <i class="${s.icon} text-3xl text-red-500 mb-4 group-hover:text-purple-400 transition-colors"></i>
      <h3 class="font-semibold mb-3">${s.name}</h3>
      <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div class="skill-bar-fill h-full rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-800" data-level="${s.level}"></div>
      </div>
      <span class="text-xs text-gray-500 mt-2 inline-block">${s.level}%</span>
    `;
    categoryGrid.appendChild(card);

    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(600px) rotateX(${-py*10}deg) rotateY(${px*10}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
});

/* ============ PROJECTS RENDER ============ */
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'tilt-card glass glow-border rounded-2xl overflow-hidden group';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', String((i % 3) * 100));
  card.innerHTML = `
    <div class="h-48 bg-white/[0.04] flex items-center justify-center relative overflow-hidden">
      <img src="${p.image}" alt="${p.title} screenshot" loading="lazy"
           class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
           onerror="this.remove();" />
    </div>
    <div class="p-6">
      <h3 class="font-display font-semibold text-lg mb-2">${p.title}</h3>
      <p class="text-gray-400 text-sm leading-relaxed mb-4">${p.desc}</p>
      <div class="flex flex-wrap gap-2 mb-5">
        ${p.tags.map(t => `<span class="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-red-300">${t}</span>`).join('')}
      </div>
      <div class="flex gap-4 text-sm font-medium flex-wrap">
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-red-500 hover:text-red-300"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gray-300 hover:text-white"><i class="fa-brands fa-github"></i> GitHub</a>
        ${p.download ? `<a href="${p.download}" class="flex items-center gap-2 text-zinc-300 hover:text-zinc-100"><i class="fa-solid fa-download"></i> Download Code</a>` : ''}
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);

  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-py*6}deg) rotateY(${px*6}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ============ EXPERIENCE TIMELINE RENDER ============ */
const timelineItems = document.getElementById('timelineItems');
experience.forEach((job, i) => {
  const side = i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';
  const item = document.createElement('div');
  item.className = `relative flex ${side} items-start gap-8 pl-12 md:pl-0`;
  item.setAttribute('data-aos', i % 2 === 0 ? 'fade-right' : 'fade-left');
  item.innerHTML = `
    <div class="absolute left-4 md:left-1/2 top-1 w-3.5 h-3.5 rounded-full bg-red-500 md:-translate-x-1/2 ring-4 ring-void"></div>
    <div class="md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}">
      <span class="text-xs text-red-500 font-semibold tracking-wide">${job.date}</span>

      <div class="glass glow-border rounded-2xl p-6 mt-3 text-left">
        <h3 class="font-display font-semibold text-lg">${job.role}</h3>
        <p class="text-zinc-300 text-sm mb-3">${job.company}</p>
        <ul class="text-gray-400 text-sm space-y-1 ${i % 2 === 0 ? 'md:text-left' : ''}">
          ${job.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="hidden md:block md:w-1/2"></div>
  `;
  timelineItems.appendChild(item);
});

/* ============ SERVICES RENDER ============ */
const servicesGrid = document.getElementById('servicesGrid');
services.forEach((s, i) => {
  const card = document.createElement('div');
  card.className = 'tilt-card glass glow-border rounded-2xl p-8';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', String((i % 3) * 100));
  card.innerHTML = `
    <div class="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-5">
      <i class="${s.icon} text-2xl text-red-500"></i>
    </div>
    <h3 class="font-display font-semibold text-lg mb-2">${s.title}</h3>
    <p class="text-gray-400 text-sm leading-relaxed">${s.desc}</p>
  `;
  servicesGrid.appendChild(card);
});

/* ============ TESTIMONIALS CAROUSEL ============ */
const testimonialTrack = document.getElementById('testimonialTrack');
const testimonialDots = document.getElementById('testimonialDots');
let currentTestimonial = 0;

function renderTestimonial(idx){
  const t = testimonials[idx];
  testimonialTrack.style.opacity = 0;
  setTimeout(() => {
    testimonialTrack.innerHTML = `
      <i class="fa-solid fa-quote-left text-3xl text-red-500/50 mb-6"></i>
      <p class="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">"${t.text}"</p>
      <div class="flex flex-col items-center gap-2">
        <div class="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center font-display font-bold text-lg">
          ${t.name.split(' ').map(n=>n[0]).join('')}
        </div>
        <h4 class="font-semibold">${t.name}</h4>
        <span class="text-sm text-gray-500">${t.role}</span>
      </div>
    `;
    testimonialTrack.style.opacity = 1;
  }, 250);

  [...testimonialDots.children].forEach((d, i) => {
    d.classList.toggle('bg-red-500', i === idx);
    d.classList.toggle('bg-white/15', i !== idx);
  });
}

testimonials.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'w-2.5 h-2.5 rounded-full bg-white/15 transition-colors';
  dot.addEventListener('click', () => { currentTestimonial = i; renderTestimonial(i); });
  testimonialDots.appendChild(dot);
});
renderTestimonial(0);
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  renderTestimonial(currentTestimonial);
}, 5000);
