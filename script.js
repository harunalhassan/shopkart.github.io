/* Product filtering */
const categories = document.querySelectorAll('.category');
const products = document.querySelectorAll('.product');

categories.forEach(category => {
  category.addEventListener('click', () => {
    const categoryValue = category.getAttribute('data-category');

    products.forEach(product => {
      if (product.getAttribute('data-category') ===
