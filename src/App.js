import { HashRouter, Route } from 'react-router-dom';

import Game from './screens/Game/Game';
import Greeting from './screens/Greeting/Greeting';
import Home from './screens/Home/Home';
import Score from './screens/Score/Score';

function App() {
	return (
		<HashRouter basename={process.env.PUBLIC_URL}>
			<Route path='/' exact component={Home} />
			<Route path='/game' exact component={Game} />
			<Route path='/score' exact component={Score} />
			<Route path='/greeting' exact component={Greeting} />
		</HashRouter>
	);
}

export default App;
