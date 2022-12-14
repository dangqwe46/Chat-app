import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { collections, connectToDatabase } from "../../utils/database";

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res, next) => {
  try {
    await connectToDatabase();
    const user = await collections.user?.findOne();
    res.send(user);
    console.log(user);
  } catch (error: any) {
    res.send(error.message);
  }
});
export default handler;
