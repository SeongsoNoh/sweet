import client from "@lib/server/client";
import withHandler, { ResponseType } from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = req.body;
  const foundUser = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (!foundUser) {
    return res.status(409).json({
      ok: false,
      error: "없는 계정입니다. 가입후 다시 로그인해주세요.",
    });
  } else {
    req.session.user = {
      id: foundUser.id,
    };
    await req.session.save();
    res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: true })
);
