import { Configuration, OpenAIApi, ImagesResponse } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.DALLE_API_KEY,
});

const openai = new OpenAIApi(configuration);

console.log("Configuration", configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImagesResponse>
) {
  const response = await openai.createImage({
    prompt:
      req.body.prompt +
      " style should be 8 bit video game graphic in pastel colors",
    n: 1,
    size: "512x512",
  });

  res.status(200).json(response.data);
}
