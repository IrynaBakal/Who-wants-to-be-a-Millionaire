import { BrowserRouter, Route } from 'react-router-dom';

import Game from './components/Game/Game';
import Home from './components/Home/Home';
import Score from './components/Score/Score';
import Greeting from './components/Greeting/Greeting';

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
