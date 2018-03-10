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
        a.attr("data-name", topics[i]); //data-attribute at movie index i
        a.text(topics[i]);
        $("#topics-view").append(a);
    }
}

$(".gif-topics").on("click", function()
{
    var videoGames = $(this).attr("data-name");
    var apiKey = "9a5h6VPUl9kDUeWtRsK0jgVqS9PUJNi3";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + videoGames + "&limit=10";
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

        for (var j = 0; j < results.length; j ++)
        {//dynamic-elements-solution
         var gameDiv = $("<div>");
         var p = $("<p>").text("Rating: " + results[j].rating);
         var gameImage = $("<img>");
         gameImage.attr("src", results[j].images.fixed_height.url);
         gameDiv.append(p);
         gameDiv.append(gameImage);
         $(".gifs-appear-here").prepend(gameDiv);
        }
    });
});
//make sure the gifs are non-animated when grabbed/appended
//when user clicks image, animate
//display the rating
//add a form to take values from user to add into topics array
//make a function that takes each topc and remakes the buttons on page
renderButtons();