// import React from "react";
// import Unsplash, { toJson } from "unsplash-js";

// const API_KEY = "K0SxPXMzJfgTYEaUk6gV6XVQd2Qc3yrWyyvlxALkHnk";
// const unsplash = new Unsplash({ accessKey: API_KEY });
// unsplash.photos
//   .getRandomPhoto({ username: "naoufal" })
//   .then(toJson)
//   .then((json) => {
//     console.log(json.links.download);
//     document.body.style.background = `url(${json.links.download})`;
//   });
//   export default unsplash;

// const numItemsToGenerate = 1; //how many gallery items you want on the screen
// const numImagesAvailable = 100; //how many total images are in the collection you are pulling from
// const imageWidth = 1920; //your desired image width in pixels
// const imageHeight = 1080; //desired image height in pixels
// const collectionID = 1163637; //the collection ID from the original url
// export default function renderGalleryItem(randomNumber) {
//   fetch(
//     `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`
//   ).then((response) => {
//     let galleryItem = document.createElement("div");
//     galleryItem.classList.add("gallery-item");
//     galleryItem.innerHTML = `
//       <img class="gallery-image" src="${response.url}" alt="gallery image"/>
//     `;
//     document.body.appendChild(galleryItem);
//   });
// }
// for (let i = 0; i < numItemsToGenerate; i++) {
//   let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
//   renderGalleryItem(randomImageIndex);
// }
