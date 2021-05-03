import { BrowserRouter, Route } from 'react-router-dom';

import Game from './screens/Game/Game';
import Greeting from './screens/Greeting/Greeting';
import Home from './screens/Home/Home';
import Score from './screens/Score/Score';

function App() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home} />
			<Route path='/game' component={Game} />
			<Route path='/score' component={Score} />
			<Route path='/greeting' component={Greeting} />
		</BrowserRouter>
	);
}

export default App;
