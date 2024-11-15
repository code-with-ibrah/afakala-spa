import React from "react";
import DashboardContainer from "../../../Components/Common/Page/Dashboard/DashboardContainer";

import { AndroidFilled } from "@ant-design/icons";

import GraphWrapper from "../../../Components/Ui Elements/Graph/GraphWrapper";
import PieGraph from "../../../Components/Ui Elements/Graph/PieGraph";
import LineGraph from "../../../Components/Ui Elements/Graph/LineGraph";

import "./DashboardHome.css";





const DashboardHome = () => {

    const pieGraphData = [
        {
         "color": '#004AAD',
          "id": "Income",
          "label": "Income",
          "value": 250
        },
        {
          "id": "Expense",
          "label": "Expenses",
          "value": 200,
          "color": "#2976dc"
        }
      ];


    const lineGraphData = [
        {
          id: "Expenses",
          color: "#004AAD",
          data: [
            {
              "x": "Jan",
              "y": 138
            },
            {
              "x": "Feb",
              "y": 30
            },
            {
              "x": "Mar",
              "y": 36
            },
            {
              "x": "Apr",
              "y": 121
            },
            {
              "x": "May",
              "y": 4
            },
            {
              "x": "Jun",
              "y": 169
            },
            {
              "x": "July",
              "y": 226
            },
            {
              "x": "Aug",
              "y": 42
            },
            {
              "x": "Sept",
              "y": 138
            },
            {
              "x": "Oct",
              "y": 44
            },
            {
              "x": "Nov",
              "y": 25
            },
            {
              "x": "Dec",
              "y": 97
            }
          ]
        },
        {
          id: "Income",
          color: "hsl(309, 70%, 50%)",
          data: [
            {
              "x": "Jan",
              "y": 100 // Change the y-value here
            },
            {
              "x": "Feb",
              "y": 50 // Change the y-value here
            },
            {
              "x": "Mar",
              "y": 75 // Change the y-value here
            },
            {
              "x": "Apr",
              "y": 150 // Change the y-value here
            },
            {
              "x": "May",
              "y": 20 // Change the y-value here
            },
            {
              "x": "Jun",
              "y": 200 // Change the y-value here
            },
            {
              "x": "July",
              "y": 250 // Change the y-value here
            },
            {
              "x": "Aug",
              "y": 80 // Change the y-value here
            },
            {
              "x": "Sept",
              "y": 120 // Change the y-value here
            },
            {
              "x": "Oct",
              "y": 90 // Change the y-value here
            },
            {
              "x": "Nov",
              "y": 40 // Change the y-value here
            },
            {
              "x": "Dec",
              "y": 110 // Change the y-value here
            }
          ]
        }
      ];
      
    const taxPaymentData = [
        {
            "id": "Tax",
            "label": "Tax",
            "value": 250,
            "color": "#2976dc"
        }
    ];

    const deptPaymentData = [
        {
            "id": "Dept Payment",
            "label": "Dept Payment",
            "value": 850,
            "color": "#2976dc"
        }
    ];


    const investmentReturnsData = [
        {
          "id": "Investment",
          "label": "Investment",
          "value": 115,
          "color": "#2976dc"
        },
        {
          "id": "Returns",
          "label": "Returns",
          "value": 530,
          "color": "#004AAD"
        }
      ];

      const spendingBudgetData = [
        {
          "id": "Spending",
          "label": "Spending",
          "value": 150,
          "color": "#004AAD"
        },
        {
          "id": "Budget",
          "label": "Budge",
          "value": 870,
          "color": "#2976dc"
        }
      ];




    return <React.Fragment>

        <DashboardContainer activeTab={1}>

            <div className="welcome-wrapper">
                <p className="user-name">Welcome Bob!</p>
                <AndroidFilled className="icon"/>
            </div>

            <div className="dashboard-home__container">

                <div className="dashboard-card">
                    <div className="header">
                        <span className="title">Income</span>
                        <span className="currency">GHS</span>
                    </div>

                    <div className="body">
                        <p className="amount">250000</p>
                    </div>
                </div>


                <div className="dashboard-card">
                    <div className="header">
                        <span className="title">Expenses</span>
                        <span className="currency">GHS</span>
                    </div>

                    <div className="body">
                        <p className="amount">200</p>
                    </div>
                </div>
       
                
            </div>


            <div>
                {/* Expense Income graph data */}
                <GraphWrapper title="This Month">
                    <PieGraph data={pieGraphData} />
                </GraphWrapper>


                {/* Expense Income chart graph data */}
                <GraphWrapper title={"Last Year"}>
                    <LineGraph data={lineGraphData}/>
                </GraphWrapper>


                {/* Tax payment Graph */}
                <GraphWrapper title="Tax Payment">
                    <PieGraph radius={0.6} data={taxPaymentData} />
                </GraphWrapper>

                
                {/* Dept Payment Graph */}
                <GraphWrapper title="Dept Payment">
                    <PieGraph radius={0.6} data={deptPaymentData} />
                </GraphWrapper>


                {/* Investment Returns Graph */}
                <GraphWrapper title="This Month">
                    <PieGraph radius={0.6} data={investmentReturnsData} />
                </GraphWrapper>


                {/* Spending Budget Graph */}
                <GraphWrapper title="This Month">
                    <PieGraph data={spendingBudgetData} />
                </GraphWrapper>


            </div>


            

        </DashboardContainer>

    </React.Fragment>
}

export default DashboardHome;