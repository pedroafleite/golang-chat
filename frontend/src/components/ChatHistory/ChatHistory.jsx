import React, { Component } from "react";
import "./ChatHistory.scss";
import Message from "../Message/Message";

class ChatHistory extends Component {
  render() {
    console.log(this.props.ChatHistory);
    this.props.chatHistory.map((msg) => (
      <Message key={msg.timeStamp} message={msg.data} />
    )); //take care here
    return (
      <div className="ChatHistory">
        <h2>Chat History</h2>
        {Message}
      </div>
    );
  }
}

export default ChatHistory;
