
const mobileMenuDiv = document.querySelector('#mob_link');
mobileMenuDiv.className = 'menu-hidden';
let anchorTag = document.createElement('a');
anchorTag.setAttribute('href', '#');
anchorTag.style.display = 'flex';
anchorTag.style.justifyContent = 'flex-end';
anchorTag.style.marginBottom = '10%';
anchorTag.style.marginRight = '10%';
mobileMenuDiv.appendChild(anchorTag);
const closingIcon = document.createElement('IMG');
closingIcon.setAttribute('src', 'Images/Icon.png');
closingIcon.setAttribute('alt', 'icon image');
closingIcon.id = 'close-button';
anchorTag.appendChild(closingIcon);
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'Portfolio';
anchorTag.setAttribute('href', '#actual-work-section');
anchorTag.className = 'menu-links';
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'About';
anchorTag.setAttribute('href', '#menu-about');
anchorTag.className = 'menu-links';
mobileMenuDiv.appendChild(anchorTag);

anchorTag = document.createElement('a');
anchorTag.textContent = 'Contact';
anchorTag.setAttribute('href', '#menu-contact');
anchorTag.className = 'menu-links';
mobileMenuDiv.appendChild(anchorTag);
const menuButton = document.querySelector('#nav-btn');

function display() {
  const targetedDiv = document.querySelector('.menu-hidden');
  targetedDiv.classList.add('visible');
  mobileMenuDiv.style.visibility = 'visible';
  menuButton.style.display = 'none';
}

const closeMenu = document.querySelector('.closeMenu');
menuButton.addEventListener('click', display);
function closePop() {
  const targetedDiv2 = document.querySelector('.menu-hidden');
  targetedDiv2.style.display = 'none';
  menuButton.style.display = 'block';
  closeMenu.style.display = 'none';
}
const anchorTagLinks = document.querySelectorAll('.menu-links');
anchorTagLinks.forEach((link) => {
  link.addEventListener('click', closePop);
});
closeMenu.addEventListener('click', closePop);


