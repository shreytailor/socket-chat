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
		const userObject = {
			uuid: 1,	
			name: name,
			color: "#ffffff"
		};

		setUserInformation(userObject);
		clientSocket.emit("users:connect", userObject);
	}

	return (
		<div className="App">
			{
				userInformation ?
				<ChatComponent clientSocket={clientSocket} userData={userInformation}/> :
				<Modal 
				title="Welcome To The Chat"  
				description="Enter your name below to join the chat, and talk to others." 
				buttonLabel="Join Server"
				onSubmit={onModalSubmit}/>
			}
		</div>
	);
}

export default App;
