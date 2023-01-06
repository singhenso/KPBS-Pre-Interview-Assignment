const btnElement = document.querySelector('#fix-me')
let counts = 0;
console.log(counts)
btnElement.addEventListener('click', () => buttonHandler())

function buttonHandler() {

  const surpriseElement = document.querySelector('.surprise');
  const fixElement = document.querySelector('.emojibtn');
  const img = document.createElement('img');
  const emojiList = ['👀', '😊 ', '📡', '📻', '✨', '🫠', '😂', '🐻', '🙈'];
  const randomEmoji = Math.floor(Math.random() * emojiList.length);

  // replaced SVG with emoji icon =============================================
  // img.src = `data:image/png;base64,${surprise}`;
  surpriseElement.innerHTML += `<span>${emojiList[randomEmoji]}</span>`;
  counts += 1;
  counts >= 10 ? fixElement.textContent = `Fixed too many times!` :  fixElement.textContent = `Fixed ${counts} times!`

  if (counts === 10) { addGiphy(); };

  function addGiphy() {
    var bbb = '<img src="https://media4.giphy.com/media/8lQyyys3SGBoUUxrUp/giphy.gif" alt="Smiley face">';
    surpriseElement.innerHTML += bbb;
    
  }
  setInterval(() => {
    jsConfetti.addConfetti({
      emojis: ['😊 ', '📡', '📻', '✨', '🫠', '😂']
    })
  }, 2500)
}

/*============================================================================
conffeti - Vladmir Nikitin
https://codepen.io/loonywizard-the-selector/pen/RwVNNge
  ============================================================================*/
const jsConfetti = new JSConfetti();


/*============================================================================
Navbar credit from Developer, Évelym S.
  ============================================================================*/

// Navigation
// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
  if (nav.style.transform != 'translateX(0%)') {
    nav.style.transform = 'translateX(0%)';
    nav.style.transition = 'transform 0.2s ease-out';
  } else {
    nav.style.transform = 'translateX(-100%)';
    nav.style.transition = 'transform 0.2s ease-out';
  }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
  if (toggleIcon.className != 'menuIcon toggle') {
    toggleIcon.className += ' toggle';
  } else {
    toggleIcon.className = 'menuIcon';
  }
});