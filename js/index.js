// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const getPrice = product.querySelector('.price span');
  const getQuantity = product.querySelector('.quantity input').value;
  const getSubtotal = product.querySelector('.subtotal');
  const price = getPrice.innerText;
  const subtotal = price * getQuantity;
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
  [...allProduct].forEach(element => {
    for (i = 0; i < allProduct.length; i++) {
      return (result += updateSubtotal(element));
      }
     return updateSubtotal(element);
  })

  // ITERATION 3
  const getTotal = document.getElementById('total-value');
  getTotal.innerText = `Total: $${result}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  console.log("hello")
  const getName = document.querySelector('.new-product-name input').value;
  const getQuantity = document.querySelector('.new-product-price input').value;

  const newProduct = document.createElement("tr");
  newProduct.classList.add('product');
  newProduct.innerHTML = `
          <td class="name">
            <span>${getName}</span>
          </td>
          <td class="price">$<span>${getQuantity}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        `
    document.querySelector('tbody').append(newProduct);
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const getRemoveButtons = document.querySelectorAll('.btn-remove');
  [...getRemoveButtons].forEach((element) => {
    element.addEventListener('click', removeProduct);
  });
  
  const createButton = document.getElementById("create");
  createButton.addEventListener('click', createProduct);
});
