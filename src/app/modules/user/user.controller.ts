import { Request, Response } from 'express';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { users: userData } = req.body;
    const result = await userServices.createUserIntoDB(userData);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not created. Try again !!!',
      error: error,
    });
  }
};

export const userControllers = {
  createUser,
};
