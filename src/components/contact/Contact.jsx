import { useState } from "react";
import "./contact.scss"


export default function Contact() {

    const [message, sentMessage] = useState(false);

const handleSubmit = (e)=> {
    e.preventDefault();
    sentMessage(true)
}
return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://image.flaticon.com/icons/png/512/4850/4850955.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll get back to you ASAP 😃 </span>}
                </form>
            </div>
        </div>
    )
}
