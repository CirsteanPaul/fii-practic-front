import IUserModel from '../user/IUserModel';

interface IRecruitResponse {
  id: number;
  userId: number;
  codingScore: number;
  psychologyScore: number;
  calmScore: number;
  assertiveScore: number;
  agreeableScore: number;
  gender: number;
  personalityType: number;
  totalScore: number;
  numberOfFollowers: number;
  numberOfFollowings: number;
  user: IUserModel;
}

export default IRecruitResponse;
