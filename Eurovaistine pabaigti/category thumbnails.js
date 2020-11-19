console.log("prasideda");
setTimeout(() => {
    function insertBefore(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode);
    }
    selector = {
        container: document.querySelector(".content-full"),
        topBanners: document.querySelector(".page-top-banners"),
    };

    var faceCategory = document.createElement("div");
    faceCategory.innerHTML =
        "<a href='/odos-ir-plauku-kosmetika/veido-odos-prieziura' class='category-item'><img src='https://svgshare.com/i/PNW.svg'></img><span>Veido priežiūra</span></a>";
    var hairCategory = document.createElement("div");
    hairCategory.innerHTML =
        "<a href='/odos-ir-plauku-kosmetika/plauku-prieziura' class='category-item'><img src='https://svgshare.com/i/PPf.svg'></img><span>Plaukų priežiūra</span></a>";
    var bodyCategory = document.createElement("div");
    bodyCategory.innerHTML =
        "<a href='/odos-ir-plauku-kosmetika/kuno-odos-prieziura' class='category-item'><img src='https://svgshare.com/i/PN4.svg'></img><span>Kūno priežiūra</span></a>";
    var menCategory = document.createElement("div");
    menCategory.innerHTML =
        "<a href='/odos-ir-plauku-kosmetika/kosmetika-vyrams' class='category-item'><img src='https://svgshare.com/i/PPz.svg'></img><span>Kosmetika vyrams</span></a>";
    var spaCategory = document.createElement("div");
    spaCategory.innerHTML =
        "<a href='/odos-ir-plauku-kosmetika/namu-spa' class='category-item'><img src='https://svgshare.com/i/PN_.svg'></img><span>Namų SPA</span></a>";

    var secondaryCtaContainer = document.createElement("div");
    secondaryCtaContainer.setAttribute("class", "category-container");
    insertBefore(secondaryCtaContainer, selector.topBanners);

    document.querySelector(".category-container").appendChild(faceCategory);
    document.querySelector(".category-container").appendChild(hairCategory);
    document.querySelector(".category-container").appendChild(bodyCategory);
    document.querySelector(".category-container").appendChild(menCategory);
    document.querySelector(".category-container").appendChild(spaCategory);
}, 3000);


/* .page-top-banners {
    display: none;
}

.category-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}

.category-container div {
    width: 19%;
    box-shadow: 0 2px 5px rgb(0 0 0 / 18%);
    height: 60px;
    border-radius: 3px;
    transition: 0.3s ease;
}

.category-container div:hover {
    box-shadow: 0 2px 5px rgb(0 0 0 / 30%);
}

.category-container div a img {
    margin-right: 10px;
    width: 30px;
    max-height: 28px;
}
.category-container div a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
}

.category-container div a {
    text-decoration: none;
}

.category-container div a span {
    color: #9b9b9b;
}

.subcats {
    display: none;
} */