import React from 'react';
import './App.scss';
import Search from './components/search/Search';
import Player from './components/player/Player';
import Queue from './components/queue/Queue';
import Video from './model/Video';

class App extends React.Component {
  videos: Video[] = [
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

  render() {
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
          <Queue videos={this.videos} />
        </div>
      </div>
    );
  }
}

export default App;
