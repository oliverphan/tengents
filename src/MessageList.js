import React from 'react';
import './MessageList.css';

const MessageList = (props) => {
    // Messages is an array of objects
    const {messages} = props;
    return(
        <ul className="message-list">
            {messages.map(message => {
                return (
                    <li key={message.id}>
                        <span className="name">{message.senderId}</span>
                        <div className="dialogue">
                            {message.message}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default MessageList;