const params = new URLSearchParams(window.location.search);
const item = params.get('item');
const price = params.get('price');

if (item && price) {
  document.getElementById('item-name').textContent = item;
  document.getElementById('item-price').textContent = 'Price: ₦' + price;
}

document.getElementById('buy-btn')?.addEventListener('click', () => {
  document.getElementById('message').textContent = 'You just bought this hair!';
  document.getElementById('message').style.color = 'green';
});

document.getElementById('cancel-btn')?.addEventListener('click', () => {
  document.getElementById('message').textContent = 'Order cancelled.';
  document.getElementById('message').style.color = 'red';
});