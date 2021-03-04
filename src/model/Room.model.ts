import User from './User.model';
import Video from './Video.model';

export default interface Room {
  id: number;
  currentVideo: Video;
  currentTimestamp: number;
  users: User[];
  videoList: Video[];
}
