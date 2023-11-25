import UserModel from '../user.schema.model';
import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};
const getAllUsersFromDB = async (user: User) => {
  const result = await UserModel.find(user, {
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};
const getSingleUserFromDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId: userId });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
