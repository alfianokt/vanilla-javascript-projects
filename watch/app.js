const elClock = document.querySelector('#clock');
const jam = () => {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  // add zero on number under 9
  // 00, 01, 02...
  h = (h < 9) ? "0" + h : h;
  m = (m < 9) ? "0" + m : m;
  s = (s < 9) ? "0" + s : s;

  elClock.innerText = `${h} : ${m} : ${s}`;

  setTimeout(jam, 1000);
};

window.addEventListener('load', () => {
  jam();
});