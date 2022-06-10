import { useState } from 'react';

export default function Message() {

    const [messages, setMessages] = useState(['saf','adsf'])
 
    // if more than 2 options, if or switch statements should be here

    return (
        <div style={{ padding: '0.5rem 5rem' }}>
            <h1>Message (Cases for conditional rendering)</h1>
            {
                messages.length === 0 ?
                <p>You are all caught up</p> : // yes
                <p>You have {messages.length} unread {messages.length > 1 ? 'messages' : 'message'}</p> // no
            }
        </div>
    );
}