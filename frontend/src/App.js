import 'App';
import 'App.css';
import { useState } from 'react';
import { io } from 'socket.io-client';
import Modal from 'components/General/InputModal';
import GenerateUUID from 'utilities/GenerateUUID';
import ChatComponent from 'components/Chat/ChatComponent';

const clientSocket = io(process.env.REACT_APP_SOCKET_SERVER);

function App() {
	const [userInformation, setUserInformation] = useState(null);
	
	function onModalSubmit(name) {

		/*
		When the user submits the modal to join the chatroom, using information such as their
		name, create a JSON object encapsulating this information.
		*/
		const user = {
			uuid: GenerateUUID(),	
			userName: name
		};

		// Send the identity object created above, to the socket server.
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
