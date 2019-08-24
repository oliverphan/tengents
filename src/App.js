import React, { useState } from 'react';
import './App.css';
import MessageList from './MessageList';
import SendMessageBox from './SendMessageBox';

const App = () => {
    const [messages, setMessages] = useState([{
        senderId: "Bot",
        message: "What are you thinking about?"
    }])

    const getBotMessage = async (obj) => {
        let response = await fetch("http://127.0.0.1:8000/api/talk/", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        setMessages(messages.concat([obj, {senderId: "Bot", message: data.reply}]))
    }

    // Send messages to server here to invoke response
    const sendMessage = (text) => {
        const textObj = {
            senderId: "You",
            message: text
        }
        // A synchronous message
        getBotMessage(textObj)
    }

    return (
        <div id="App">
            <MessageList messages={messages} />
            <SendMessageBox sendMessage={sendMessage}/>
        </div>
    );
}

export default App;
