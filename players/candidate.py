import socket
import json

def send_story(story):
    # Connect to the server
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(('127.0.0.1', 12345))

    # Send the story to the server
    request = {"story": story}
    client.send(json.dumps(request).encode())

    # Receive and print the response from the server
    response = client.recv(1024).decode()
    
    print()
    print(response)
    print()

    # Close the client socket
    client.close()

if __name__ == "__main__":
    # Ask the user for a story or use a default story
    user_story = input("Enter your story (press Enter for default story): ").strip()
    story_to_send = user_story or "I once traveled to the bottom of the ocean and befriended a giant squid."

    send_story(story_to_send)
