from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze_voice():
    data = request.json

    response = {
        "classification": "AI-generated",
        "confidence": 0.91,
        "explanation": "Synthetic voice patterns detected"
    }
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
