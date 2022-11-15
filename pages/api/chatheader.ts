import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { collections, connectToDatabase } from "../../utils/database";

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  try {
    await connectToDatabase();
    const chatheader = await collections.chatheader?.findOne();
    res.send(chatheader);
    console.log(chatheader);
  } catch (error: any) {
    res.send(error.message);
  }
});
export default handler;
