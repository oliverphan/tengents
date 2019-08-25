import React, { useState } from 'react';
import './App.css';
import MessageList from './MessageList';
import SendMessageBox from './SendMessageBox';
import SendImageBox from './SendImageBox';
import InsightsList from './InsightsList';

const App = () => {
    const [messages, setMessages] = useState([{
        senderId: "Bot",
        message: "What are you thinking about?"
    }])

    const [insights, setInsights] = useState([])
    const [insightCount, setInsightCount] = useState(0)
    // const [displayInsightsFlag, setDisplayInsightsFlag] = useState(false)

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
        setInsights(insights.concat(insight.map()))
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
            </div>
        )
    }

}

export default App;