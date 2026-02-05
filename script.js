function analyzeVoice() {
    const fileInput = document.getElementById("audioFile");
    const resultBox = document.getElementById("result");

    if (fileInput.files.length === 0) {
        alert("Please upload an audio file");
        return;
    }

    // DEMO logic (AI simulation)
    const classifications = ["AI-generated", "Human-generated"];
    const explanations = [
        "Synthetic voice patterns and unnatural pitch variations detected.",
        "Natural speech flow and human-like intonation observed."
    ];

    const randomIndex = Math.floor(Math.random() * 2);
    const confidenceScore = (Math.random() * (0.95 - 0.75) + 0.75).toFixed(2);

    document.getElementById("classification").innerText = classifications[randomIndex];
    document.getElementById("confidence").innerText = confidenceScore;
    document.getElementById("explanation").innerText = explanations[randomIndex];

    resultBox.classList.remove("hidden");
}
