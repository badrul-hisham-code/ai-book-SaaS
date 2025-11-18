import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a question related to books that focus
in research & folklore. You need to properly assist the user in finding
the related resources, make a summary of the books with reliable references.
Format your response in markdown to make it easier to render to a web page`;

// for HUGGING_FACE_TOKEN
const hf = new InferenceClient(import.meta.env.VITE_HUGGING_FACE_TOKEN);

export async function getRespondFromMistral(books: string) {
  try {
    const response = await hf.chatCompletion({
      // model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      model: "meta-llama/Llama-3.2-3B-Instruct",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have question related to ${books}. Please give me the content of the book in summarize version!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err: any) {
    console.error(err.message);
  }
}
