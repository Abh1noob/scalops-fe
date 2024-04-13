import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.request({
      url: `${process.env.NEXT_PUBLIC_APIURL}/catalogue/speak`,
      method: req.method,
      headers: req.headers,
      data: req.body,
    });

    res.status(response.status).json(response.data);
  } catch (error: any) {
    const axiosError = error as AxiosError;
    res.status(axiosError?.response?.status || 500).json(axiosError?.response?.data || { message: 'Internal Server Error' });
  }
};