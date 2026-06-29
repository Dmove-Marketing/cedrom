/* Scripts extraídos de casamentos.html */

(function(){
  // ---- inject seal into every slot ----
  var tpl = document.getElementById('seal-tpl');
  document.querySelectorAll('.seal-slot').forEach(function(slot){
    var clone = tpl.content.querySelector('.seal').cloneNode(true);
    if(slot.style.color) clone.style.color = slot.style.color;
    slot.appendChild(clone);
    slot.classList.remove('seal-slot');
  });

  // ---- amenities ----
  var amenities = [
    {n:"Cerimonial", img:"https://media.dmove.com.br/clients/cedrom/photos/EST_8919-scaled.webp"},
    {n:"Salão Principal", img:"https://media.dmove.com.br/clients/cedrom/photos/salao_principal_2.webp"},
    {n:"Área Externa com Piscina", img:"https://media.dmove.com.br/clients/cedrom/photos/IMG-20240820-WA0027-scaled.webp"},
    {n:"Pista de dança", img:"https://media.dmove.com.br/clients/cedrom/photos/e7525199-d99f-430d-952d-9b6a2a45574110.webp"},
    {n:"Camarim para noiva", img:"https://media.dmove.com.br/clients/cedrom/photos/Spa-da-Noiva.webp"},
    {n:"Lounge com bar integrado", img:"https://media.dmove.com.br/clients/cedrom/photos/Bar-integrado-scaled.webp"},
    {n:"Alta Gastronomia", img:"https://media.dmove.com.br/clients/cedrom/photos/Gastronomia.webp"},
    {n:"Decoração", img:"https://media.dmove.com.br/clients/cedrom/photos/Decoracao.webp"},
    {n:"Sonorização, Iluminação e Projeção", img:"https://media.dmove.com.br/clients/cedrom/photos/AndrePersonal_0823-scaled.webp"}
  ];
  var ag = document.querySelector('.amen-grid');
  amenities.forEach(function(item,i){
    var n = String(i+1).padStart(2,'0');
    var el = document.createElement('div');
    el.className='amen reveal';
    el.innerHTML =
      '<div class="ph filled"><img src="'+item.img+'" alt="'+item.n+' — Cedrom Eventos" loading="lazy"></div>'
      +'<div class="amen-label"><span>'+item.n+'</span><span class="amen-num">'+n+'</span></div>';
    ag.appendChild(el);
  });

  // ---- additional services ----
  var services = [
    {n:"Ilha de Tapas", img:"https://media.dmove.com.br/clients/cedrom/photos/Ilha-de-Tapas.webp"},
    {n:"Assessoria", img:"https://media.dmove.com.br/clients/cedrom/photos/Assessoria-Grande.webp"},
    {n:"Ilha de sobremesas", img:"https://media.dmove.com.br/clients/cedrom/photos/Ilha-de-doces-Grande.webp"},
    {n:"SPA da Noiva", img:"https://media.dmove.com.br/clients/cedrom/photos/Camarim.webp"},
    {n:"Pista de Led", img:"https://media.dmove.com.br/clients/cedrom/photos/Pista-de-Led.webp"},
    {n:"Espelho Mágico", img:"https://media.dmove.com.br/clients/cedrom/photos/unnamed.webp"}
  ];
  var sg = document.querySelector('.svc-grid');
  if (sg) services.forEach(function(item){
    var el = document.createElement('div');
    el.className='svc reveal';
    el.innerHTML =
      '<div class="ph filled"><img src="'+item.img+'" alt="'+item.n+' — Cedrom Eventos" loading="lazy"></div>'
      +'<h3>'+item.n+'</h3><div class="svc-line"></div>';
    sg.appendChild(el);
  });

  // ---- header scroll state ----
  var header = document.getElementById('header');
  window.addEventListener('scroll', function(){
    header.classList.toggle('scrolled', window.scrollY > 30);
  });

  // ---- mobile menu ----
  var toggle = document.getElementById('menuToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // ---- reveal on scroll ----
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();