import { useState } from 'react'


export const ChatInput = ({ socket }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    socket.emit('sendMessage', text);
    setText('');
  };

  return (
    <section>
      {/* the onChange needed to change because it was coming out weird... */}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> 
      <button type="button" onClick={handleSubmit}>
        Send
      </button>
    </section>
  );
};