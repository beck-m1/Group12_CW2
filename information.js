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
