import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { collections, connectToDatabase } from "../../../middleware/database";

const handler = nextConnect<NextApiRequest, NextApiResponse>();
//http://localhost:3000/api/users/findByEmail?email=binh@gmail.com
handler.get(async (req, res, next) => {
  try {
    await connectToDatabase();

    const paraQuery = req!.query;
    const user = await collections.user?.findOne(paraQuery);
    res.send(user);
  } catch (error: any) {
    res.send(error.message);
  }
});
export default handler;
