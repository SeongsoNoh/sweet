import client from "@lib/server/client";
import withHandler, { ResponseType } from "@lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const tweets = await client.tweet.findMany({
    where: {
      userId: req.session.user?.id,
    },
    select: {
      id: true,
      content: true,
      updateAt: true,
      user: true,
    },
    orderBy: [
      {
        createAt: "desc",
      },
    ],
  });
  res.json({
    ok: true,
    tweets,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
