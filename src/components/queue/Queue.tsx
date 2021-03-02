import React from 'react';
import Video from '../../model/Video';
import './Queue.scss';

interface IProps {
  videos: Video[];
}

function Queue(props: IProps) {
    return (
      <div className="queue">
        <h3>Queue:</h3>
        {props.videos.map((video) => {
          return (
            <div className="queue-entry" key={video.title}>
              <div className="queue-image">
                <img src={video.img} alt="YouTube Thumbnail" />
              </div>
              <div className="queue-title">{video.title}</div>
              <div className="queue-requestedBy">
                <img src={video.requestedBy.img} alt="Requested By" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Queue;
