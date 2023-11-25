import { z } from 'zod';

const UserFullNameFullNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(25, { message: 'First name must be between 1 and 25 characters' }),
  lastName: z
    .string()
    .min(1)
    .max(25, { message: 'Last name must be between 1 and 25 characters' }),
});

const UserAddressValidationSchema = z.object({
  street: z
    .string()
    .min(1)
    .max(25, { message: 'Street must be between 1 and 25 characters' }),
  city: z
    .string()
    .min(1)
    .max(25, { message: 'City must be between 1 and 25 characters' }),
  country: z
    .string()
    .min(1)
    .max(25, { message: 'Country must be between 1 and 25 characters' }),
});

const UserOrdersValidationSchema = z.object({
  productName: z
    .string()
    .min(1)
    .max(25, { message: 'Product name must be between 1 and 25 characters' }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  quantity: z
    .number()
    .min(1, { message: 'Quantity must be a positive number' }),
});

const UserValidationSchema = z.object({
  userId: z.number().positive({ message: 'User ID must be a positive number' }),
  username: z
    .string()
    .min(1)
    .max(25, { message: 'Username must be between 1 and 25 characters' }),
  password: z
    .string()
    .min(1)
    .max(25, { message: 'Password must be between 1 and 25 characters' }),
  fullName: UserFullNameFullNameSchema,
  age: z.number().positive({ message: 'Age must be a positive number' }),
  email: z
    .string()
    .email({ message: 'Invalid email format' })
    .max(25, { message: 'Email must be between 1 and 25 characters' }),
  isActive: z.boolean(),
  hobbies: z.array(
    z
      .string()
      .min(1)
      .max(25, { message: 'Hobby must be between 1 and 25 characters' }),
  ),
  address: UserAddressValidationSchema,
  orders: z.array(UserOrdersValidationSchema).optional(),
});

export default UserValidationSchema;
