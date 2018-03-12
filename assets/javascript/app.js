//create variables 
 //ratinglang = &rating=G&lang=en
//create an array of strings as var = topic 
var topics = ["Fortnite", "Rocket League", "Brawlhalla", "Call of Duty", "Destiny", "Overwatch"];
//take the topics in the array and create buttons in HTML
        //***try using a loop that appends a button for each string in array */
    function renderButtons()
{       //deleting buttons prior to adding new ones so no repeat
        $("#topics-view").empty();

        for (var i =0; i < topics.length; i++)  
    {
        var a = $("<button>");
        a.addClass("btn btn-info btn-lg");
        a.addClass("gif-topics");
        a.attr("data-name", topics[i]); //data-attribute at game index i
        a.text(topics[i]);
        $("#game-button").append(a);
    }
}

$("#game-button").on("click", "button", function()
{
    videoGames = $(this).attr("data-name");
    console.log(videoGames);
    var apiKey = "9a5h6VPUl9kDUeWtRsK0jgVqS9PUJNi3";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=9a5h6VPUl9kDUeWtRsK0jgVqS9PUJNi3&q=" + videoGames + "&limit=10&offset=0&rating=G&lang=en";
    //AJAX request with queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .done(function(response)
    {
        console.log(queryURL);
        console.log(response);
        
        var results = response.data;

        for (var i = 0; i < results.length; i++)
        {//dynamic-elements-solution
         var gameDiv = $("<div>");
         var p = $("<p>").text("Rating: " + results[i].rating);
         var gameImage = $("<img>");
         
         gameImage.attr("src", results[i].images.fixed_width_still.url);
         gameImage.attr("data-state", "still");
         gameImage.attr("data-still", results[i].images.fixed_width_still.url);
         gameImage.attr("data-animate", results[i].images.fixed_width.url);

         gameDiv.append(p);
         gameDiv.append(gameImage);
         $("#gifs-appear-here").prepend(gameDiv);
         console.log(gameImage);
         console.log(p);
        }
    });
});
//make sure the gifs are non-animated when grabbed/appended
//when user clicks image, animate
//display the rating
//add a form to take values from user to add into topics array
//make a function that takes each topc and remakes the buttons on page
renderButtons();