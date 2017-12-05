var topics = ["Yeti", "Chupacabra", "Sasquatch", "Vampire", "Werewolf", "Loch Ness Monster", "Jersey Devil", "Minotaur", "Unicorn", "Thunderbird"];
var formData;
//AJAX Query to pull the gifs from GIPHY.
$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.data;
            console.log(response.data);

            for (var i = 0; i < 11; i++) {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("#gifs-here").prepend(gifDiv);
            }
        });
});
//Attempting to change the state of the GIFs
$("document").ready()
$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
// Attempting to push new value into Topics array 

function getData() {
	formData = $("#theform").val
	alert(this.value);
};

var submitListen = document.getElementById("submitbutton");
submitListen.addEventListener('click', getData, false);

