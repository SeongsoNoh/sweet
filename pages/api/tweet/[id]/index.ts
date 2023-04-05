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
    session: { user },
  } = req;
  const tweet = await client.tweet.findUnique({
    where: {
      id: +id!.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          userName: true,
        },
      },
      answers: {
        select: {
          answer: true,
          id: true,
          createAt: true,
          user: {
            select: {
              id: true,
              userName: true,
            },
          },
        },
        orderBy: [
          {
            createAt: "desc",
          },
        ],
      },
      _count: {
        select: {
          answers: true,
          favs: true,
        },
      },
    },
  });
  const isLiked = Boolean(
    await client.fav.findFirst({
      where: {
        tweetId: tweet?.id,
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );
  res.json({ ok: true, tweet, isLiked });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
