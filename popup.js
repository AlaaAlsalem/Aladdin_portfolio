/* starting work on pop up window */

const details = [
  {
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './Images/ten.png',
    technologies: ['CSS', 'html', 'bootsrap', 'Ruby'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
    image: './Images/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry',
    image: './Images/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: 'To popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia fnfifdfdifhfio fjnkfvkfvfkjfdf jkfndfkdfklgfjkdfnkkjkl jkdfsk',
    image: './Images/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a kjbdfkjfvjfvjfvjjo jnffnjvjnvm jgxcgmnklbnfkf ofgngd;fnfkfsip kpgsngfnfjokjf fspkl',
    image: './Images/ten.png',
    technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
    live: 'https://alaaalsalem.github.io/Aladdin_portfolio/',
    source: 'https://github.com/AlaaAlsalem/Aladdin_portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: 'Hello from Web development this text is only for testing and to see how   it will be op the screen when render it',
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
