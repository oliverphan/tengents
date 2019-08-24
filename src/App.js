import React, { useState } from 'react';
import './App.css';
import MessageList from './MessageList';
import SendMessageBox from './SendMessageBox';

const DUMMY_DATA = [
    {
    senderId: "adamsmith",
    text: "test1"
    },
    {
    senderId: "janedoe",
    text: "test2"
    }
]

const App = () => {
    const [messages, setMessages] = useState([])

    // Send messages to server here to invoke response
    const sendMessage = (text) => {
        const textObj = {
            senderId: "You",
            text: text
        }
        setMessages(messages.concat([textObj]))
    }

    return (
        <div id="App">
            <MessageList messages={messages} />
            <SendMessageBox sendMessage={sendMessage}/>
        </div>
    );
}

export default App;
