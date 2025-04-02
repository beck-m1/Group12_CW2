// Topics for each year group
const topics = {
    "Primary 6": ["Addition & Subtraction", "Basic Fractions", "Shapes"],
    "Primary 7": ["Multiplication & Division", "Decimals", "Measurements"],
    "Year 8": ["Percentages", "Negative Numbers", "Basic Area & Perimeter"],
    "Year 9": ["Ratio & Proportion", "Simple Equations", "Rounding & Estimation"],
    "Year 10": ["Speed, Distance & Time", "Standard Form", "Simple Interest & VAT"]
};

// Show topics when a year group is selected
function showTopics(year) {
    const topicContainer = document.getElementById("topic-container");
    const selectedYearText = document.getElementById("selected-year");
    const topicButtons = topicContainer.querySelector(".topic-buttons");

    // Update heading
    selectedYearText.textContent = `Topics for ${year}`;
    
    // Clear previous topics
    topicButtons.innerHTML = "";

    // Add new topic buttons
    topics[year].forEach(topic => {
        const btn = document.createElement("button");
        btn.className = "topic-btn";
        btn.textContent = topic;
        btn.onclick = () => showOptions(topic);
        topicButtons.appendChild(btn);
    });

    // Show topic section and hide options
    topicContainer.style.display = "flex";
    document.getElementById("options-container").style.display = "none";
}

// Show options when a topic is selected
function showOptions(topic) {
    const optionsContainer = document.getElementById("options-container");
    document.getElementById("selected-topic").textContent = `Choose an option for ${topic}`;
    
    optionsContainer.style.display = "flex";
}
