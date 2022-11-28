const prev = document.getElementById('arrowleft');
const next = document.getElementById('arrowright');
const images = document.querySelector('.columnimage').children;
const totalImages = images.length;
const headlines = document.querySelector('.headlines').children;
const articles = document.querySelector('.articles').children;

let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
    headlines[i].classList.remove('maintext')
    articles[i].classList.remove('maintext')
  }
  images[index].classList.add('main');
  headlines[index].classList.add('maintext');
  articles[index].classList.add('maintext');
}

// function nextText(direction) {
//     if(direction == 'next') {
//       index++;
//       if(index == totalHeadlines) {
//         index = 0;
//       }
//     } else {
//       if(index == 0) {
//         index = totalHeadlines - 1;
//       } else {
//         index--;
//       }
//     }
  
//     for(let i = 0; i < headlines.length; i++) {
//       headlines[i].classList.remove('maintext');
//     }
//     headlines[index].classList.add('maintext');
//   }