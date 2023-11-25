// import { Schema, model, connect } from 'mongoose';

type UserFullName = {
  firstName: string;
  lastName: string;
};
type UserAddress = {
  street: string;
  city: string;
  country: string;
};
type UserOrders = {
  productName: string;
  price: number;
  quantity: number;
};

export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: UserFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: UserAddress;
  orders: UserOrders[];
};

export default User;
