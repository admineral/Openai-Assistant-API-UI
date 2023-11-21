import OpenAI from "openai";

const openai = new OpenAI();

export async function delete_assistant_api(assistant_id: string) {
  console.log("Deleting assistant with ID:", assistant_id);
  await openai.beta.assistants.del(assistant_id);
  return `Deleted assistant with ID: ${assistant_id}`;
}