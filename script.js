const accordionWrapper = document.querySelector('.accordion-wrapper');
const detailsEl = document.querySelectorAll('.accordion');

detailsEl.forEach((el) => {
  el.addEventListener('toggle', (e) => {
    console.log(e.target.open);
    const imgEl = el.children[0].children[1];
    console.log(imgEl);

    if (e.target.open) {
      imgEl.src = '/assets/images/icon-minus.svg';
    } else {
      imgEl.src = '/assets/images/icon-plus.svg';
    }
  });
});

function checkType(v) {
  return Object.prototype.toString.call(v);
}
