import React, { useState } from 'react';
import './App.css';
import MessageList from './MessageList';
import SendMessageBox from './SendMessageBox';
import SendImageBox from './SendImageBox';
import InsightsList from './InsightsList';
import { bigIntLiteral } from '@babel/types';

const App = () => {
    const [messages, setMessages] = useState([{
        senderId: "Tengents",
        message: "What are you thinking about?"
    }])

    const [insights, setInsights] = useState([])
    const [insightCount, setInsightCount] = useState(0)
    // const [displayInsightsFlag, setDisplayInsightsFlag] = useState(false)

    let imageLink = null
    const getBotMessage = async (obj) => {
        let response = await fetch("http://127.0.0.1:8000/api/talk/", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        const sentiment = data.Sentiment
        switch (sentiment) {
            case "POSITIVE":
                imageLink = "https://cdn10.bigcommerce.com/s-npe4l/products/555/images/1631/M-MZ-SMIL---High__27907.1498757701.1280.1280.jpg?c=2"
                break;
            case "NEGATIVE":
                imageLink = "https://www.dictionary.com/e/wp-content/uploads/2018/09/slightly-frowning-face.png"
                break;
            case "NEUTRAL":
                imageLink = "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/neutral-face.png"
                break;
            default:
                imageLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmR7JtQbfwzvS7nBBweuLkvKhJbr9AsIpYXQ3QKtBFiFyNW01"
                break;
        }
        setMessages(messages.concat([obj, {senderId: "Tengents", message: data.reply}]))
    }

    // Send messages to server here to invoke response
    const sendMessage = (text) => {
        const textObj = {
            senderId: "You",
            message: text
        }
        // Asynchronous message
        setInsightCount(insightCount + 1)
        getBotMessage(textObj)
    }

    const getBotInsight = async (obj) => {
        let response = await fetch("http://127.0.0.1:8000/api/picture/", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let insight = await response.json()
        setInsights(insights.concat(insight))
    }

    const sendImageUrl = (text) => {
        const imageMsgObj = {
            senderId: "You",
            image: text
        }
        setInsightCount(insightCount + 1)
        getBotInsight(imageMsgObj)
    }

    let displayInsights = null
    const displayInsightsSetter = () => {
        // setDisplayInsightsFlag(!displayInsightsFlag)
        displayInsights = <InsightsList insights={insights}/>
    }

    console.log(insightCount)
    if (insightCount >= 10) {
        return (
            <div id="App">
                <MessageList messages={messages} />
                <SendMessageBox sendMessage={sendMessage} sendImageUrl={sendImageUrl}/>
                {/* <SendImageBox sendImageUrl={sendImageUrl}/> */}
                <img src={imageLink}/>
                <button className="insightsButton" onClick={displayInsightsSetter()}>View Insights</button>
                {displayInsights}
            </div>
        );
    } else {
        return(
            <div id="App">
                <MessageList messages={messages} />
                <SendMessageBox sendMessage={sendMessage} sendImageUrl={sendImageUrl}/>
                {/* <SendImageBox sendImageUrl={sendImageUrl}/> */}
                <img src={imageLink}/>
            </div>
        )
    }

}

export default App;