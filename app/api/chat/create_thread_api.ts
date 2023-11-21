import OpenAI from "openai";

const openai = new OpenAI();

export async function create_thread_api(messages = []) {
  const thread = await openai.beta.threads.create({
    messages,
  });

  // Log the thread's ID
  console.log('Here is the Thread ID' , thread.id);

  // Return a message with the thread's ID and the messages
  return {
    message: `Created thread with ID: ${thread.id}`,
    messages: messages
  };
}