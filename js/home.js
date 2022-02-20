const url = "https://teidsvag.com/rainydays-cms/wp-json/";
const newArrivalsContainer = document.querySelector(".new-arrivals");

async function getNewArrivals() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);


        // breweriesContainer.innerHTML = "";

        // for(let i = 0; i < results.length; i++) {

        //     if(i === 18) {
        //         break;
        //     }
    
        // const breweryId = results[i].id;
        // const breweryName = results[i].name;
        // const country = results[i].country;
        // const state = results[i].state;

        // breweriesContainer.innerHTML += `<a href="details.html?id=${breweryId}" class="brewery"><h2>Name: ${breweryName}</h2><p>Country: ${country}</p><p>State: ${state}</p></a>`;
        // }

    } catch(error) {
        console.warn(error);
        // return productsContainer.innerHTML = errorMessage("An error occured while fetching the products.");
    }
}
getNewArrivals();
