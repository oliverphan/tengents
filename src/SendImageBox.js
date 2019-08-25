import React, { useState } from 'react';

const SendImageBox = (props) => {
    const {messages, setMessages} = props
    const [file, setFile] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        let form_data = new FormData()
        form_data.append('image', file);

        fetch("http://127.0.0.1:8000/api/picture/", {
            method: 'POST',
            body: form_data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => res.json())
        .then(response => {
            setMessages(messages.concat([{senderId: "Bot", message: response.reply}]))
        })

        console.log("handle uploading ", file);
    }
    
    const handleChange = (e) => {

            setFile(e.target.files[0])

        // e.preventDefault()

        // const reader = new FileReader();
        // let file = e.target.files[0]

        // reader.onloadend = () => {
        //     setFile(file);
        // }

        // reader.readAsDataURL(file)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="fileInput"
                type="file"
                onChange={handleChange} />
            <button className="submitButton"
                type="submit"
                onClick={handleSubmit}>
                Send image once chosen
                </button>
        </form>
    )

}

export default SendImageBox;