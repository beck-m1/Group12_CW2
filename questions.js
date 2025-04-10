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
    
    //Checks if mulitple choice answer is correct
    function checkAnswer(correctInput, type) {
        if ($(correctInput).is(":checked")) {
            $("#dialogBox").dialog();
            $("#dialogBox p").text("Correct answer");
            $("#dialogBox").css("background-color", "#b7ff00");
            activateConfetti();
            return;
        }
        $("#dialogBox").dialog();
        $("#dialogBox p").text("Wrong answer");
        $("#dialogBox").css("background-color", "#ff0000"); 
    }

    function checkSortedList(correctArray, userArray) {
        const myArray = correctArray.split(",");
        const sortedList = $("#" + userArray).sortable("toArray");
        if (JSON.stringify(myArray) === JSON.stringify(sortedList)) {
            $("#dialogBox").dialog();
            $("#dialogBox p").text("Correct answer");
            $("#dialogBox").css("background-color", "#b7ff00");
            activateConfetti();
            return;
        }
        $("#dialogBox").dialog();
        $("#dialogBox p").text("Wrong answer");
        $("#dialogBox").css("background-color", "#ff0000"); 
    }
    
    $(".submitBtn").on("click", function () {
        const correctSelector = $(this).data("correct");
        const typeSelector = $(this).data("id");
        const buttonText = $(this).text().trim().toLowerCase(); 
        console.log("Button clicked with text:", buttonText);
        console.log("Type Selector:", typeSelector);
        if (typeSelector === "standard-form") {
            console.log("Checking standard form answer...");
            checkStandardForm();
            return;
        }
        if (buttonText === "check answer") {
            console.log("Checking answer...");
            checkAnswer(correctSelector, typeSelector);
        } else if (buttonText === "check order") {
            console.log("Checking order...");
            checkSortedList(correctSelector, typeSelector);
        } else {
            console.warn("Unhandled button text:", buttonText);
        }
    });

    //Checks if drag and drop choice is correct
    $(function() {
        $(".draggable").draggable({ revert: "valid" });
        $(".drop-target").droppable({
          drop: function(event, ui) {
            var isCorrect = $(ui.draggable).data("correct") === true;
            if (isCorrect) {
              if (typeof activateConfetti === "function") activateConfetti();
              $(this).css("background-color", "#9edd00").text("Correct!");
            } else {
              $(this).css("background-color", "#ff0000").text("Wrong!");
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
    
   // Standard Form
function checkStandardForm() {
        const userInput = document.getElementById("standardFormInput").value
            .trim()
            .replace(/\s+/g, '')
            .toLowerCase();
        const validAnswers = ["5.6×10^-4", "5.6x10^-4", "5.6*10^-4"];
        // Only affect the button in this section
        const button = $("#year10-standard-form .submitBtn");
        if (validAnswers.includes(userInput)) {
            activateConfetti();
            document.getElementById("standardFormInput").disabled = true;
        } else {
            $("#dialogBox").dialog();
            $("#dialogBox p").text("Wrong answer");
            $("#dialogBox").css("background-color", "#ff0000");
        }
    } 
    
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
