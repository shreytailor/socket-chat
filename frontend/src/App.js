import 'App';
import 'App.css';
import ChatComponent from 'components/Chat/ChatComponent';
import Modal from 'components/General/InputModal';
import { useState } from 'react';
import { io } from 'socket.io-client';

const clientSocket = io(process.env.REACT_APP_SOCKET_SERVER);

function App() {
	const [userInformation, setUserInformation] = useState(null);

	function onModalSubmit(name) {
		const user = {
			uuid: Math.random(),	
			userName: name
		};

		setUserInformation(user);
		clientSocket.emit("users:connect", user);
	}

	return (
		<div className="App">
			{
				userInformation ?
				<ChatComponent user={userInformation} clientSocket={clientSocket} /> :
				<Modal 
				title="Welcome To The Chat"  
				description="Enter your name below to join the chat, and talk to others."
				placeholder="Your Name"
				buttonLabel="Join Server"
				onSubmit={onModalSubmit}/>
			}
		</div>
	);
}

export default App;
