// dynamic featured speakers
// retrieve elements to create dynamic speakers
const speakersContainer = document.querySelector('#speak');
const showMoreBtn = document.querySelector('#show-more');
// create speakers info objects
const conventionSpeakers = [
  {
    picture: 'img/paul-hinz.jpg',
    name: 'Paul Hinz',
    title: 'A Swedish Professor.',
    description: 'Has five year experience in AI researches',
  },
  {
    picture: 'img/beltran-rueda.png',
    name: 'Beltran Rueda',
    title: 'A Swedish programmer and designer.',
    description: 'He is best known for AI used algorithms at 2009.',
  },
  {
    picture: 'img/paul-hinz.jpg',
    name: 'Shigeru Miyamoto',
    title: 'A Japanese App designer, producer and AI director.',
    description: 'He is expert in AI algorithms and Neural network.',
  },
  {
    picture: 'img/kay-vogelgesang.jpg',
    name: 'Kay Vogelgesang',
    title: 'Senior programmer in python.',
    description: 'Kay is Co-Founder of openAI and researcher in this case.',
  },
  {
    picture: 'img/daniel-lopez.png',
    name: 'Daniel-Lopez',
    title: 'A professional professor',
    description: 'He has played a big roll in AI technology.',
  },
  {
    picture: 'img/kai-seidler.jpg',
    name: 'Kai Seidler',
    title: 'AI app user',
    description: 'He is using many AI apps for his health problem.',
  },
];
// create hidden speakers div
const hiddenSpeakers = document.createElement('div');
hiddenSpeakers.classList.add('hidden-speakers');

// create the cards and append them
conventionSpeakers.forEach((speaker) => {
  const speakerDiv = document.createElement('div');
  speakerDiv.className = 'speaker';
  speakerDiv.innerHTML = `<div class="speaker-img">
          <img src="${speaker.picture}" alt="${speaker.name}">
        </div>
        <div class="speaker-description">
          <h3 class="speaker-name">${speaker.name}</h3>
          <small class="speaker-title">${speaker.title}</small>
          <hr class="gray-hr">
          <p class="speaker-info">${speaker.description}</p>
        </div>`;
  if (conventionSpeakers.indexOf(speaker) >= 2) {
    hiddenSpeakers.appendChild(speakerDiv);
  } else {
    speakersContainer.appendChild(speakerDiv);
  }
});

// append hidden speakers div to parent element
speakersContainer.appendChild(hiddenSpeakers);

// show more speakers event handler
const hiddenDiv = document.querySelector('.hidden-speakers');
showMoreBtn.addEventListener('click', () => {
  if (hiddenDiv.classList.contains('visible')) {
    hiddenDiv.classList.remove('visible');
    showMoreBtn.innerHTML = 'MORE <i class="fa-solid fa-angle-down arrow-icon"></i>';
  } else {
    hiddenDiv.classList.add('visible');
    showMoreBtn.innerHTML = 'LESS <i class="fa-solid fa-angle-up arrow-icon"></i>';
  }
});