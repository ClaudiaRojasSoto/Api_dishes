const homeItemCounter = (containerItems) => {
  const home = document.querySelector('#home');
  home.innerHTML += ` (${containerItems})`;
};

export default homeItemCounter;