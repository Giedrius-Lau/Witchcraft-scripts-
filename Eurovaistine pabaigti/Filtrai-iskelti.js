console.log("prasideda");
setTimeout(() => {
  function insertBefore(element, container, firstChild) {
    container.insertBefore(element, firstChild);
  }

  selector = {
      productContainer: document.querySelectorAll('.pjax-products-container')[0],
      filterContainer: document.querySelectorAll('.filter-active')[0],
      productContainerFirstChild: document.querySelectorAll('.pjax-products-container h1')[0],
      filterTitle: document.querySelectorAll('.filter-active .filter-hdr')[0],
      filterListContainer: document.querySelectorAll('.filter-active .list-unstyled')[0],
      filterFirstListItem: document.querySelectorAll('.filter-active ul li')[0],
  }
  selector.filterTitle.innerHTML = "Pritaikyti filtrai:"

  insertBefore(selector.filterContainer, selector.productContainer, selector.productContainerFirstChild);
  insertBefore(selector.filterTitle, selector.filterListContainer, selector.filterFirstListItem)

  
}, 2000);
