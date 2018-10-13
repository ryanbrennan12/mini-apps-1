///create a div
///create a row
///render the row
document.querySelectorAll('.cell')
.forEach(e => e.addEventListener('click', () => {
  console.log('clicked')
}))





// document.querySelectorAll('.cell')
// .forEach(e => e.addEventListener("click", function() {
//     // Here, `this` refers to the element the event was hooked on
//     console.log("clicked")
// }));