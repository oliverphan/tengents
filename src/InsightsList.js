import React from 'react';

const InsightsList = (props) => {
    const {insights} = props;
    const insightText = Object.keys(insights);
    return(
        <ol className="insights-list">
            {insightText.map(insight => {
                return (
                    <li key={insight.id}>
                        <div>
                            {insight}
                        </div>
                    </li>
                )
            })}
        </ol>
    )
}

export default InsightsList;