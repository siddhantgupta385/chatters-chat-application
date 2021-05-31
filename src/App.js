import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="4e94e717-0401-4a8b-9919-6c9fc73fe4b2"
            userName="caesar"
            userSecret="jonSnow@1"
            renderChatFeed={(chatAppProps)=><ChatFeed {... chatAppProps}/>}
        />
    );
}

export default App;

