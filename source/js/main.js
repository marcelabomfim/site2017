'use strict';

var speakersData = [
  {
    name: 'Fábio Vedovelli',
    role: 'Trabalha atualmente como Web developer para Octimine GmbH (Munique/Alemanha) e é entusiasta Vue.js',
    label: '@vedovelli',
    link: 'http://twitter.com/vedovelli',
    photo: 'assets/images/fabio-vedovelli-frontinsampa.jpg'
  },
  {
    name: 'Bianca Brancaleone',
    role: 'Sócia do Eu Compraria, Especialista em UX e Google Expert em UX, organizadora do GDG e Women Techmakers de Sorocaba',
    label: '@biab',
    link: 'http://twitter.com/biab',
    photo: 'assets/images/bianca-brancaleone-frontinsampa.jpg'
  },
  {
    name: 'Raphael Fabeni',
    role: 'Desenvolvedor na RedVentures e criador/organizador do #MeetupCSS SP',
    label: '@raphaelfabeni',
    link: 'http://twitter.com/raphaelfabeni',
    photo: 'assets/images/raphael-fabeni-frontinsampa.jpg'
  },
  {
    name: 'Patrícia Silva',
    role: 'Front-end Developer at MATERA Systems (Campinas/SP)',
    label: '@Paty_Go',
    link: 'http://twitter.com/Paty_Go',
    photo: 'assets/images/patricia-silva-frontinsampa.jpg'
  },
  {
    name: 'Bruno Genaro',
    role: 'Desenvolvedor Front-End na Cisco em Orlando/FL (USA) e organizador do OrlandoJS Meetup.',
    label: '@bfgenaro',
    link: 'http://twitter.com/bfgenaro',
    photo: 'assets/images/bruno-genaro-frontinsampa.jpg'
  },
  {
    name: 'A definir',
    role: '',
    label: '',
    link: '/',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'A definir',
    role: '',
    label: '',
    link: '/',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'A definir',
    role: '',
    label: '',
    link: '/',
    photo: 'assets/images/speaker.jpg'
  }
]

var timeline = [
  {
    hour: '08:00 - 09:30',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: '',
    link: ''
  },
  {
    hour: '9:00 - 10:00',
    title: 'Apresentação Matheus Marsiglio',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '10:10 - 11:00',
    title: 'Raphael Fabeni',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '11:10 - 12:00',
    title: 'Fábio Vedoveli',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '12:00 - 13:30',
    title: 'Almoço',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '13:40 - 14:00',
    title: 'Patricia Silva',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '14:10 - 15:00',
    title: 'Bruno Genaro',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '15:10 - 16:00',
    title: 'Bianca Brancaleone',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '16:10 - 16:40',
    title: 'Coffee',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '16:40 - 18:30',
    title: 'Em definição',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '18:40',
    title: 'Encerramento',
    description: '',
    speaker: '',
    link: ''
  }
]

const timelineTemplate = (timeline) => {
  return timeline.map((item, i) => {
    return (
      `
        <div class="timeline-block ${ i == 0 ? 'current' : '' }" data-timeline-bullet>
          <div class="timeline-content">
            <h3 class="text-medium">${ item.title }</h3>
            <p>${ item.hour }</p>
            <p>${ item.description }</p>
            <p class="timeline-speaker">${ item.speaker }</p>
          </div>
        </div>
      `
    )
  }).join('')
}

const speakerTemplate = (speaker) => {
  return speaker.map((item) => {
    return (
      `
        <figure class="speaker-item">
          <img src="${ item.photo }" alt="Palestrante ${ item.name }">
          <figcaption>
            <p class="text-large">${ item.name }</p>
            <p>
              ${ item.role }
              <a href="${ item.link }" aria-label="Ir ao twitter de ${ item.name }" target="_blank">${ item.label }</a>
            </p>
          </figcaption>
        </figure>
      `
    )
  }).join('')
}

const clickMenu = () => {
  let taskItems = document.querySelectorAll('[data-menu-link]');

  for ( let i = 0, len = taskItems.length; i < len; i++ ) {
    let taskItem = taskItems[i];
    contextMenuListener(taskItem);
  }
}

const contextMenuListener = (menu) => {
  let navCheckbox = document.querySelector('[data-check]');
  let button = document.querySelector('[data-menu-mobile]');

  menu.addEventListener('click', () => {
    button.click()
  });
}

