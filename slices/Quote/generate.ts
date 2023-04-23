import {
  ChatCompletionRequestMessage,
  Configuration,
  CreateChatCompletionResponse,
  OpenAIApi,
} from "openai";

import type { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log("Configuration", configuration);

// Here is the initial message that is sent to the API when the user first loads the page.
// We define the core behavior of the chatbot here
const initialMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "Behave as a text adventure game. Generate a starting location and introduction. Possible starting locations: forest, abandoned castle, mansion and cave.  Write your responses in the second person. Limit the chronology of your responses to the moments following any action I dictate. Do not summarize events or advance time in the game's story beyond the outcome of my actions. Use dialogue and concise, but detailed descriptions. At the end of your output include all items that I currently possess. Do not add items that I have not picked up or remove any items that I have not lost, dropped, etc. Game Parameters - Style:[ Like a combination of Zork and Colonel's bequest ]Themes:[Mystery, Adventure] Format your output like this: {Scenario description}, Numbered list of 2 to 3 likely commands suitable for narrative. Inventory: [items in my possession]",
};
// "You control a text adventure game. Present the player with a short but interesting scenario. You must always describe the scene from the player's perspective. The story should be slow paced. Keep each scenario short and precise, and end it by offering the player a choice of actions. The atmosphere of the game is mysterious.",

// This is the main handler function that is called when the user submits a message
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateChatCompletionResponse>
) {
  // The API expects an array of messages, so we need to check if the request body is empty
  // If the request body is empty, we set the prompt to be the initial message
  // I.e the user has just loaded the page and should be presented with the initial message/scenario
  let prompt;
  if (req.body.messages === undefined) {
    prompt = [initialMessage];
  } else if (req.body.messages.length === 0) {
    prompt = [initialMessage];
  } else {
    prompt = req.body.messages;
  }

  // Here we call the API and pass in the prompt
  const response = await openai.createChatCompletion({
    // model: "gpt-3.5-turbo",
    model: "gpt-4",
    messages: prompt,
    temperature: 0.5,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  res.status(200).json(response.data);
}
