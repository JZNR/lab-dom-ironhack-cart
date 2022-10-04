// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const getPrice = product.querySelector('.price span');
  const getQuantity = product.querySelector('.quantity input').value;
  const getSubtotal = product.querySelector('.subtotal');
  const price = parseInt(getPrice.innerText);
  const subtotal = price * parseInt(getQuantity);
  getSubtotal.innerText = '$' + subtotal;
  return subtotal;
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  let result = 0;
  const allProduct = document.getElementsByClassName('product');
  Array.prototype.forEach.call (allProduct, function (node) {
    for (i = 0; i < allProduct.length; i++ ) {
      return result += updateSubtotal(node);
    }
    return updateSubtotal(node);
} );
  
  // ITERATION 3
  const getTotal = document.getElementById('total-value');
  getTotal.innerText = `Total: $${result}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
