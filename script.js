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

function imagesLoading(index) {
    return `<a href="#" onclick="openDialog(${index})"><img src="./imgs_fotogram/${images[index]}"></a>`;
}

// function pressEnterToOpen (event, index) {
//         if (event.key === 'Enter') {
//             console.log(event.key);
//             console.log(index);
            
//             openDialog(index);
//     }
// }

const dialogRef = document.getElementById("pictureDialog");
const dialogFooterRef = document.getElementById("dialogFooter");

function openDialog(index) {
    dialogRef.showModal();
    showPictures(index);
    dialogFooterRef.innerHTML = footerDialog(index);
}

function stopBubbling(event) {
    event.stopPropagation();
}

function closeDialog() {
    dialogRef.close();
}

function showPictures(index) {
    let showHeadingOfPicture = document.getElementById("pictureHeading");
    let showPictureRef = document.getElementById('dialogMain');
    showPictureRef.innerHTML = showSamePic(index);
    showHeadingOfPicture.innerHTML = images[index];
}

function showSamePic(index) {
    return `<img src="./imgs_fotogram/${images[index]}">`
}

function buttonLeft(index) {
    index--;
    if (index >= 0) {
        openDialog(index);
    } else {
        index = images.length - 1;
        openDialog(index);
    }
}

function buttonRight(index) {
    index++;
    if (index < images.length) {
        openDialog(index);
    } else {
        index = 0;
        openDialog(index);
    }
}

function footerDialog(index) {
    return `<button onclick="buttonLeft(${index})" class="dialog_button"><span class="arrow left"></span></button>
    <span>${index + 1}/${images.length}</span>
    <button onclick="buttonRight(${index})" class="dialog_button"><span class="arrow right"></span></button>
    `
}