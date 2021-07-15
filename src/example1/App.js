import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../App.css';
import logo from '../logo.svg';
import {setTitle} from '../redux';
import {echo} from '../services';
import Title from './Title';

function App() {
  const dispatch = useDispatch();
  const backTitle = useSelector((state) => state.title);

  const [sentTitle, setSentTitle] = useState(backTitle);

  const sendEchoAndSetBack = async () => {
    const sentTitle = '' + Math.random();
    setSentTitle(sentTitle);
    const backTitle = await echo(sentTitle);
    dispatch(setTitle(backTitle));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sent title: "{sentTitle}", Back title: "{backTitle}"
        </p>
        <span className="App-link" onClick={sendEchoAndSetBack}>
          Echo
        </span>
      </header>
    </div>
  );
}

export default App;
