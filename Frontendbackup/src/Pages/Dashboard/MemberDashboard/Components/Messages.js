import { useState } from "react";
import "./Messages.css";

const Messages = () => {
    const [message, setMessage] = useState("");
    const [recipient, setRecipient] = useState("All");

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleRecipientChange = (e) => {
        setRecipient(e.target.value);
    };

    const handleSendMessage = () => {
        // Implement logic to send the message
        // You can use the state variables (message, recipient) here
    };

    return (
        <>
            <table>
                <tr>
                    <td>
                        <textarea id="txtMsg" placeholder="Message" className="txtMsg" value={message} onChange={handleMessageChange}></textarea>
                    </td>
                    <td>
                        Send to<br />
                        <select value={recipient} onChange={handleRecipientChange}>
                            <option value="All">All</option>
                            <option value="Group1">Group1</option>
                        </select>
                        <input type="button" value="Send" onClick={handleSendMessage} />
                    </td>
                </tr>
            </table>
        </>
    );
};

export default Messages;
