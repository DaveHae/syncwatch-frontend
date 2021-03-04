import React, { useEffect, useState } from 'react';
import './App.scss';
import Search from './components/search/Search';
import Player from './components/player/Player';
import Queue from './components/queue/Queue';
import Video from './model/Video.model';
import { io } from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:7000';

const App = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on('FromAPI', (data: any) => {
      setResponse(data);
    });
  }, []);

  const videos: Video[] = [
    {
      title: 'Video 1',
      img: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      requestedBy: {
        name: 'David',
        email: 'haennidavid99@gmail.com',
        img: 'https://i.ytimg.com/vi/ma67yOdMQfs/hqdefault.jpg',
      },
    },
    {
      title: 'Video 2',
      img: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      requestedBy: {
        name: 'David',
        email: 'haennidavid99@gmail.com',
        img: 'https://i.ytimg.com/vi/ma67yOdMQfs/hqdefault.jpg',
      },
    },
  ];

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo-name">
          <img className="logo" alt="logo" src="/logo.png" />
          <h1>SyncWatch</h1>
        </div>
        <Search />
      </header>
      <div className="main">
        <Player url={'https://www.youtube.com/embed/dQw4w9WgXcQ'} />
        <Queue videos={videos} />
      </div>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    </div>
  );
};

export default App;
