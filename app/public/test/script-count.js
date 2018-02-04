(function() {
  const countDom = document.getElementById('success-script-count');
  let count = parseInt(countDom.innerText);
  count++;
  countDom.innerText = count;
})();
