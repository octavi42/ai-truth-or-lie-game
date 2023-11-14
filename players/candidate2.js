const readline = require('readline');
const net = require('net');

const client = new net.Socket();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const serverAddress = '127.0.0.1';
const serverPort = 12345;

// Connect to the server
client.connect(serverPort, serverAddress, () => {
    console.log(`Connected to server at ${serverAddress}:${serverPort}`);

    // Ask the user for a story or use a default story
    rl.question('Enter your story (press Enter for default story): ', (story) => {
        // Use a default story if the user didn't provide one
        story = story.trim() || "I once sailed around the world in a paper boat.";

        // Send the story to the server
        const request = { story };
        client.write(JSON.stringify(request));

        // Close the client socket after sending the story
        client.end();
        rl.close();
    });
});

// Handle data received from the server
client.on('data', (data) => {
    const response = JSON.parse(data.toString());
    console.log()
    console.log(response);
    console.log()
});

// Handle the connection close event
client.on('close', () => {
    console.log('Connection closed');
});
