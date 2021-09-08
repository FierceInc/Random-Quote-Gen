const colors = [
   "#189AB4",
   "#0000FF",
   "#050A30",
   "#F8D210",
   "#FA26A0",
   "#F51720",
   "#2FF3E0",
   "#CB4E47",
   "#190204",
   "#FF8300",
   "#FF4500",
   "#B7AC44",
   "#24E500",
   "#1D741B"
]
let quotesData;
let currentQuote = '',
currentAuthor = '';

async function fetchQuoteData() {
    let response = await fetch('https://type.fit/api/quotes')
    quotesData = await response.json()
    .catch(error => console.log(error))
}
const getQuote = () => {
    let i = Math.floor(Math.random() * quotesData.length);
    let randomQuote = quotesData[i];
    if(quotesData[i].author !== null) {
    currentAuthor = randomQuote.author; 
    currentQuote = randomQuote.text; 
    }
    else{
      return
    }

var hashtags = [
    "quotes",
    "100DaysOfCode",
    "javascript",
    "freeCodeCamp"
]
    $('#tweet-quote').attr(
        'href',
        `https://twitter.com/intent/tweet?hashtags=${hashtags}&related=freecodecamp&text=` +
          encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
      );
    
      $('#tumblr').attr(
        'href',
        'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
          encodeURIComponent(currentAuthor) +
          '&content=' +
          encodeURIComponent(currentQuote) +
          '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
      );
     $('.my-text').animate({ marginLeft: "1520px"}, 600, function () {
         $(this).animate({ margin: "0"}, 1000);
         $('#q').show()
         $('#q-r').show()
         $('#text').text(currentQuote)
     });

     $('.quote-author').animate({ opacity: 0 }, 500, function() {
        $(this).animate({ opacity: 1 }, 1000);
        $('#author').text("- " + currentAuthor);
      });
    

      var color = Math.floor(Math.random() * colors.length);
      $('html body').animate(
        {
          backgroundColor: colors[color],
          color: colors[color]
        },
        1000
      );
      $('#new-quote').animate(
        {
          backgroundColor: colors[color]
        },
        1000
      );
      $('#tumblr').animate(
        {
          backgroundColor: colors[color]
        },
        1000
      );
      $('#tweet-quote').animate(
        {
          backgroundColor: colors[color]
        },
        1000
      );
    
}




$(document).ready(function () {
    fetchQuoteData().then(() => {
      getQuote(); 

    });
  
    $('#new-quote').on('click', getQuote);
  });
  



