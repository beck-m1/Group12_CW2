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

        let selectedYear = null;
let selectedTopic = null;

function showOptions(topic) {
    selectedTopic = topic;
    $("#selected-topic").text(`Choose an option for ${topic}`);
    $("#options-container").css("display", "flex");
}

$(".year-btn").on("click", function () {
    selectedYear = $(this).data("year");
    showTopics(selectedYear);
});

// Handle "Topic Information" and "Practice Questions" button clicks
$(".option-btn").on("click", function () {
    const choice = $(this).text();

    if (!selectedYear || !selectedTopic) return;

    // Create a URL-friendly ID (e.g., "Year 9" + "Simple Equations" => "year9-simple-equations")
    const sectionId = `${selectedYear.toLowerCase().replace(/\s+/g, '')}-${selectedTopic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    if (choice === "Topic Information") {
        window.location.href = `information.html#${sectionId}`;
    } else if (choice === "Practice Questions") {
        // Future feature: redirect to questions page
        window.location.href = `questions.html#${sectionId}`;
    }
});

    });
});
