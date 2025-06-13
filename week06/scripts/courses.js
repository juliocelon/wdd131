

// FORM COURSES

const products = [
    {
        name: "Basic"
    },
    {
        name: "Intermediate"
    },
    {
        name: "Perfectionament"
    },
    {
        name: "Conversation"
    },
    {
        name: "TOEFL Preparation"
    },
    {
        name: "Business English"
    }
];


const selectElement = document.getElementById('course');

products.forEach(product => {

    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;

    selectElement.appendChild(option);
});
