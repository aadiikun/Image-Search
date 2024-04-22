const accessKey = "q0J3Sy2Ug3qRWYLARdPrBaycA9UdKnGw1GJLjkRVRW8trxDWcy5a3KwW";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;

    const url = `https://api.pexels.com/v1/search?query=birds&per_page=1`;

    const fetchOptions = {
        headers: {
            'Authorization': 'Bearer q0J3Sy2Ug3qRWYLARdPrBaycA9UdKnGw1GJLjkRVRW8trxDWcy5a3KwW'
        }
    }




    const response = await fetch(url, fetchOptions);
    const data = await response.json();

    console.log(data);



    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})