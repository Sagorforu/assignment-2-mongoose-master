import { Schema, model } from 'mongoose';

import {
  User,
  UserAddress,
  UserFullName,
  UserOrders,
} from './user/user.interface';

const userFullNameSchema = new Schema<UserFullName>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
});
const addressSchema = new Schema<UserAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});
const ordersSchema = new Schema<UserOrders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema<User>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  fullName: userFullNameSchema,
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: [{ type: String, required: true }],
  address: addressSchema,
  orders: [{ ordersSchema }],
});

const UserModel = model<User>('User', userSchema);
export default UserModel;
