function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // Display user's message in the chat box
    chatBox.innerHTML += "<div>User: " + userInput + "</div>";

    // Call ChatGPT API to get the response
    fetch("https://chatgpt-api.shn.hk/v1/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: userInput
        })
    })
    .then(response => response.json())
    .then(data => {
        // Display ChatGPT's response in the chat box
        chatBox.innerHTML += "<div>ChatGPT: " + data.message + "</div>";

        // Scroll chat box to the bottom to show the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => console.error(error));
}
