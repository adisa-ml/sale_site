function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderContactBar() {
  const bar = document.getElementById("contact-bar");
  if (!bar) return;

  bar.innerHTML = `
    <div class="contact-bar">
      <span>Связаться с нами можно в Telegram</span>
      <a href="${TELEGRAM_LINK}" target="_blank" rel="noopener">Написать в TG</a>
    </div>
  `;
}

function renderCategoryPage() {
  const productsBlock = document.getElementById("products");
  const title = document.getElementById("category-title");
  if (!productsBlock || !title) return;

  const cat = getParam("cat") || "clothes";
  title.textContent = CATEGORIES[cat] || "Категория";

  const products = PRODUCTS.filter(item => item.category === cat);

  if (!products.length) {
    productsBlock.innerHTML = `<p class="empty">В этой категории пока нет товаров.</p>`;
    return;
  }

  productsBlock.innerHTML = products.map(item => `
    <article class="product-card">
      <a href="product.html?id=${item.id}">
        <img src="${item.photos[0]}" alt="${item.title}">
      </a>
      <div class="product-card-body">
        <h2>${item.title}</h2>
        <p class="price">${item.price}</p>
        <p>${item.short}</p>
        <a class="button" href="product.html?id=${item.id}">Открыть товар</a>
      </div>
    </article>
  `).join("");
}

function renderProductPage() {
  const page = document.getElementById("product-page");
  if (!page) return;

  const id = getParam("id");
  const item = PRODUCTS.find(product => product.id === id);
  currentImages = item ? item.photos : [];

  if (!item) {
    page.innerHTML = `<div class="card"><h1>Товар не найден</h1><p>Проверь ссылку или вернись на главную.</p></div>`;
    return;
  }

  document.title = item.title;

  page.innerHTML = `
    <section class="product-layout">
      <div class="gallery">
        ${item.photos.map((photo, index) => `<img src="${photo}" alt="${item.title}" onclick="openImageModal(${index})">`).join("")}
      </div>

      <div class="card product-info">
        <p class="eyebrow">${CATEGORIES[item.category]}</p>
        <h1>${item.title}</h1>
        <p class="price big">${item.price}</p>
        <p>${item.description}</p>
        <a class="button wide" href="${TELEGRAM_LINK}" target="_blank" rel="noopener">Написать по товару в Telegram</a>
      </div>
    </section>
  `;
}

renderContactBar();
renderCategoryPage();
renderProductPage();

let currentImages = [];
let currentImageIndex = 0;

function openImageModal(index) {
currentImageIndex = index;
document.getElementById("modal-image").src = currentImages[currentImageIndex];
document.getElementById("image-modal").classList.add("open");
}

function closeImageModal() {
document.getElementById("image-modal").classList.remove("open");
}

function prevImage() {
currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
document.getElementById("modal-image").src = currentImages[currentImageIndex];
}

function nextImage() {
currentImageIndex = (currentImageIndex + 1) % currentImages.length;
document.getElementById("modal-image").src = currentImages[currentImageIndex];
}