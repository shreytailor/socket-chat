import 'App';
import 'App.css';
import Modal from 'components/General/InputModal';
import { useState } from 'react';

function App() {
	const [name, setName] = useState("");

	function onModalSubmit(name) {
		setName(name);
	}

	return (
		<div className="App">
			<Modal 
			title="Welcome To The Chat"  
			description="Enter your name below to join the chat, and talk to others." 
			buttonLabel="Join Server"
			onSubmit={onModalSubmit}/>
		</div>
	);
}

export default App;
