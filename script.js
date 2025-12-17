let images = [
    "buntes-haus.jpg",
    "schoener-park.jpg",
    "urlaubsdrink.jpg",
    "wildnis.jpg",
    "harz-escape.jpg",
    "kind-an-der-wand.jpg",
    "brauerei.jpg",
    "genusswerkstatt.jpg",
    "miniaturmodell.jpg",
    "strand.jpg",
    "gute-aussicht.jpg",
    "baum-im-hof.jpg",
];

/**lädt alle Bilder auf die Website beim Öffnen dieser*/
function init() {
    let contentImages = document.getElementById("imageLoad");
    for (let index = 0; index < images.length; index++) {
        contentImages.innerHTML += imagesLoading(index);
    };
}

function imagesLoading(index) {
    return `<a href="#" onclick="openDialog(${index})"><img src="./imgs_fotogram/${images[index]}" alt="Urlaubsbild"></a>`;
}

const DIALOG_REF = document.getElementById("pictureDialog");
const DIALOG_FOOTER_REF = document.getElementById("dialogFooter");

function openDialog(index) {
    DIALOG_REF.showModal();
    showPictures(index);
    DIALOG_FOOTER_REF.innerHTML = footerDialog(index);
}

function stopBubbling(event) {
    event.stopPropagation();
}

function closeDialog() {
    DIALOG_REF.close();
}

function showPictures(index) {
    let showHeadingOfPicture = document.getElementById("pictureHeading");
    let showPictureRef = document.getElementById('dialogMain');
    showPictureRef.innerHTML = showSamePic(index);
    showHeadingOfPicture.innerHTML = images[index];
}

function showSamePic(index) {
    return `<img src="./imgs_fotogram/${images[index]}" alt="Urlaubsbild">`
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

/**zum Benutzen der Pfeiltasten auf der Tastatur*/
function pressArrow (event) {
    const SPAN_INDEX = document.getElementById('dialogSpanToGetId');
    if (event.key === "ArrowLeft") {
        index = SPAN_INDEX.dataset.arrows;
        buttonLeft(index);
    } if (event.key === "ArrowRight") {
        index = SPAN_INDEX.dataset.arrows;
        buttonRight(index); 
    }
}

function footerDialog(index) {
    return `<button onclick="buttonLeft(${index})" class="dialog_button"><span class="arrow left"></span></button>
    <span id="dialogSpanToGetId" data-arrows=${index}>${index + 1}/${images.length}</span>
    <button onclick="buttonRight(${index})" class="dialog_button"><span class="arrow right"></span></button>
    `
}