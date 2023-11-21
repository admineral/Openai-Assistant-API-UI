import OpenAI from "openai";

const openai = new OpenAI();

export async function list_messages_api(thread_id: string, limit: number) {
  const messages = await openai.beta.threads.messages.list(thread_id, {
    limit: limit,
  });

  console.log('Here are the messages for the thread', messages.data);

  return {
    message: `List of messages for thread with ID: ${thread_id}`,
    messages: messages.data
  };
}