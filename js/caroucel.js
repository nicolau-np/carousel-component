const listOfImages = document.querySelectorAll(".images img");
const listOfText = document.querySelectorAll(".right .item");
var active = 0;
const countImages = listOfImages.length - 1;
const countTexts = listOfText.length - 1;

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

showImage();

listOfImages.forEach(e => {
  e.addEventListener("click", () => {
    active = parseInt(e.getAttribute('data-item'));
    showImage();
  });
});

function showImage() {
  listOfImages.forEach(e => {
    e.classList.remove("active");
  });

  listOfText.forEach(e => {
    e.classList.remove("active");
  });

  listOfImages[active].classList.add("active");
  listOfText[active].classList.add("active");

  var imageUrl = listOfImages[active].getAttribute("src");
  listOfText[active].style.backgroundImage = 'url("' + imageUrl + '")';
}

function getImage() {
  if (active === countImages) {
    active = 0;
  } else {
    active = active + 1;
  }
  showImage();
}

function nextImage() {
  if (active === countImages) {
    active = countImages;
  } else {
    active = active + 1;
  }
  showImage();
}

function prevImage() {
  if (active === 0) {
    active = 0;
  } else {
    active = active - 1;
  }
  showImage();
}

next.addEventListener("click", e => {
  nextImage();
});

prev.addEventListener("click", e => {
  prevImage();
});

setInterval(() => {
  getImage();
}, 5000);
