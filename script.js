document.querySelectorAll('.box input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', updateTotalPrice);
  });
  
  function updateTotalPrice() {
    let total = 0;
  
    // Loop through all selected boxes
    document.querySelectorAll('.box').forEach((box) => {
      const radio = box.querySelector('input[type="radio"]');
      if (radio.checked) {
        const price = parseFloat(box.getAttribute('data-price'));
        total += price;
      }
    });
  
    // Update the total price
    document.getElementById('total-price').innerText = `Total: $${total.toFixed(2)} USD`;
  }
  