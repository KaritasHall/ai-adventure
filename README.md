
# AI Adventure :alien:

AI Adventure is an AI generated text adventure game. I used OpenAI api with models ChatGpt 4 to generate an interactive scenario and Dall-E to generate a matching image. AI adventure also features a blog made with Prismic where I have documented my weekly work.

This project is built with Next.js, Typescript and Vanilla Extract :cupcake: 
My main goals were to practice working with external data, and get more comfortable with Next and TS. This was my first time using Vanilla Extract, and I have come to really enjoy it! I used it to make several different color themes for both the game and blog. The game themes are triggered by certain keywords in the scenario, so if your random scenario features "forest" - you will get the Forest theme :herb:	The blog themes are randomly generated. You can read more about creating themes with Vanilla on my [blog](https://ai-adventure-snowy.vercel.app/blog/final-thoughts-about-vanilla-extract)
Another style feature I implemented are animations on keywords. I made a word filter that looks for certain words in the text and applies animation to them by giving wrapping them with a CSS class.

The main functionality of this application revolves around fetching and rendering data from the API. First a prompt is passed to the API (in backend) to get the opening scenario, then the user sends a response to that - that response along with the scenario gets put into an array of Dialogue History. When the user sends their response they are sending not only their answer but the whole dialogue history to give the AI context.

To get the image from Dall-E I take the first two sentences from the opening scenario + my style command, and send as a prompt. Originally I had a new image every scene, but that buuuurned up my tokens so to keep cost low I am only generating an image once. :money_mouth_face:	


## Overview of the data flow/ game loop:

![Screenshot 2023-04-18 at 13 21 52](https://user-images.githubusercontent.com/7037910/232790583-46f67af8-95e4-459f-a803-bb75974fd047.png)


Even though I didn't focus on design in this project I still wanted my game to have a certain look and feel. I was inspired by the mood and color palettes of classic text adventure games such as Zork and my favorite Sierra game Colonel's Bequest. I wanted high contrast and vibrant, slightly retro feel. I eventually settled on a pastel cyberpunk color vibe, opting for a slightly softer look that is easier on the eyes. You can checkout my [Figma](https://www.figma.com/file/WHyjthIMPEUTfBrgw4OiWn/Module-7?t=xPUJYU57TEPvrRRc-0) if you want to take a look at my moodboards, mvp and brainstorming ideas.

All images, error messages and loading messages are made using ChatGPT :tulip:	
