// add all the elements inside modal which you want to make focusable
const  focusableElements =
    'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector('#js-cart-drawer'); // select the modal by it's id

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


console.log(focusableContent)
console.log(firstFocusableElement)
console.log(lastFocusableElement)


document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

console.log(document.activeElement)


  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination


    if (document.activeElement === firstFocusableElement) {
        console.log('document.activeElement === firstFocusableElement')
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        console.log('ocument.activeElement === lastFocusableElement')

      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();