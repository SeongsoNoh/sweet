import client from "@lib/server/client";
import withHandler, { ResponseType } from "@lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const tweets = await client.tweet.findMany({
      select: {
        id: true,
        favs: true,
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

  if (req.method === "POST") {
    const {
      body: { content },
      session: { user },
    } = req;

    const tweet = await client.tweet.create({
      data: {
        content,
        image: "xx",
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      tweet,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
