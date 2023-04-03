import client from "@lib/server/client";
import withHandler, { ResponseType } from "@lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, userName, password } = req.body;
  const existUser = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (existUser) {
    res.status(409).json({ ok: false, error: "이미 있는 계정입니다." });
  } else {
    await client.user.create({
      data: {
        email,
        userName,
        password,
      },
    });

    return res.json({
      ok: true,
    });
  }
}

export default withHandler({ methods: ["POST"], handler, isPrivate: true });
