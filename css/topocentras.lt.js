setTimeout(() => {
    var screenWidth = screen.width;
    var searchBlock, searchInput;

    if (screenWidth > 1023) {
        searchBlock = document.querySelector('.HeaderContent-searchContainer-2Ip');
        searchInput = document.querySelector('.HeaderContent-searchInput-3Ks');
    } else {
        searchBlock = document.querySelector('.searchBar-searchInputWrapper-3Tg');
        searchInput = document.querySelector('.searchBar-input-3MY');
    }

    var newDropdown = document.createElement('div');
    newDropdown.setAttribute('class', 'search-field');
    newDropdown.innerHTML = `
        <div class="shadow-click"></div>
        <div><img src="https://semexit.s3-eu-west-1.amazonaws.com/topocentras/star.png" alt="star" /> <strong>TOP PAIEŠKOS</strong></div>
        <a href="/catalogsearch/result/?q=dulkių%20siurblys%20robotas"><span>dulkių siurbliai robotai</span><img src="https://semexit.s3-eu-west-1.amazonaws.com/topocentras/long-arrow-up.png" alt="arrow-right"></a>
        <a href="/catalogsearch/result/?q=sony%20playstation"><span>sony playstation</span><img src="https://semexit.s3-eu-west-1.amazonaws.com/topocentras/long-arrow-up.png" alt="arrow-right"></a>
        <a href="/catalogsearch/result/?q=elektrinis%20paspirtukas"><span>elektrinis paspirtukas</span><img src="https://semexit.s3-eu-west-1.amazonaws.com/topocentras/long-arrow-up.png" alt="arrow-right"></a>
        <a href="/catalogsearch/result/?q=ausin%C4%97s"><span>ausinės</span><img src="https://semexit.s3-eu-west-1.amazonaws.com/topocentras/long-arrow-up.png" alt="arrow-right"></a>
        <a href="/catalogsearch/result/?q=plauk%C5%B3%20kirpimo%20ma%C5%A1in%C4%97l%C4%97"><span>plaukų kirpimo mašinėlė</span><img src="https://semexit.s3-eu-west-1.amazonaws.com/topocentras/long-arrow-up.png" alt="arrow-right"></a>
        <a href="/catalogsearch/result/?q=kavos%20aparatai"><span>kavos aparatai</span><img src="https://semexit.s3-eu-west-1.amazonaws.com/topocentras/long-arrow-up.png" alt="arrow-right"></a>
        <a href="/catalogsearch/result/?q=kavos%20kapsules"><span>kavos kapsulės</span><img src="https://semexit.s3-eu-west-1.amazonaws.com/topocentras/long-arrow-up.png" alt="arrow-right"></a>
    `.trim();
    searchBlock.appendChild(newDropdown);

    searchInput.addEventListener('click', function () {
        if (!document.querySelector('.search-field').classList.contains('displayed')) {
            document.querySelector('.search-field').classList.add('displayed');
        }
    });

    searchInput.addEventListener('change', function () {
        if (document.querySelector('.search-field').classList.contains('displayed')) {
            document.querySelector('.search-field').classList.remove('displayed');
        }
    });

    setInterval(function () {
        if (document.querySelector('.Autocomplete-suggestions-2AZ') && document.querySelector('.search-field').classList.contains('displayed')) {
            document.querySelector('.search-field').classList.remove('displayed');
        }
    }, 300);

    document.querySelector('.shadow-click').addEventListener('click', function () {
        if (document.querySelector('.search-field').classList.contains('displayed')) {
            document.querySelector('.search-field').classList.remove('displayed');
        }
    });
}, 1000);
