/* ---- Mobile nav toggle ---- */
(function(){
  var t=document.getElementById('navToggle'),l=document.getElementById('navLinks');
  if(t){t.addEventListener('click',function(){l.classList.toggle('open');});}
  l && l.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){l.classList.remove('open');});
  });
})();

/* ---- Scroll reveal ---- */
(function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}
    });
  },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){io.observe(e);});
})();

/* ---- Subtle parallax drift on hero device ---- */
(function(){
  var d=document.querySelector('.hero-device');
  if(!d)return;
  window.addEventListener('scroll',function(){
    var y=window.scrollY;
    if(y<1100){d.style.transform='translateY('+(y*0.08)+'px)';}
  },{passive:true});
})();
