// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import { surfClient } from "../../../lib/surfClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  switch (method) {
    case "PATCH":
      res.status(200).json(
        await surfClient.update(req, res, {
          schema: "trug-user",
          id: query?.id as string,
          data: req.body,
        })
      );
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
