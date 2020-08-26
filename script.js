/**
 update cart counter when user add item to cart
 */
 let addToCartBtn = document.querySelector('.btn-cart');
 let cartCounter = document.querySelector('.cart-counter')

 addToCartBtn.addEventListener('click', () => {
  cartCounter.textContent = parseInt(cartCounter.textContent) + 1;
 });
