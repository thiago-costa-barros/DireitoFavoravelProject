import dotenv from 'dotenv';
import { NextApiRequest } from 'next';

dotenv.config();

export const verifyToken = (req: NextApiRequest): boolean => {
    const token = process.env.MY_SECRET_TOKEN;
    const receivedToken = req.headers['x-hotmart-hottok'];
    return token === receivedToken;
  };