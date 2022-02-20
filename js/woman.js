const url = "https://teidsvag.com/rainydays-cms/wp-json/wc/store/products?category=16";
const allJacketsContainer = document.querySelector(".all-jackets-container");

async function getProducts() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        allJacketsContainer.innerHTML = "";

        for(let i = 0; i < results.length; i++) {

        const price = results[i].prices.price.toString();
        const { id: productId, name: productTitle, images, alt } = results[i];

        for(let i = 0; i < images.length; i++) {

        const featuredImage = images[i].src;

        allJacketsContainer.innerHTML += `<div class="product"><a href="jacket.html?id=${productId}"><img src="${featuredImage}" alt="${alt}" class="product-box-shadow"/></a><a href="jacket.html?id=${productId}" class="strong">${productTitle}</a><p>&#36;${price}</p>`;
        }
        }
    } catch(error) {
        console.warn(error);
        return allJacketsContainer.innerHTML = errorMessage("An error occured while fetching the products.");
    }
}
getProducts();
