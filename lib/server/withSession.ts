import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: "carrot-twitterSession",
  password:
    "thisisCarrotTwitterSession1q2w3e4r5t!@#$%thisisCarrotTwitterSession1q2w3e4r5t!@#$%thisisCarrotTwitterSession1q2w3e4r5t!@#$%thisisCarrotTwitterSession1q2w3e4r5t!@#$%",
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
