import {useState} from 'react';
import {useQuery, useQueryClient} from 'react-query';
import '../App.css';
import logo from '../logo.svg';
import {echo} from '../services';
import Title from './Title';

function App() {
  const [sentTitle, setSentTitle] = useState('Hi, states.');

  const queryClient = useQueryClient();

  const {data: backTitle} = useQuery(
    ['title', sentTitle],
    async () => {
      const backTitle = await echo(sentTitle);
      queryClient.setQueryData('title-cached', backTitle);
      return backTitle;
    },
    {
      keepPreviousData: true,
      initialData: sentTitle,
    }
  );

  const sendEcho = async () => {
    const sentTitle = '' + Math.random();
    setSentTitle(sentTitle);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sent title: "{sentTitle}", Back title: "{backTitle}"
        </p>
        <span className="App-link" onClick={sendEcho}>
          Echo
        </span>
      </header>
    </div>
  );
}

export default App;
