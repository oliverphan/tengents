import React, { useState } from 'react';

const SendImageBox = (props) => {
    const {sendImageUrl} = props
    const [typedMessage, setTypedMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        sendImageUrl(typedMessage)
        setTypedMessage('')
        // let form_data = new FormData()
        // form_data.append('image', file);

        // fetch("http://127.0.0.1:8000/api/picture/", {
        //     method: 'POST',
        //     body: form_data,
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        // .then(res => res.json())
        // .then(response => {
        //     setMessages(messages.concat([{senderId: "Bot", message: response.reply}]))
        // })

        // console.log("handle uploading ", file);
    }
    
    const handleChange = (e) => {

        setTypedMessage(e.target.value)

        // setFile(e.target.files[0])

        // e.preventDefault()

        // const reader = new FileReader();
        // let file = e.target.files[0]

        // reader.onloadend = () => {
        //     setFile(file);
        // }

        // reader.readAsDataURL(file)
    }

    return (
        <form onSubmit={handleSubmit}
            className="send-img-link">
            <input
                value={typedMessage}
                onChange={handleChange}
                placeholder="Paste link to image"
                type="text" />
        </form>
    )

}

export default SendImageBox;