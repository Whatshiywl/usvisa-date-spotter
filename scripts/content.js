const s = document.createElement('script');
s.src = chrome.runtime.getURL('scripts/script.js');
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
window.addEventListener('message', event => {
  if (event.data.issuer !== 'usvisa-script') return;
  const callbackId = event.data.callbackId;
  chrome.runtime.sendMessage(event.data, result => {
    window.postMessage({ issuer: 'usvisa-content', callbackId, result });
  });
})
