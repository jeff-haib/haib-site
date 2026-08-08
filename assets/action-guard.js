(function () {
  "use strict";

  function currentMessage() {
    var lang = localStorage.getItem("haib-lang") || document.documentElement.lang || "ko";
    return String(lang).toLowerCase().startsWith("en") ? "Coming soon." : "준비 중입니다.";
  }

  function isBlockedAction(anchor) {
    if (!anchor) return false;
    var href = anchor.getAttribute("href") || "";
    return (
      href.indexOf("https://apps.hai-b.ai/") === 0 ||
      href.indexOf("https://chrome.google.com/") === 0 ||
      href.indexOf("https://polar.sh/") === 0 ||
      href.indexOf("#polar-checkout") === 0 ||
      href.indexOf("#checkout-") === 0 ||
      href.indexOf("#keyradar-enterprise-coming-soon") === 0 ||
      href.indexOf("#ai-contentory-coming-soon") === 0 ||
      href.indexOf("#baton-coming-soon") === 0 ||
      anchor.classList.contains("js-preparing")
    );
  }

  document.addEventListener("click", function (event) {
    var anchor = event.target.closest("a");
    if (!isBlockedAction(anchor)) return;
    event.preventDefault();
    window.alert(currentMessage());
  });
})();
