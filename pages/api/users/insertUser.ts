import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { collections, connectToDatabase } from "../../../middleware/database";
import { useSession, signIn } from "next-auth/react";

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.post(async (req, res) => {
  // const { data: session } = useSession();

  const user = req.body;

  console.log(user);
  try {
    await connectToDatabase();

    let userData = {
      email: user?.email,
      fullname: user?.name,
      nickname: user?.name,
      last_active: new Date(),
      isOnline: true,
      photoUserUrl: user?.avatar,
    };

    console.log(userData);
    // console.log(req);
    // await collections.user?.insertOne(userData);
    res.send(req.body);
  } catch (error: any) {
    res.send(error.message);
  }
});
export default handler;
