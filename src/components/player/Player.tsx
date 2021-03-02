import './Player.scss';

interface IProps {
  url: string;
}

function Player(props: IProps) {
  return (
    <div className="player">
      <iframe
        title="Player"
        src={props.url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Player;
