document.addEventListener('DOMContentLoaded', function () {
    const addButtons = document.querySelectorAll('.add-btn');
    const cartList = document.querySelector('.cart-list');
    const cartTotal = document.querySelector('.cart-total');
    const cartCount = document.querySelector('.cart-count');
    let totalValue = 0;

    addButtons.forEach(addButton => {
        addButton.addEventListener('click', function () {
            const product = addButton.closest('.product');
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - R$${productPrice.toFixed(2)}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.classList.add('remove-btn');

            cartItem.appendChild(removeButton);
            cartList.appendChild(cartItem);

            totalValue += productPrice;
            updateCartTotal();
            updateCartCount();

            removeButton.addEventListener('click', function () {
                cartList.removeChild(cartItem);
                totalValue -= productPrice;
                updateCartTotal();
                updateCartCount();
            });
        });
    });

    function updateCartTotal() {
        cartTotal.textContent = totalValue.toFixed(2);
    }

    function updateCartCount() {
        const cartItemCount = cartList.children.length;
        cartCount.textContent = cartItemCount;
    }
});

