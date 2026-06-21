/* WebApplications.ca theme JS
   - mobile menu
   - smooth scroll to search
   - lightweight client-side filter (demo)
   - reveal-on-scroll
   - toast
*/
(function(){
  const burger = document.getElementById('burger');
  const mobilePanel = document.getElementById('mobilePanel');

  if (burger && mobilePanel) {
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
      mobilePanel.style.display = expanded ? 'none' : 'block';
    });
  }

  document.getElementById('scrollSearch')?.addEventListener('click', () => {
    document.getElementById('searchArea')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => document.getElementById('searchInput')?.focus(), 350);
  });

  function toast(message){
    const t = document.createElement('div');
    t.textContent = message;
    t.style.position = 'fixed';
    t.style.left = '50%';
    t.style.bottom = '22px';
    t.style.transform = 'translateX(-50%)';
    t.style.padding = '10px 12px';
    t.style.borderRadius = '999px';
    t.style.border = '1px solid rgba(15,23,42,.12)';
    t.style.background = 'rgba(255,255,255,.92)';
    t.style.boxShadow = '0 18px 40px rgba(15,23,42,.14)';
    t.style.zIndex = '999';
    t.style.fontSize = '13px';
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .35s ease'; }, 1400);
    setTimeout(() => t.remove(), 1900);
  }
  window.toast = toast;

  // Demo search/filter on homepage
  const input = document.getElementById('searchInput');
  const resultsPill = document.getElementById('resultsPill');
  const searchable = () => Array.from(document.querySelectorAll('[data-tags], [data-title]'));

  function setVisible(el, yes){ el.style.display = yes ? '' : 'none'; }

  function runSearch(q){
    const query = q.trim().toLowerCase();
    const els = searchable();
    if (!query){
      els.forEach(el => setVisible(el, true));
      if (resultsPill) resultsPill.textContent = 'Search: off';
      return;
    }
    let shown = 0;
    els.forEach(el => {
      const hay = ((el.getAttribute('data-title') || '') + ' ' + (el.getAttribute('data-tags') || '')).toLowerCase();
      const ok = hay.includes(query);
      setVisible(el, ok);
      if (ok) shown++;
    });
    if (resultsPill) resultsPill.textContent = `Search: “${query}” • ${shown} match${shown === 1 ? '' : 'es'}`;
  }

  input?.addEventListener('input', (e) => runSearch(e.target.value));

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if (revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in'); });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  }

  // Newsletter mock
  document.querySelectorAll('form[data-mock-subscribe]').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      toast('Thanks — you’re subscribed (mock).');
    });
  });

  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
