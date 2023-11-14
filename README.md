# ai-truth-or-lie-game

Welcome to the ChatGPT Lie Detector Game! This project combines the power of OpenAI's ChatGPT with a simple server-client game where players input stories, and the ChatGPT model determines if the stories are true or false.

## Functionality

- **Lie Detection:** Utilizes OpenAI's ChatGPT to process user-provided stories and evaluate their truthfulness.
- **Server-Client Communication:** Implements a server-client architecture using TCP sockets for communication.
- **Interactive Gameplay:** Players can input their stories, receive responses from ChatGPT, and engage in a lie detection game.

## Technologies Used

- **OpenAI GPT-3.5 Turbo:** The model used for lie detection and story processing.
- **Python:** Server-side scripting language.
- **Node.js (JavaScript):** Client-side scripting language for interactive client communication.
- **Socket Programming:** Enables communication between the server and clients using TCP sockets.

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/ChatGPT-Lie-Detector-Game.git`
2. Follow the setup instructions in the respective `server.py` and `client.js` files.
3. Run the server: `python server.py`
4. Run the client: `node client.js`

## Usage

1. Enter your story when prompted by the client.
2. Receive a response from ChatGPT, indicating whether it believes your story is true or false.
3. Engage in the lie detection game with other players.
