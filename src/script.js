//Create drop-item, drop-zone and empty let for 
//current drop-item
const drop_items = document.querySelectorAll(".drop-item");
const drop_zone = document.querySelector(".drop-zone");
let dragged = null;

//Saves current drop-item in dragged
drop_items.forEach(e => {
    e.addEventListener("dragstart", (ev) => {
        dragged = ev.currentTarget;
    });
}); 
drop_zone.addEventListener("dragover", (ev) => {
    ev.preventDefault();
});
//If drop-item is in drop-zone remove title, remove 
//drop-item in original node and add it in drop-zone
drop_zone.addEventListener("drop", (ev) => {
    ev.preventDefault();
    if (ev.currentTarget === drop_zone) {
        const drop_zone_title = document.querySelector(".drop-zone__title");
        drop_zone_title.style.display = "none";
        dragged.parentNode.removeChild(dragged);
        ev.currentTarget.appendChild(dragged);
        
    }
});



// //SVG fallback to PNG. Not working, using <picture> instead
// const svgFallback = () => {
  
// //   if (!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect){
//     if(true){
//         const images = document.querySelectorAll("img");
//         console.log(images[0].getAttribute());
//         images.forEach(image => {
//         if(image.getAttribute("src").match(/svgz?$/)){
//             image.setAttribute("src", "png");
//         };
//     });   
//   }
// }

// window.addEventListener("DOMContentLoaded", () => {
//     svgFallback();
// });
  