import './App.css';
import Bat from './components/Bat';
import { Provider } from 'react-redux';
import store from './redux/store';
import Ball from './components/Ball';

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <Bat />
          <Ball />
        </Provider> 
      </div>
  );
}

export default App;
