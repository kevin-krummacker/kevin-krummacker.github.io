
// Hamburger Menü

const button = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (button && nav) {

    button.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

}


// Bilder aller Projekte

const galleries = {

    visitor: [

        "images/Visitor/visitor1.jpg",
        "images/Visitor/visitor2.jpg",
        "images/Visitor/visitor3.jpg",
        "images/Visitor/visitor4.jpg",
        "images/Visitor/visitor5.jpg",
        "images/Visitor/visitor6.jpg"

    ],

    picar: [

        "images/PiCar/PiCar1.jpg",
        "images/PiCar/PiCar2.jpg",
        "images/PiCar/PiCar3.jpg"

    ],

    website: [

        "images/Website/website1.jpg",
        "images/Website/website2.jpg",
        "images/Website/website3.jpg",
        "images/Website/website4.jpg",
        "images/Website/website5.jpg"

    ],

    adventure: [

        "images/adventure/adventure1.jpg"

    ]

};


// Alle Galerien initialisieren

document.querySelectorAll(".project-gallery").forEach(gallery => {

    const galleryName = gallery.dataset.gallery;

    const images = galleries[galleryName];

    if (!images) return;

    let currentImage = 0;

    const image = gallery.querySelector(".gallery-image");
    const counter = gallery.querySelector(".gallery-counter");
    const previousButton = gallery.querySelector(".gallery-prev");
    const nextButton = gallery.querySelector(".gallery-next");



    function updateGallery() {

        image.src = images[currentImage];

        counter.textContent =
            (currentImage + 1) + " / " + images.length;

    }



    nextButton.addEventListener("click", () => {

        currentImage++;

        if (currentImage >= images.length) {

            currentImage = 0;

        }

        updateGallery();

    });



    previousButton.addEventListener("click", () => {

        currentImage--;

        if (currentImage < 0) {

            currentImage = images.length - 1;

        }

        updateGallery();

    });


    updateGallery();

});

const timelineDates = document.querySelectorAll(".timeline-item");


timelineDates.forEach(date => {

    date.addEventListener("click", () => {

        const item = date.closest(".timeline-item");

        item.classList.toggle("active");

    });

});


// Projektfilter

const filterButtons = document.querySelectorAll(".project-filter button");
const projects = document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        // aktiven Button setzen

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Projekte filtern

        projects.forEach(project => {

            const tags = project.dataset.tags;


            if (filter === "all" || tags.includes(filter)) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});