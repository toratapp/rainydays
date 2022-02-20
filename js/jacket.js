const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://teidsvag.com/rainydays-cms/wp-json/wc/store/products/" + id;
const h1 = document.querySelector("h1");
const breadcrumb = document.querySelector(".woman__jacket__breadcrumb");
const priceHtml = document.querySelector(".specific-product__price");
const shortDescriptionHtml = document.querySelector(".product-description");
const thumbnail1 = document.querySelector(".thumbnail1");
const thumbnail2 = document.querySelector(".thumbnail2");
const thumbnail3 = document.querySelector(".thumbnail3");
const mainImage = document.querySelector(".main-image");
const productInfoContainer = document.querySelector(".product-info-container");

async function getProduct() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        // newArrivalsContainer.innerHTML = "";

        const { id: productId, name: productTitle, images, alt, short_description, description } = results;
        document.title = `${productTitle} - Rainydays`;
        const plainDescription = short_description.replace(/<[^>]+>/g, '');
        document.querySelector('meta[name="description"]').content += `${plainDescription}`;
        breadcrumb.innerHTML = productTitle.toUpperCase();
        h1.innerHTML = productTitle;
        const price = results.prices.price.toString();
        priceHtml.innerHTML = `&#36; ${price}`;
        shortDescriptionHtml.innerHTML = `${plainDescription} <a href="#hovden__product-info" class="green-link">Read more &gt;</a>`;
        productInfoContainer.innerHTML = description;

        for(let i = 0; i < images.length; i++) {

        const featuredImage = images[i].src;
        thumbnail1.innerHTML = `<img src="${featuredImage}" alt="${alt}" />`
        thumbnail2.innerHTML = `<img src="${featuredImage}" alt="${alt}" />`
        thumbnail3.innerHTML = `<img src="${featuredImage}" alt="${alt}" />`
        mainImage.innerHTML = `<img src="${featuredImage}" alt="${alt}" />`

        }
    } catch(error) {
        console.warn(error);
        return shortDescriptionHtml.innerHTML = errorMessage("An error occured while fetching the products.");
    }
}
getProduct();
