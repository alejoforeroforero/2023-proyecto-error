function cE(tag, parentEl) {
  let htmlObj = document.createElement(tag);
  parentEl.appendChild(htmlObj);

  return htmlObj;
}
