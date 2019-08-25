import React, { useState } from 'react';
import './App.css';
import MessageList from './MessageList';
import SendMessageBox from './SendMessageBox';
import SendImageBox from './SendImageBox';
import InsightsList from './InsightsList';
import { bigIntLiteral } from '@babel/types';
import p from './pos.jpg'
import f from './fr.png'
import n from './neutral-face.png'
import c from './images.png'


const App = () => {
    const [messages, setMessages] = useState([{
        senderId: "Tengents",
        message: "What are you thinking about?"
    }])
    const [imageLink, setImageLink] = useState(p)

    const [insights, setInsights] = useState([])
    const [insightCount, setInsightCount] = useState(0)
    // const [displayInsightsFlag, setDisplayInsightsFlag] = useState(false)

    let link = null
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
                link = p
                break;
            case "NEGATIVE":
                link = f
                break;
            case "NEUTRAL":
                link = n
                break;
            default:
                link = c
                break;
    
        }console.log(link)
        setImageLink(link)
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
                <img src={imageLink} height="200" width="200"/>
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
                <img src={imageLink} height="200" width="200"/>
            </div>
        )
    }

}

export default App;