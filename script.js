window.addEventListener('load', () => {
  let progress = 0;
  const percentageElement = document.getElementById('percentage');
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');

  const interval = setInterval(() => {
    progress += 2;
    percentageElement.textContent = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.opacity = 1;
      }, 1000);
    }
  }, 50);
});

document.getElementById('about-link').addEventListener('click', function (e) {
  e.preventDefault();

  const targetElement = document.getElementById('aboutContainer');

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});


const container = document.getElementById('container');
let isDragging = false;
let startX, startY;
let scrollLeft, scrollTop;

window.addEventListener('load', () => {
  const containerWidth = container.scrollWidth;
  const containerHeight = container.scrollHeight;
  const viewportWidth = container.clientWidth;
  const viewportHeight = container.clientHeight;

  const centerX = (containerWidth - viewportWidth) / 2;

  container.scrollLeft = centerX;
});

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  startY = e.pageY - container.offsetTop;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const y = e.pageY - container.offsetTop;
  const walkX = (x - startX) * 2;
  const walkY = (y - startY) * 2;
  container.scrollLeft = scrollLeft - walkX;
  container.scrollTop = scrollTop - walkY;
});


const mainMenu = document.querySelector('.tab-menu');
const reversedMenu = document.querySelector('.sContainer .reversed');

function applyScaling(index, elements) {
  elements.forEach((el, idx) => el.style.transition = 'transform 0.4s');

  elements[index].style.transform = 'scale(1.2)';

  if (index > 0) {
    elements[index - 1].style.transform = 'scale(1.07)';
  }
  if (index < elements.length - 1) {
    elements[index + 1].style.transform = 'scale(1.07)';
  }
}

mainMenu.querySelectorAll('.tab-element-container').forEach((element, index, elements) => {
  element.addEventListener('mouseenter', () => {
    mainMenu.style.transform = 'scale(1.05)';
    mainMenu.style.transition = 'transform 0.4s';

    applyScaling(index, elements);

    const reversedElements = reversedMenu.querySelectorAll('.tab-element-container');
    const reversedIndex = elements.length - 1 - index;
    applyScaling(reversedIndex, reversedElements);
  });

  element.addEventListener('mouseleave', () => {
    mainMenu.style.transform = 'scale(1)';

    elements.forEach(el => el.style.transform = 'scale(1)');
    reversedMenu.querySelectorAll('.tab-element-container').forEach(el => el.style.transform = 'scale(1)');
  });
});


const init = () => {
  lenis = new Lenis({
    lerp: 0.04,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

init();
document.addEventListener('DOMContentLoaded', function () {
  const websiteElements = document.querySelectorAll('.website-element');
  const innerContent = document.querySelector('.inner-content');
  const imagesContainer = document.querySelector('.images-container');

  const imageSets = {
    takwira: [
      'images/takwira/takwira-home.png',
      'images/takwira/takwira-game.png',
      'images/takwira/takwira-team.png',
    ],
    creativyst: [
      'images/creativyst/creativyst-home-page.png',
      'images/creativyst/creativyst-settings.png',
      'images/creativyst/creatyvyst-profile.png',
    ],
    scholarNotes: [
      'images/scholarNotes/scholar-login.png',
      'images/scholarNotes/scholar-home.png',
      'images/scholarNotes/scholar-classroom.png',
    ],
    pmc: [
      'images/pmc/pmc-home-page.png',
      'images/pmc/pmc-login.png',
      'images/pmc/pmc-ressource-planning.png',
    ],
    oil_mill: [
      'images/oil_mill/oil_mill-login.png',
      'images/oil_mill/oil_mill-buy.png',
      'images/oil_mill/oil_mill-production.png',
    ],
    aha: [
      'images/aha/aha-alimentation.png',
      'images/aha/aha-content.png',
      'images/aha/aha-loadingscreen.png',
    ],
    comingSoon: [
      'images/first-blurry-image.webp',
      'images/sexond-blurry-image.webp',
      'images/third-blurry-image.avif',
    ]
  };

  let isAnimating = false;

  websiteElements.forEach((element) => {
    element.addEventListener('mouseenter', function () {
      const elementRect = element.getBoundingClientRect();
      const innerContentRect = innerContent.getBoundingClientRect();

      const top = elementRect.top - innerContentRect.top - 300;
      const left = elementRect.left - innerContentRect.left - 350;

      const imagePaths = element.classList.contains('coming-soon')
        ? imageSets.comingSoon
        : imageSets[element.id];

      if (imagePaths) {
        const images = imagesContainer.querySelectorAll('img');
        images.forEach((img, index) => {
          img.src = imagePaths[index] || '';
        });
      }

      if (!isAnimating) {
        gsap.set(imagesContainer, {
          position: 'absolute',
          left: `${left}px`,
          top: `${top - imagesContainer.offsetHeight}px`,
          scale: 0,
          opacity: 0,
          display: 'flex',
        });

        gsap.to(imagesContainer, {
          scale: 1,
          opacity: 1,
          duration: 0.1,
          ease: 'power2.out',
          onStart: function () {
            isAnimating = true;
          },
        });
      }
    });

    element.addEventListener('mouseleave', function () {
      gsap.to(imagesContainer, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: function () {
          isAnimating = false;
          imagesContainer.style.display = 'none';
        },
      });
    });
  });
});

const emailElement = document.getElementById("emailText");
const tooltip = document.getElementById("tooltip");

emailElement.addEventListener("click", (event) => {
    const emailText = emailElement.textContent;
    navigator.clipboard.writeText("mahdi.nasri123@gmail.com");


    tooltip.style.left = `250px`;
    tooltip.style.top = `80px`;
    tooltip.style.display = "block";

    setTimeout(() => {
        tooltip.style.display = "none";
    }, 3000);
});

const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const submitButton = document.getElementById("submitFormButton")
emailInput.addEventListener("input", ()=>{
  changeInput(emailInput, nameInput);
});
nameInput.addEventListener('input', ()=>{
  changeInput(nameInput, emailInput);
});

const changeInput = (element , otherElement) =>{
  if(element.value !="" && otherElement.value != ""){
    submitButton.disabled = false;
    submitButton.style.backgroundColor ="white";
    submitButton.classList.remove("blocked-button");
    console.log("changed !");
  }else{
    submitButton.classList.add("blocked-button");
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#737373";
  }
}


