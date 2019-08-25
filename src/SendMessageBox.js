import React, { useState } from 'react';
import './SendMessageBox.css'

const SendMessageBox = (props) => {
    const {sendMessage, sendImageUrl} = props
    const [typedMessage, setTypedMessage] = useState('')

    const handleChange = (e) => {
        setTypedMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // sendMessage(typedMessage)
        if (typedMessage.startsWith("http")) {
            sendImageUrl(typedMessage)
        } else {
            sendMessage(typedMessage)
        }
        setTypedMessage('')
    }

    return (
        <form
            onSubmit={handleSubmit} 
            className="send-message-form">
            <input
                onChange={handleChange}
                value={typedMessage}
                placeholder="Type message and hit ENTER"
                type="text"/>

        </form>
    )
}

export default SendMessageBox;