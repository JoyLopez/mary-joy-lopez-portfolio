/* ============ LOADER ============ */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }, 500);
});

/* ============ NAVBAR SCROLL STATE ============ */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if(window.scrollY > 40){ navbar.classList.add('scrolled'); } else { navbar.classList.remove('scrolled'); }
  if(window.scrollY > 600){
    backToTop.classList.remove('opacity-0','pointer-events-none');
  } else {
    backToTop.classList.add('opacity-0','pointer-events-none');
  }
});

backToTop.addEventListener('click', () => {
  if(typeof lenis !== 'undefined' && lenis) lenis.scrollTo(0); else window.scrollTo({top:0, behavior:'smooth'});
});

/* ============ MOBILE MENU ============ */
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});
document.querySelectorAll('[data-nav-mobile]').forEach(a => {
  a.addEventListener('click', () => { mobileMenu.classList.add('hidden'); mobileMenu.classList.remove('flex'); });
});

/* ============ ACTIVE NAV LINK ON SCROLL ============ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('[data-nav]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 140;
    if(window.scrollY >= top){ current = sec.getAttribute('id'); }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

/* ============ FOOTER YEAR ============ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============ Site-wide light/dark background + profile photo switch ============ */
(() => {
  const siteThemeInput = document.getElementById('input');
  const heroProfilePhoto = document.getElementById('profilePhoto');
  const vantaSkyEl = document.getElementById('vanta-sky');
  const vantaBirdsEl = document.getElementById('vanta-birds');
  const particleCanvas = document.getElementById('bg-canvas');
  const meteorCanvas = document.getElementById('meteor-canvas');
  let vantaEffect = null;
  let vantaBirdsEffect = null;
  if(!siteThemeInput) return;

  const setSkyBackground = (isDark) => {
    if(particleCanvas) particleCanvas.style.display = 'none';
    if(meteorCanvas) meteorCanvas.style.display = 'none';

    if(isDark){
      if(vantaEffect){ vantaEffect.destroy(); vantaEffect = null; }
      if(vantaSkyEl) vantaSkyEl.style.display = 'none';
      if(vantaBirdsEl){
        vantaBirdsEl.style.display = '';
        if(!vantaBirdsEffect && window.VANTA){
          try{
            vantaBirdsEffect = VANTA.BIRDS({
              el: vantaBirdsEl,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              backgroundColor: 0x0a0505,
              color1: 0xe10600,
              color2: 0xff3b3f,
              colorMode: 'varianceGradient',
              birdSize: 1.1,
              wingSpan: 24.00,
              speedLimit: 4.00,
              separation: 60.00,
              alignment: 40.00,
              cohesion: 40.00,
              quantity: 3.00,
            });
          } catch(err){
            console.warn('VANTA.BIRDS failed to initialize; falling back to the flat dark background.', err);
            vantaBirdsEl.style.display = 'none';
          }
        }
      }
    } else {
      if(vantaBirdsEffect){ vantaBirdsEffect.destroy(); vantaBirdsEffect = null; }
      if(vantaBirdsEl) vantaBirdsEl.style.display = 'none';
      if(vantaSkyEl){
        vantaSkyEl.style.display = '';
        if(!vantaEffect && window.VANTA){
          try{
            vantaEffect = VANTA.CLOUDS({
              el: vantaSkyEl,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              skyColor: 0x5eb7d9,
              cloudColor: 0xb1c2dc,
              cloudShadowColor: 0x1b3a57,
              sunColor: 0xff9c21,
              sunGlareColor: 0xfa6331,
              sunlightColor: 0xfa9531,
            });
          } catch(err){
            console.warn('VANTA.CLOUDS failed to initialize; falling back to the flat light background.', err);
            vantaSkyEl.style.display = 'none';
          }
        }
      }
    }
  };

  const applySiteTheme = (isDark) => {
    document.body.classList.toggle('site-light-mode', !isDark);
    if(heroProfilePhoto){
      heroProfilePhoto.src = isDark ? 'assets/images/profile/profile-image.jpg' : 'assets/images/profile/profile-image.jpg';
    }
    setSkyBackground(isDark);
  };

  siteThemeInput.addEventListener('change', () => {
    const isDark = siteThemeInput.checked;
    applySiteTheme(isDark);
    localStorage.setItem('joySiteTheme', isDark ? 'dark' : 'light');
  });

  const savedSiteTheme = localStorage.getItem('joySiteTheme');
  const startDark = savedSiteTheme !== 'light'; // dark is the default unless the user explicitly chose light before
  siteThemeInput.checked = startDark;
  applySiteTheme(startDark);
})();
