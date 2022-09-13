import { io } from 'socket.io-client';
import { ChatInput } from './features/ChatInput'
import { Feed } from './features/Feed'


function App() {
const socket = io('http://localhost:8081',{
});
  return (
    <main>
      <ChatInput socket={socket} />
      <Feed socket={socket} />
    </main>
  );
}

export default App;
