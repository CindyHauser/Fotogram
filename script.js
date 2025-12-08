let images = [
"img1.jpg",
"img10.jpg",
"img11.jpg",
"img12.jpg",
"img2.jpg",
"img3.jpg",
"img4.jpg",
"img5.jpg",
"img6.jpg",
"img7.jpg",
"img8.jpg",
"img9.jpg",
];

function init() {
    let contentImages = document.getElementById("imageLoad");
        for (let index = 0; index < images.length; index++) {
            contentImages.innerHTML += imagesLoading(index);
        };
}

function  imagesLoading(index) {
    return `<img src=./imgs_fotogram/${images[index]}>`
}