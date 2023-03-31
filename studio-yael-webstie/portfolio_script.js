
const imageWrappers = document.querySelectorAll(".image-wrapper");
const fullWidthLabel = document.getElementById("fullWidthLabel");
const closeLabel = document.getElementById("closeLabel");
const pageOverlay = document.getElementById("pageOverlay");
const labelImage = document.getElementById("labelImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const currentIndex = document.getElementById("currentIndex");
const pagination = document.getElementById("pagination");
const totalPages = imageWrappers.length - 1;

function updateImage(){
  const clickedImage = imageWrappers[index].querySelector("img");
  labelImage.src = clickedImage.src;
  labelImage.alt = clickedImage.alt;
  currentIndex.textContent = index.toString();

}

document.addEventListener("DOMContentLoaded", function () {
  

  let index = 0;
  imageWrappers.forEach((wrapper, i) => {
    wrapper.addEventListener("click", function () {
      index = i;
      const clickedImage = wrapper.querySelector("img");
      labelImage.src = clickedImage.src;
      labelImage.alt = clickedImage.alt;
      fullWidthLabel.classList.add("visible");
      pageOverlay.classList.remove("hidden");
      currentIndex.textContent = index.toString();
    });
  });

  prevButton.addEventListener("click", function () {
    if (index === 0) {
      index = imageWrappers.length - 1;
    } else {
      index--;
    }
    updateImage();
  });

  nextButton.addEventListener("click", function () {
    if (index === imageWrappers.length - 1) {
    index = 0;
    } else {
    index++;
    }
    updateImage();
    const clickedImage = imageWrappers[index].querySelector("img");
    labelImage.src = clickedImage.src;
    labelImage.alt = clickedImage.alt;
    currentIndex.textContent = index.toString();
  });

  closeLabel.addEventListener("click", function () {
    fullWidthLabel.classList.remove("visible");
    pageOverlay.classList.add("hidden");
  });
});




function updatePagination() {
  pagination.innerHTML = "";
  let firstPage = index - 2;
  let lastPage = index + 2;
  

  for (let i = firstPage; i <= lastPage; i++) {

    let seirial_number = i
    
    if (i > totalPages){
      seirial_number = i - totalPages
    } else if (i < 0){
      seirial_number = totalPages + i
    }
    let pageHtml = `<div class="page">${seirial_number}</div>`;
    
    if (i === currentPage) {
      pageHtml = `<div class="page active">${currentPage}</div>`;
    }
    pagination.innerHTML += pageHtml;
  } 
}

pagination.addEventListener("click", function (event) {
  if (event.target.classList.contains("page")) {
    currentPage = parseInt(event.target.textContent);
    updatePagination();
  }
});

updatePagination();