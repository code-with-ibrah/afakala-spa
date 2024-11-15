import React from "react";
import "./Chat.css";
import DashboardContainer from "../../../Components/Common/Page/Dashboard/DashboardContainer";
import { AndroidFilled, SendOutlined } from "@ant-design/icons";



const Chat = () => {
    return <React.Fragment>
        <DashboardContainer activeTab={2}>

            <div className="chat-screen__container">

                <div className="triana-logo">
                    <span className="text">Triana</span> | &nbsp;
                    <AndroidFilled className="icon" />
                </div>


                <div className="pre-questions">
                    <p className="pre-question__card"> Activate stock trading with 100 USD</p>
                    <p className="pre-question__card"> Will i survive for 3 years base on my budget ?</p>
                    <p className="pre-question__card"> Activate stock trading with 100 USD</p>
                    <p className="pre-question__card"> Will i survive for 3 years base on my budget ?</p>
                </div>



                <div className="chat-screen">

                    <div className="my-message message">
                        <p className="content">
                            Hello trina, good morning!
                        </p>
                        <img className="profile-img" src="/assets/img/profile.jpg" alt="profile" />
                    </div>

                    <div className="receipient-message message">
                        <img className="profile-img" src="/assets/img/robot-img.png" alt="profile" />
                        <p className="content">
                            Good morning, Bob!,
                            How may i help you ?
                        </p>
                    </div>

                    <div className="my-message message">
                        <p className="content">
                            What is my financial health ?
                        </p>
                        <img className="profile-img" src="/assets/img/profile.jpg" alt="profile" />
                    </div>


                    <div className="robot-typing">
                        <AndroidFilled className="icon" />
                        <span> typing...</span>
                    </div>

                </div>


                {/* <!-- textarea --> */}
                <div className="text-message_wrapper">

                    <p className="icon">
                        <AndroidFilled />
                    </p>
                    <textarea placeholder="Enter a prompt here" className="text-message" id="textarea"></textarea>
                    <p className="icon">
                        <SendOutlined />
                    </p>

                </div>
 

            </div>

        </DashboardContainer>

    </React.Fragment>
}


export default Chat;