const toogleInvertColor = () => {
  let elem = document.querySelector('[data-invert-color]');
  elem.addEventListener('click', () => {
    document.body.classList.toggle('invert-color');
  })
}


const swip = () => {
  let touchstartX = 0;
  let touchstartY = 0;
  let touchendX = 0;
  let touchendY = 0;
  let checkbox = document.querySelector('[data-check]');

  window.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
  }, false);


  window.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handle();
  }, false);

  function handle() {
      if (touchendX < touchstartX) {
          checkbox.setAttribute('checked','checked');
      }
      if (touchendX > touchstartX) {
          checkbox.removeAttribute('checked','checked');
      }
      if (touchendY == touchstartY) {
        alert(el)

        if (checkbox.getAttribute('checked')) {
          checkbox.removeAttribute('checked','checked');
        } else {
          checkbox.setAttribute('checked','checked');
        }
      }
  }
}

class FontSize {
  constructor() {
    this.fontSize = document.querySelector('[data-font-size]');
    this.fontSizeMore = this.fontSize.querySelector('[data-font-size-more]');
    this.fontSizeLess = this.fontSize.querySelector('[data-font-size-less]');

    if(!this.fontSize.hasAttribute('data-font-size-min')) {
      console.error('data-font-size-min is required attribute to FontSize module.');
      return;
    }

    if(!this.fontSize.hasAttribute('data-font-size-max')) {
      console.error('data-font-size-max is required attribute to FontSize module.');
      return;
    }

    if(typeof parseInt(this.fontSize.getAttribute('data-font-size-max')) !== 'number') {
      console.error('data-font-size-max must be a number.');
      return;
    }

    if(typeof parseInt(this.fontSize.getAttribute('data-font-size-min')) !== 'number') {
      console.error('data-font-size-min must be a number.');
      return;
    }

    this.settingsFontSizeMin = this.fontSize.getAttribute('data-font-size-min');
    this.settingsFontSizeMax = this.fontSize.getAttribute('data-font-size-max');

    this.init();
  }

  increaseSize() {
    var n = this.getBodySize();

    if(n < this.settingsFontSizeMax) {
      n += 10;
    }

    this.setSize(n);
    this.setBodySize(n);
  }

  decreaseSize() {
    var n = this.getBodySize();

    if(n > this.settingsFontSizeMin) {
      n -= 10;
    }

    this.setSize(n);
    this.setBodySize(n);
  }

  setSize(size) {
    this.fontSize.setAttribute('data-font-size', size);
  }

  getBodySize() {
    return parseInt(this.fontSize.getAttribute('data-font-size'));
  }

  setBodySize(size) {
    document.getElementsByTagName('body')[0].style.fontSize = size + '%';
  }

  observe() {
    if(this.fontSizeMore) {
      this.fontSizeMore.addEventListener('click', () => {
        this.increaseSize();
      });
    }

    if(this.fontSizeLess) {
      this.fontSizeLess.addEventListener('click', () => {
        this.decreaseSize();
      });
    }
  }

  init() {
    this.fontSize.setAttribute('data-font-size', 100);

    this.observe();
  }
}

class Timeline {
  constructor() {
    this.timeline = document.querySelector('[data-timeline]');
    this.timelineBullet = this.timeline.querySelectorAll('[data-timeline-bullet]');

    this.init();
  }

  toggleBullet(bullet, bulletOrder) {
    var bulletPosY = bullet.getBoundingClientRect().top;

    if(bulletPosY <= (window.outerHeight / 2)) {
      bullet.classList.add('current');
      return;
    }

    if(bulletOrder === 0) {
      return;
    }

    bullet.classList.remove('current');
  }

  observe() {
    window.addEventListener('scroll', () => {
      document.querySelectorAll('[data-timeline-bullet]').forEach(function(bullet, bulletOrder) {
        this.toggleBullet(bullet, bulletOrder);
      }.bind(this));
    });
  }

  init() {
    this.observe();
  }
}

window.onload = function () {
  new FontSize();

  clickMenu();
  toogleInvertColor();
  swip();

  const timelineContainer = document.querySelector('[data-schedule]')
  const speakersContainer = document.querySelector('[data-speaker]')

  timelineContainer.innerHTML = timelineTemplate(timeline);
  speakersContainer.innerHTML = speakerTemplate(speakersData);

  new Timeline();
};
