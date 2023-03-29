import { Configuration, OpenAIApi } from "openai";

import type { NextApiRequest, NextApiResponse } from "next";
import type { CreateCompletionResponse } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateCompletionResponse>
) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "You are a storyteller in a text adventure game. Present the player with a scenario",
    temperature: 0.5,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  res.status(200).json(response.data);
}
