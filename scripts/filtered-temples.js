const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tampico Mexico Temple",
        location: "Tamaulipas, Mexico",
        dedicated: "2000, May, 20",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tampico-mexico/400x250/tampico-mexico-temple-lds-126692-wallpaper.jpg"
    },
    {
        templeName: "Atlanta Georgia Temple",
        location: "Georgia, United States",
        dedicated: "1983, June, 1-4",
        area: 34500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-temple-lds-811746-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, RM",
        dedicated: "2019, March, 10-12",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
    }
];

createTempleCards(temples);

// Old Temples

const oldTemplesLink = document.querySelector("#Old");

oldTemplesLink.addEventListener("click", () => {

    document.querySelector(".section-container").innerHTML = ""; // Clean the previos content (cards created)

    let templesBefore1900 = temples.filter(temple => {
        const yearDedicated = parseInt(temple.dedicated.split(',')[0]);
        return yearDedicated < 1900;
    });

    createTempleCards(templesBefore1900);

    const mainTitle = document.querySelector(".main-title");
    mainTitle.textContent = "Old Temples";

});

// New Temples

const newTemplesLink = document.querySelector("#New");

newTemplesLink.addEventListener("click", () => {

    document.querySelector(".section-container").innerHTML = ""; // Clean the previos content (cards created)

    let templesAfter2000 = temples.filter(temple => {
        const yearDedicated = parseInt(temple.dedicated.split(',')[0]);
        return yearDedicated > 2000;
    });

    createTempleCards(templesAfter2000);

    const mainTitle = document.querySelector(".main-title");
    mainTitle.textContent = "New Temples";
});

// All Temples

const allTemplesLink = document.querySelector("#Home");

allTemplesLink.addEventListener("click", () => {

    document.querySelector(".section-container").innerHTML = ""; // Clean the previos content (cards created)

    createTempleCards(temples);

    const mainTitle = document.querySelector(".main-title");
    mainTitle.textContent = "Temples";
});

// Small Temples

const smallTemplesLink = document.querySelector("#Small");

smallTemplesLink.addEventListener("click", () => {

    document.querySelector(".section-container").innerHTML = "";

    let smallTemples = temples.filter(temple => {
        const area = parseInt(temple.area);
        return area < 10000;
    });

    createTempleCards(smallTemples);

    const mainTitle = document.querySelector(".main-title");
    mainTitle.textContent = "Small Temples";
});

// Large Temples

const largeTemplesLink = document.querySelector("#Large");

largeTemplesLink.addEventListener("click", () => {

    document.querySelector(".section-container").innerHTML = "";

    let largeTemples = temples.filter(temple => {
        const area = parseInt(temple.area);
        return area > 90000;
    });

    createTempleCards(largeTemples);

    const mainTitle = document.querySelector(".main-title");
    mainTitle.textContent = "Large Temples";
});

// Create Temple Cards

function createTempleCards(filteredTemples) {

    const container = document.querySelector(".section-container");

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250" loading="lazy">`;

        container.appendChild(card);
    });
}

