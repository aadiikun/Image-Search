const accessKey = "q0J3Sy2Ug3qRWYLARdPrBaycA9UdKnGw1GJLjkRVRW8trxDWcy5a3KwW";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;

    const url = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12&page=${page}`;

    const fetchOptions = {
        headers: {
            'Authorization': 'q0J3Sy2Ug3qRWYLARdPrBaycA9UdKnGw1GJLjkRVRW8trxDWcy5a3KwW'
        }
    }

    const response = await fetch(url, fetchOptions);
    const data = await response.json();

    console.log(data);


    if (page === 1) {
        searchResult.innerHTML = "";
    }
    const photos = data.photos;

    photos.map((result) => {
        const image = document.createElement("img");
        image.src = result.src.original;
        const imageLink = document.createElement("a");
        imageLink.href = result.url;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";

}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})