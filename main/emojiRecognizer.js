let emojis;

const fetchEmojis = function () {
    fetch('https://emoji-api.com/emojis?access_key=860790e4dbd0c835df5337d1959f4c8e887de661').then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }).then(data => {
        emojis = data;
        console.log("Fetch successful: " + emojis);
    }).catch(error => {
        console.error('Error:', error); // Handle errors
    });
}

fetchEmojis();