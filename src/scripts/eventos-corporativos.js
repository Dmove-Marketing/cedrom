/* Scripts da página /eventos-corporativos */

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
    {n:"Salão Principal",                    img:"https://media.dmove.com.br/clients/cedrom/photos/corporativos_(1).webp"},
    {n:"Área Externa com Piscina",           img:"https://media.dmove.com.br/clients/cedrom/photos/corporativos_(3).webp"},
    {n:"Pista de Dança",                     img:"https://media.dmove.com.br/clients/cedrom/photos/e7525199-d99f-430d-952d-9b6a2a45574110.webp"},
    {n:"Camarim",                            img:"https://media.dmove.com.br/clients/cedrom/photos/8ebbc004-c97d-423f-95f9-212f650ba2e0.webp"},
    {n:"Lounge com Bar Integrado",           img:"https://media.dmove.com.br/clients/cedrom/photos/Andre_Personal_0019.webp"},
    {n:"Gastronomia",                        img:"https://media.dmove.com.br/clients/cedrom/photos/corporativos_(5).webp"},
    {n:"Sonorização, Iluminação e Projeção", img:"https://media.dmove.com.br/clients/cedrom/photos/Tecnologia.webp", cls:"amen-rotate"},
    {n:"Decoração",                          img:"https://media.dmove.com.br/clients/cedrom/photos/corporativos_(16).webp"}
  ];
  var ag = document.querySelector('.amen-grid');
  amenities.forEach(function(item,i){
    var n = String(i+1).padStart(2,'0');
    var el = document.createElement('div');
    el.className='amen reveal' + (item.cls ? ' '+item.cls : '');
    el.innerHTML =
      '<div class="ph filled"><img src="'+item.img+'" alt="'+item.n+' — Cedrom Eventos" loading="lazy"></div>'
      +'<div class="amen-label"><span>'+item.n+'</span><span class="amen-num">'+n+'</span></div>';
    ag.appendChild(el);
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
