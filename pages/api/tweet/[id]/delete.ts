import client from "@lib/server/client";
import withHandler, { ResponseType } from "@lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
  } = req;

  await client.tweet.delete({
    where: {
      id: +id!.toString(),
    },
  });

  res.json({
    ok: true,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
