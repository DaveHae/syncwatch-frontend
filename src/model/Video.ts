import User from './User';

export default interface Video {
  title: string,
  url: string,
  img: string,
  requestedBy: User
}