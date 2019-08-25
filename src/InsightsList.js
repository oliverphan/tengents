import React from 'react';

const InsightsList = (props) => {
    const {insights} = props;
    return(
        <ol className="insights-list">
            {insights.map(insight => {
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