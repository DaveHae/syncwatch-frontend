import User from './User.model';

export default interface Video {
  title: string;
  url: string;
  img: string;
  requestedBy: User;
}
