const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        likes: 245,
        shares: 89
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        likes: 189,
        shares: 45
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        likes: 320,
        shares: 120
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        likes: 178,
        shares: 67
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
        likes: 210,
        shares: 55
    },
        {
        text: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
        likes: 213,
        shares: 83
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        likes: 187,
        shares: 72
    },
    {
        text: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis",
        likes: 165,
        shares: 59
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
        likes: 201,
        shares: 78
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        likes: 146,
        shares: 51
    }

  
  
];

// DOM elements
const quoteList = document.getElementById('quote-list');
const searchInput = document.getElementById('search');

// Display quotes
function displayQuotes(quotesArray) {
    quoteList.innerHTML = '';
    
    quotesArray.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
            <p class="quote-text">"${quote.text}"</p>
            <p class="quote-author">- ${quote.author}</p>
            <div class="quote-stats">
                <span><i class="like-icon">👍</i> ${quote.likes} likes</span>
                <span><i class="share-icon">↗️</i> ${quote.shares} shares</span>
            </div>
        `;
        quoteList.appendChild(quoteCard);
    });
}

// Filter quotes by likes or shares
function filterQuotes(type) {
    const sortedQuotes = [...quotes].sort((a, b) => b[type] - a[type]);
    displayQuotes(sortedQuotes);
}

// Search quotes
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredQuotes = quotes.filter(quote => 
        quote.text.toLowerCase().includes(searchTerm) || 
        quote.author.toLowerCase().includes(searchTerm)
    );
    displayQuotes(filteredQuotes);
});

// Initial display (sorted by likes by default)
filterQuotes('likes');