// https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8

var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";
var searchBar = document.getElementById("search-input");
var searchSuggestions = document.getElementById("search-suggestions");

searchBar.addEventListener("input", function(){
    // this function 
    // -> gets the data what user has typed 
    // -> put this data as query 
    // -> make an API call 
    // -> append to the search suggestions.
    var query = searchBar.value.trim();
    //console.log(query); to check whether query is being processed or not.
    fetchSuggestions(query);

})

function fetchSuggestions(query){
    var full_API = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(full_API)
    .then(function(res){
        return res.json();   // converting the ata into json 
      })
    .then(function(data){
        //console.log(data);
        showsuggestions(data); 
    })
    .catch(function(err){
        console.log("Error : "+err);
    })
}

function showsuggestions(data){
    var suggestions = data.results;
    if(data.count === 0){
        searchSuggestions.innerHTML = "<div> No Matching results </div>";
    }
    else{
        var htmlstr = "";
        for(var i=0; i<suggestions.length; i++){
            htmlstr += "<div><span class='item'>" + suggestions[i].text + "</span></div>";
            searchSuggestions.innerHTML = htmlstr; 
        }
    }
}