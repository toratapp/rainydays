const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://teidsvag.com/rainydays-cms/wp-json/wc/store/products/" + id;
const h1 = document.querySelector("h1");
const metaDescription = document.querySelector('meta[name="description"]').content;

async function getProduct() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        newArrivalsContainer.innerHTML = "";

        for(let i = 0; i < results.length; i++) {

        const price = results[i].prices.price.toString();
        const { id: productId, name: productTitle, images, alt, short_description: shortDescription, description } = results[i];

        for(let i = 0; i < images.length; i++) {

        const featuredImage = images[i].src;

        document.title = `${productTitle} - Rainydays`;
        metaDescription = shortDescription;
        console.log(metaDescription);

        newArrivalsContainer.innerHTML += `<div class="product"><a href="jacket.html?id=${productId}"><img src="${featuredImage}" alt="${alt}" class="product-box-shadow"/></a><a href="jacket.html?id=${productId}" class="strong">${productTitle}</a><p>&#36;${price}</p>`;
        }
        }
    } catch(error) {
        console.warn(error);
        return newArrivalsContainer.innerHTML = errorMessage("An error occured while fetching the products.");
    }
}
// getProduct();
