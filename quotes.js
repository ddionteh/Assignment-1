var quotes = [
    {
        text: '"The only way to deal with this life meaningfully is to find our passion, pursue it relentlessly, and accept the absurdity of the universe with a smile."',
        author: 'Albert Camus',
        categories: ['Absurdism'],
        image: 'images/albert-camus.jpg' 
    },
    { 
        text: '"In the midst of winter, I found there was, within me, an invincible summer."',
        author: 'Albert Camus',
        categories: ['Absurdism'],
        image: 'images/albert-camus.jpg' 
    },
    {
        text: '"Existence precedes essence. Man is nothing at birth and throughout his life he is no more than the sum of his past commitments."',
        author: 'Jean-Paul Sartre',
        categories: ['Existentialism'],
        image: 'images/jean-paul-sartre.jpeg' 
    },
    {
        text: '"Freedom is what you do with what\'s been done to you."',
        author: 'Jean-Paul Sartre',
        categories: ['Existentialism'],
        image: 'images/jean-paul-sartre.jpeg' 
    },
    {
        text: '"The best index to a person\'s character is how he treats people who can\'t do him any good, and how he treats people who can\'t fight back."',
        author: 'Abigail Van Buren',
        categories: ['Ethics'],
        image: 'images/abigail-van-buren.jpeg' 
    },
    {
        text: '"The first step in the evolution of ethics is a sense of solidarity with other human beings."',
        author: 'Albert Schweitzer',
        categories: ['Ethics'],
        image: 'images/albert-schweitzer.jpeg'   
    },
    {
        text: '"Life is what happens when you\'re busy making other plans."',
        author: 'Allen Saunders',
        categories: ['Life'],
        image: 'images/allen-saunders.jpeg'  
    },
    {
        text: '"In three words I can sum up everything I\'ve learned about life: it goes on."',
        author: 'Robert Frost',
        categories: ['Life'],
        image:'images/robert-frost.jpeg' 
    },
    {
        text: '"The only true wisdom is in knowing you know nothing."',
        author: 'Socrates',
        categories: ['Knowledge'],
        image: 'images/socrates.jpeg' 
    },
    {
        text: '"Knowledge is power, but enthusiasm pulls the switch."',
        author: 'Ivern ball',
        categories: ['Knowledge'],
        image: 'images/no-image.png' 
    },
]; 

var selectedCategories = [];

function toggleCategory(category) {
    // Get all category elements
    var categories = document.querySelectorAll('.category');

    var index = selectedCategories.indexOf(category);

    // Loop through each category
    categories.forEach(function(categoryElement) {
      // If this is the clicked category, toggle the 'selected' class
      if (categoryElement.textContent === category) {
        categoryElement.classList.toggle('selected');
        if (index > -1) {
            selectedCategories.splice(index, 1);
        } else {
            selectedCategories.push(category);
        }
        filterQuotes();
      }
    });
}
function filterQuotes() {
    var quotesDiv = document.querySelector('.quotes');
    quotesDiv.innerHTML = '';
    quotes.forEach(function(quote, index) {
        // If no categories are selected, or if the quote has any of the selected categories, show it.
        if (selectedCategories.length === 0 || selectedCategories.some(function(category) {
            return quote.categories.includes(category);
        })) {
            var div = document.createElement('div');
            div.className = 'quote-card';
            div.innerHTML = `
                <img src="${quote.image}" class="quote-image">
                <p class="quote-text">${quote.text}</p>
                <p class="quote-author">${quote.author}</p>
                <p class="quote-categories">${quote.categories.join(', ')}</p>
                <form class="comment-form">
                    <input type="text" placeholder="Add a comment">
                    <button type="submit">Comment</button>
                </form>
                <div class="comments"></div>
            `;
            quotesDiv.appendChild(div); // Append the quote card to the quotesDiv

            // Get the comments form and comments div
            var commentsForm = div.querySelector('.comment-form');
            var commentsDiv = div.querySelector('.comments');

            // Load the comments from local storage
            var comments = JSON.parse(localStorage.getItem('comments' + index)) || [];
            comments.forEach(function(comment) {
                var commentElement = document.createElement('p');
                commentElement.textContent = comment;
                commentsDiv.appendChild(commentElement);
            });

            // Handle the comments form submit event
            commentsForm.addEventListener('submit', function(event) {
                event.preventDefault();

                // Get the comment text
                var comment = event.target.querySelector('input').value;

                // Add the comment to the comments array
                comments.push(comment);

                // Save the comments to local storage
                localStorage.setItem('comments' + index, JSON.stringify(comments));

                // Add the comment to the comments div
                var commentElement = document.createElement('p');
                commentElement.textContent = localStorage.getItem('username') + ': ' + comment;
                commentsDiv.appendChild(commentElement);

                // Clear the input field
                event.target.querySelector('input').value = '';
            });
        }
    });
}




// Get the quotes section from the DOM
var quotesSection = document.querySelector('.quotes');

// Loop through each quote in the quotes array
quotes.forEach(function(quote, index) {
    // Create a new quote card
    var quoteCard = document.createElement('div');
    quoteCard.className = 'quote-card';

    // Create a new quote card
    var quoteCard = document.createElement('div');
    quoteCard.className = 'quote-card';

    // Create the quote image
    var quoteImage = document.createElement('div');
    quoteImage.className = 'quote-image';
    quoteImage.style.backgroundImage = 'url('+ quote.image +')';
    quoteCard.appendChild(quoteImage);

    // Create the quote text
    var quoteText = document.createElement('div');
    quoteText.className = 'quote-text';
    quoteText.textContent = quote.text;
    quoteCard.appendChild(quoteText);

    // Create the quote author
    var quoteAuthor = document.createElement('div');
    quoteAuthor.className = 'quote-author';
    quoteAuthor.textContent = quote.author;
    quoteCard.appendChild(quoteAuthor);

    // Create the quote categories
    var quoteCategories = document.createElement('div');
    quoteCategories.className = 'quote-categories';
    quoteCategories.textContent = quote.categories.join(', ');
    quoteCard.appendChild(quoteCategories);
    

    // Create the comments form
    var commentsForm = document.createElement('form');
    commentsForm.innerHTML = `
        <input type="text" placeholder="Add a comment">
        <button type="submit">Comment</button>
    `;
    quoteCard.appendChild(commentsForm);

    // Create the comments div
    var commentsDiv = document.createElement('div');
    commentsDiv.className = 'comments';
    quoteCard.appendChild(commentsDiv);

    // Load the comments from local storage
    var comments = JSON.parse(localStorage.getItem('comments' + index)) || [];
    comments.forEach(function(comment) {
        var commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsDiv.appendChild(commentElement);
    });

    // Handle the comments form submit event
    commentsForm.addEventListener('submit', function(event) {
        event.preventDefault();

    // Get the comment text
    var comment = event.target.querySelector('input').value;

    // Add the comment to the comments array
    comments.push(comment);

    // Save the comments to local storage
    localStorage.setItem('comments' + index, JSON.stringify(comments));

    // Add the comment to the comments div
    var commentElement = document.createElement('p');
    commentElement.textContent = localStorage.getItem('username') + ': ' + comment;
    commentsDiv.appendChild(commentElement);

    // Clear the input field
    event.target.querySelector('input').value = '';
    });

    // Add the quote card to the quotes section
    quotesSection.appendChild(quoteCard);
});

