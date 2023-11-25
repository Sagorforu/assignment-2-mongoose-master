import UserModel from '../user.schema.model';
import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};
const getAllUsersIntoDB = async (user: User) => {
  const result = await UserModel.find(user);
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersIntoDB,
};
