/* Food Assistance MEAL Toolkit: language switch shared by guide and tool pages.
   Content is written twice, in elements with class "en" and "es". */
(function(){
  var lang = "en";
  try { var saved = localStorage.getItem("fam-lang"); if (saved === "en" || saved === "es") lang = saved; } catch (e) {}
  function apply(){
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.lang = lang;
    var en = document.getElementById("lang-en"), es = document.getElementById("lang-es");
    if (en) en.setAttribute("aria-pressed", String(lang === "en"));
    if (es) es.setAttribute("aria-pressed", String(lang === "es"));
    var t = document.querySelector("title[data-en]");
    if (t) document.title = t.getAttribute("data-" + lang) || document.title;
    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }
  function set(l){ lang = l; try { localStorage.setItem("fam-lang", l); } catch (e) {} apply(); }
  window.FAM = { lang: function(){ return lang; } };
  document.addEventListener("DOMContentLoaded", function(){
    var en = document.getElementById("lang-en"), es = document.getElementById("lang-es");
    if (en) en.addEventListener("click", function(){ set("en"); });
    if (es) es.addEventListener("click", function(){ set("es"); });
    apply();
  });
  document.documentElement.setAttribute("data-lang", lang);
})();
