$(document).ready(function () {
    const topics = {
        "Primary 6": ["Addition & Subtraction", "Basic Fractions", "Shapes"],
        "Primary 7": ["Multiplication & Division", "Decimals", "Measurements"],
        "Year 8": ["Percentages", "Negative Numbers", "Basic Area & Perimeter"],
        "Year 9": ["Ratio & Proportion", "Simple Equations", "Rounding & Estimation"],
        "Year 10": ["Speed, Distance & Time", "Standard Form", "Simple Interest & VAT"]
    };

    function showTopics(year) {
        $("#selected-year").text(`Topics for ${year}`);
        const $topicButtons = $(".topic-buttons").empty();

        if (!topics[year]) return;

        topics[year].forEach(topic => {
            $("<button>")
                .addClass("topic-btn")
                .text(topic)
                .on("click", () => showOptions(topic))
                .appendTo($topicButtons);
        });

        $("#topic-container").css("display", "flex");
        $("#options-container").hide();
    }

    function showOptions(topic) {
        $("#selected-topic").text(`Choose an option for ${topic}`);
        $("#options-container").css("display", "flex");
    }

    //Use method for celebration effect
    function activateConfetti() {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { x:0.1, y: 0.9 },
            });

        confetti({
            particleCount: 150,
            spread: 100,
            origin: { x:0.9, y: 0.9 },
        });
    }
    
    //Checks if mulitple choice anwser is correct
    function checkAnwser(correctInput, type) {
        if ($(correctInput).is(":checked")) {
            $("#dialogBox").dialog();
            $("#dialogBox p").text("Correct Anwser");
            $("#dialogBox").css("background-color", "#b7ff00");
            activateConfetti();
            return;
        }
        $("#dialogBox").dialog();
        $("#dialogBox p").text("Wrong Anwser");
        $("#dialogBox").css("background-color", "#ff0000"); 
    }

    function checkSortedList(correctArray, userArray) {
        const myArray = correctArray.split(",");
        const sortedList = $("#" + userArray).sortable("toArray");
        if (JSON.stringify(myArray) === JSON.stringify(sortedList)) {
            $("#dialogBox").dialog();
            $("#dialogBox p").text("Correct Anwser");
            $("#dialogBox").css("background-color", "#b7ff00");
            activateConfetti();
            return;
        }
        $("#dialogBox").dialog();
        $("#dialogBox p").text("Wrong Anwser");
        $("#dialogBox").css("background-color", "#ff0000"); 
    }
    
    $(".submitBtn").on("click", function () {
        const correct = $(this).data("correct");
        const listId = $(this).data("id"); // only exists for sorting questions
    
        if (listId) {
            // Sorting question
            checkSortedList(correct, listId);
        } else {
            // Multiple choice or radio question
            checkAnwser(correct);
        }
    });
    

    //Checks if drag and drop choice is correct
    $(function() {
        $(".draggable").draggable({revert: "valid"});
        $("#droppable").droppable({
            drop: function( event, ui ) {
            if ($(ui.draggable).attr("id") == "Parallelogram") {
                activateConfetti();
                $("#droppable").css("background-color", "#9edd00");
                $("#droppable").text("Correct!");
            } else {
                $("#droppable").css("background-color", "red");
                $("#droppable").text("Wrong!");
            }
            }
        });
    });
      
    //Allows drag and drop
    $(function() {
        $(".sortable").sortable();
    });

    $(".dropdown-wrapper").hover(function(){
        $(".dropdown-content").slideToggle("fast");
    });
    
    // Use event delegation for year group selection
    $(".year-btn").on("click", function () {
        showTopics($(this).data("year"));
    });

    // Colour blind mode functionality
    const colourBlindButton = document.getElementById('colourBlindButton');
    const restoreButton = document.getElementById('restoreButton');
    const body = document.body;

    colourBlindButton.addEventListener('click', () => {
        body.classList.add('colour-blind-monochrome');
    });

    restoreButton.addEventListener('click', () => {
        body.classList.remove('colour-blind-monochrome');
    });
});
