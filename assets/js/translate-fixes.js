/* ============================================================
   DT30 — CORREZIONI TERMINOLOGICHE PER GOOGLE TRANSLATE
   Quando il visitatore sceglie l'inglese (bandierina GB), questo
   script sostituisce, in tutto il testo tradotto, le parole CHIAVE
   con i termini che preferisci TU.

   COME AGGIUNGERE UN TERMINE (una riga, qui sotto):
     'traduzione che fa Google': 'termine che vuoi tu',
   Esempio: se Google traduce "Riformatore" con "Reformer" ma a te
   piace di piu' "The Reformer", aggiungi:
     'Reformer': 'The Reformer',
   Dopo la modifica salva il file e ricarica la pagina (Ctrl+F5).
   ============================================================ */
var TRANSLATE_FIXES = {
  'Perfectionist': 'Reformer',
  'Altruist': 'Helper',
  'Executor': 'Achiever',
  'Romantic': 'Individualist',
  'Observer': 'Investigator',
  'Skeptic': 'Loyalist',
  'Optimist': 'Enthusiast',
  'Leader': 'Challenger',
  'Mediator': 'Peacemaker',
  'enneatypes': 'Enneatypes'
};

function __fixTranslated(){
  if(!/translated-ltr/.test(document.documentElement.className)) return;
  var SKIP={SCRIPT:1,STYLE:1,NOSCRIPT:1};
  var esc=function(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');};
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null);
  var n,re,keys=Object.keys(TRANSLATE_FIXES),i;
  while(n=w.nextNode()){
    var p=n.parentNode;
    if(!p||SKIP[p.nodeName])continue;
    if(p.closest&&p.closest('#goog-gt-tt,.skiptranslate,.goog-te-banner-frame'))continue;
    var s=n.nodeValue;
    for(i=0;i<keys.length;i++){
      re=new RegExp('\\b'+esc(keys[i])+'\\b','gi');
      s=s.replace(re,TRANSLATE_FIXES[keys[i]]);
    }
    if(s!==n.nodeValue)n.nodeValue=s;
  }
}
new MutationObserver(__fixTranslated).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
window.addEventListener('load',function(){[800,2500,6000,12000].forEach(function(ms){setTimeout(__fixTranslated,ms);});});
