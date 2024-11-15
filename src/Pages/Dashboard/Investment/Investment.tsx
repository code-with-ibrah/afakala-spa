import React from "react";
import GraphWrapper from "../../../Components/Ui Elements/Graph/GraphWrapper";
import PieGraph from "../../../Components/Ui Elements/Graph/PieGraph";
import DashboardContainer from "../../../Components/Common/Page/Dashboard/DashboardContainer";


const stocksData = [
    {
        "color": '#004AAD',
        "id": "Invested",
        "label": "Invested",
        "value": 550
    },
    {
        "id": "Receivable",
        "label": "Receivable",
        "value": 200,
        "color": "#2976dc"
    }
];


const Investment = () => {
    return <React.Fragment>

        <DashboardContainer>

            <div className="welcome-wrapper">
                <p className="user-name">Investment Portfolio</p>
            </div>

            {/* Stocks graph data */}
            <GraphWrapper title="STOCKS">
                <PieGraph data={stocksData} />
            </GraphWrapper>


            {/* Stocks graph data */}
            <GraphWrapper title="FOREX">
                <PieGraph data={stocksData} />
            </GraphWrapper>


            {/* Stocks graph data */}
            <GraphWrapper title="CRYPTO">
                <PieGraph radius={.6} data={stocksData} />
            </GraphWrapper>


        </DashboardContainer>

    </React.Fragment>
}


export default Investment;