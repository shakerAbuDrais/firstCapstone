/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}
const data = {
  image: ['./assets/images/speaker_01.png', './assets/images/speaker_02.png', './assets/images/speaker_03.png', './assets/images/speaker_04.png', './assets/images/speaker_05.png', './assets/images/speaker_06.png'],
  speakerName: ['Yochi Benkler', 'SohYeong Noh', 'Julia Leda', 'Layla Trettikov', 'Ryan Merkley', 'Jeon Gil-nam'],
  para1: ['Professor of enterpreneurial Legal Studies at Harvard Law School', 'Director of Art Centre Nabi and a board member of CC korea', 'Head of the Young Pirates of Europe', 'Secretary General of the Wikimedia Foundation', 'Creative Commons CEO, Former Mozilla Foundation COO', 'Professor at Harvard Law School'],
  para2: ['Benker studeis commons based peer production and published his seminal book the Wealth of Networks in 2006', 'as the meain venu for the new art production', 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EUs copyright law in July.', 'Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world population.', 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014.', 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.'],
};
let loop;
if (window.matchMedia('(min-width: 768px)').matches) {
  loop = data.speakerName.length;
} else {
  loop = 2;
}
window.addEventListener('load', () => {
  for (let i = 0; i < loop; i++) {
    const speakers = document.getElementsByClassName('speakers')[0];
    const speakerCards = document.createElement('div');
    speakerCards.classList.add('speakers-cards');
    speakers.appendChild(speakerCards);
    const cardsLeft = document.createElement('div');
    cardsLeft.classList.add('cards-left');
    speakerCards.appendChild(cardsLeft);
    const image = document.createElement('img');
    cardsLeft.appendChild(image);
    image.src = data.image[i];
    // right side code
    const cardsRight = document.createElement('div');
    cardsRight.classList.add('cards-right');
    speakerCards.appendChild(cardsRight);
    const cardsTitle = document.createElement('h2');
    cardsTitle.textContent = data.speakerName[i];
    cardsRight.appendChild(cardsTitle);
    const firstP = document.createElement('p');
    firstP.classList.add('para');
    firstP.textContent = data.para1[i];
    cardsRight.appendChild(firstP);
    const secondP = document.createElement('p');
    secondP.textContent = data.para2[i];
    cardsRight.appendChild(secondP);
    if (i === 1) {
      const moreBtn = document.createElement('button');
      moreBtn.classList.add('more-btn');
      speakers.appendChild(moreBtn);
      moreBtn.textContent = 'MORE';
    }
  }
});