function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // Display user's message in the chat box
    chatBox.innerHTML += "<div>User: " + userInput + "</div>";

    // Call ChatGPT API with your API key to get the response
    var apiKey = "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";
    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
        },
        body: JSON.stringify({
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: userInput }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        // Display ChatGPT's response in the chat box
        chatBox.innerHTML += "<div>ChatGPT: " + data.choices[0].message.content + "</div>";

        // Scroll chat box to the bottom to show the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => console.error(error));
}
