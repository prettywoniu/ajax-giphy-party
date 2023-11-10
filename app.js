console.log("Let's get this party started!");

const searchInput = $('#search-term');

/* use ajax result to add gif */
function addGif (res) {
    console.log(res);
    const imgIdx = Math.floor(Math.random() * res.data.length);
    const newImg = $('<img>', {src: res.data[imgIdx].images.original.url});
    //console.log(imgIdx, newImg);
    $('#gif-area').append($(newImg));
}

/* handle form submission: make ajax call and clear search box */
$('form').on('submit', async function(e) {
    e.preventDefault();

    const searchTerm = searchInput.val(); 
    const response = await axios.get('http://api.giphy.com/v1/gifs/search',{
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });

    //console.log(response);
    addGif(response.data);
    
    $('#search-term').val('');
});

/* remove all gifs */
// it works, but still has an error in Console shows:
// Uncaught (in promise) TypeError: ...
$('#remove').on('click', function() {
    $('#gif-area').empty();
});

