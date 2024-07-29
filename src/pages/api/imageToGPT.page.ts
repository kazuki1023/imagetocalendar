import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import path from "path";

const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;

const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORSヘッダーを追加
  res.setHeader(
    "Access-Control-Allow-Origin",
    "chrome-extension://jpciacnampdoomkmfllkmdgdjdmojlfa",
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    // Preflightリクエストの処理
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    const { base64Image } = req.body;
    const authToken = req.headers.authorization;

    // トークンの検証
    if (!authToken || authToken !== `Bearer ${AUTH_TOKEN}`) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    // 命令書の読み込み
    const instructionsPath = path.join(process.cwd(), "src/prompt", "getDateFromImage.txt");
    console.log(instructionsPath);
    const instructions = fs.readFileSync(instructionsPath, "utf-8");

    try {
      const response = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: instructions },
              { type: "image_url", image_url: { url: base64Image } },
            ],
          },
        ],
      });

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
