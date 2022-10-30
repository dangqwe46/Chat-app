import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { collections, connectToDatabase } from "../../../middleware/database";

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res, next) => {
  try {
    await connectToDatabase();
    const user = await collections.user!.find().toArray();
    console.log(user[1].fullname);

    // res.send(user);
  } catch (error: any) {
    res.send(error.message);
  }
});
export default handler;
