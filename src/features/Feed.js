import { useState } from 'react'





export const Feed = ({ socket }) => {
    const [messages, setMessages] = useState([]);
  
    socket.on('addMessage', (text) => {
      setMessages([...messages, text]);
    });
  
    return (
      <section>
        Feed
        {messages.map((message) => (
          <article key={Math.random()}>{message}</article> //this message needed curly brackets around it 
          ))}
      </section>
    );
};