// function that will return if the value is not null or undefined
const isNotNullOrUndefined = (value) => {
    return value !== null && value !== undefined && value !== 'undefined';
}

const Main = {

    // will be called when the user changes the rating
    ratingFormChange: () => {
        const rating = document.querySelectorAll('input[name="rating"]');
        const errorMsg = document.querySelector('.error');

        rating.forEach((element) => {
            element.addEventListener('change', () => {
                errorMsg.classList.add('hide');
            });
        });
    },

    // ill be called when the user submits a rating
    ratingFormSubmit: () => {
        const ratingForm = document.querySelector('.js-rating-form');

        ratingForm.addEventListener('submit', (event) => {
            event.preventDefault();
        
            const rating = document.querySelector('input[name="rating"]:checked');
            const errorMsg = document.querySelector('.error');
        
            if (isNotNullOrUndefined(rating)) {
                Main.ratingDataPassing(rating.value);
            } else {
                errorMsg.classList.remove('hide')
            }
        
        });
    },

    // will be called when the data was submit and transfer to the server
    ratingDataPassing: (value) => {

        // add function to the sumbit answer to server

        // Show thank you ui
        const ratingForm = document.querySelector('#ratingForm');
        const thankYou = document.querySelector('#thankYou');
        const score = thankYou.querySelector('.meta .number');

        ratingForm.classList.add('hide');
        score.innerHTML = value;
        thankYou.classList.remove('hide');
    },

    init: () => {
        Main.ratingFormChange();
        Main.ratingFormSubmit();
    }
}

// run function when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    Main.init();
});