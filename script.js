// script.js
async function askAI() {
    const question = document.getElementById('question').value;
    const responseElement = document.getElementById('response');

    try {
        const response = await fetch('https://your-worker-url.com/ask-ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });
        const data = await response.json();
        responseElement.innerText = data.error || data.messages[0].content;
    } catch (error) {
        responseElement.innerText = 'An error occurred while getting the response.';
    }
}