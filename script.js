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

/* ---- "The Platform" focus line: starts on column 1, advances on scroll ---- */
(function(){
  var sec=document.querySelector('.platform');
  var ind=document.getElementById('tabIndicator');
  if(!sec||!ind)return;
  var cols=[].slice.call(sec.querySelectorAll('.col4'));
  if(!cols.length)return;
  var idx=0;
  function apply(){
    var c=cols[idx];
    ind.style.width=c.offsetWidth+'px';
    ind.style.transform='translateX('+c.offsetLeft+'px)';
    for(var k=0;k<cols.length;k++){cols[k].classList.toggle('active',k===idx);}
  }
  function update(){
    var r=sec.getBoundingClientRect(), vh=window.innerHeight;
    // progress as the section travels through the viewport (starts a bit after it enters)
    var total=r.height+vh*0.5;
    var p=Math.max(0,Math.min(1,((vh-r.top)-vh*0.25)/total));
    var i=Math.max(0,Math.min(cols.length-1,Math.floor(p*cols.length)));
    if(i!==idx){idx=i;apply();}
  }
  window.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',function(){apply();update();});
  window.addEventListener('load',apply);
  apply();update();
})();
