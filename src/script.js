document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const articles = document.querySelectorAll("main section");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    articles.forEach(article => {
      const text = article.textContent.toLowerCase();
      if (text.includes(query)) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  });
});
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
