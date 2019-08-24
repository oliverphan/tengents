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

// Send messages to server here
const sendMessage = (text) => {
    console.log(text)
}

const App = () => {
    const [messages, setMessages] = useState(DUMMY_DATA)

    return (
        <div id="App">
            <MessageList messages={messages} />
            <SendMessageBox sendMessage={sendMessage}/>
        </div>
    );
}

export default App;
