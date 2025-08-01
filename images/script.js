const lightbox = document.getElementById('lightbox');
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox__img = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function openLightbox(index) {
  lightbox.style.display = 'flex';
  const img = galleryItems[index];
  lightbox__img.src = img.src;
  // Get caption from figcaption
  const figcaption = img.parentElement.querySelector('figcaption');
  lightboxCaption.textContent = figcaption ? figcaption.textContent : img.alt;
  currentIndex = index;
}

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  openLightbox(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  openLightbox(currentIndex);
}

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showPrev();
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showNext();
});

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft') showPrev();
    else if (e.key === 'ArrowRight') showNext();
    else if (e.key === 'Escape') closeLightbox();
  }
});