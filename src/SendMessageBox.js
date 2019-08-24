import React, { useState } from 'react';

const SendMessageBox = (props) => {
    const {sendMessage} = props
    const [typedMessage, setTypedMessage] = useState('')

    const handleChange = (e) => {
        setTypedMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendMessage(typedMessage)
        setTypedMessage('')
    }

    return (
        <form
            onSubmit={handleSubmit} 
            className="send-message-form">
            <input
                onChange={handleChange}
                value={typedMessage}
                placeholder="Type message here!"
                type="text"/>

        </form>
    )
}

export default SendMessageBox;