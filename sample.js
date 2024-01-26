function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();

    if (message !== "") {
        var chatDisplay = document.getElementById("chat-display");
        chatDisplay.innerHTML += "<p><strong>You:</strong> " + message + "</p>";

        // Clear the input field
        messageInput.value = "";

        // Scroll to the bottom of the chat display
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
}
