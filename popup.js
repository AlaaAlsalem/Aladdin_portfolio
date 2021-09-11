/* starting work on pop up window */

const details = [
  {
    name: 'Multi Post Stories',
    description: 'A daily selection of privately personalized<br>reads; no accounts or sign-upsrequired has been the industry\'s standard dummy text ever since the 1500s, when anunknown printer took a standard dummy text.',
    image: './Images/ten.png',
    technologies: ['CSS', 'html', 'bootsrap', 'Ruby'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  
  {
    name: 'Professional Art printing Date',
    description: 'A daily selection of privately personalized reads; no accounts sign-upsrequired. Has been theindustry\'s standard' ,
    image: './Images/ten.png',
    technologies: ['html', 'bootsrap','Ruby'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized<br>reads; no accounts or sign-upsrequired has been the industry\'s standard dummy text ever since the 1500s, when anunknown printer took a standard dummy text.',
    image: './Images/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Website Portfolio ',
    description: 'A daily selection of privately personalized<br>reads; no accounts or sign-upsrequired has been the industry\'s standard dummy text ever since the 1500s, when anunknown printer took a standard dummy text.',
    image: './Images/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Professional Art printing Date',
    description: 'A daily selection of privately personalized reads; no accounts sign-upsrequired. Has been theindustry\'s standard' ,
    image: './Images/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized<br>reads; no accounts or sign-upsrequired has been the industry\'s standard dummy text ever since the 1500s, when anunknown printer took a standard dummy text.',
    image: './Images/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Website Portfolio ',
    description: 'A daily selection of privately personalized<br>reads; no accounts or sign-upsrequired has been the industry\'s standard dummy text ever since the 1500s, when anunknown printer took a standard dummy text.',
    image: './Images/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  
];

//

const SeeProjectButton = document.querySelectorAll('.project-button2');
SeeProjectButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('#modal');
    windowPop.style.visibility = 'visible';/**  */
    const projectDetail = details[i];
    const heading = document.querySelector('.heading h2');
    heading.textContent = projectDetail.name;
    const paragraph = document.querySelector('.img-p-button .description');
    paragraph.textContent = projectDetail.description;
    const picture = document.querySelector('.img-p-button .image');
    picture.src = projectDetail.image;
    const languages = document.querySelectorAll('.languages .bttn');
    languages.forEach((li, s) => {
      li.textContent = projectDetail.technologies[s];
    });
    const live = windowPop.querySelectorAll('.first-button')[0];
    live.href = projectDetail.live;
    const source = windowPop.querySelectorAll('.first-button')[1];
    source.href = projectDetail.source;
  });
});
const SeeCardButton = document.querySelectorAll('.click-card');
SeeCardButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('#modal');
    windowPop.style.display = 'block';
    const projectDetail = details[i];
    const heading = document.querySelector('.heading h2');
    heading.textContent = projectDetail.name;
    const paragraph = document.querySelector('.img-p-button .description');
    paragraph.textContent = projectDetail.description;
    const picture = document.querySelector('.img-p-button .image');
    picture.src = projectDetail.image;
    const languages = document.querySelectorAll('.languages .bttn');
    languages.forEach((li, s) => {
      li.textContent = projectDetail.technologies[s];
    });
    const live = windowPop.querySelectorAll('.first-button')[0];
    live.href = projectDetail.live;
    const source = windowPop.querySelectorAll('.first-button')[1];
    source.href = projectDetail.source;
  });
});
const closeProjectButton = document.querySelector('.close');
closeProjectButton.addEventListener('click', () => {
  const windowPop = document.querySelector('#modal');
  windowPop.style.visibility = 'hidden';
});
