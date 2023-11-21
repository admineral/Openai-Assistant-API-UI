import OpenAI from "openai";
import { ChatCompletionCreateParams } from "openai/resources/chat/index";

import { create_assistant_api } from './create_assistant_api';
import { delete_assistant_api } from './delete_assistant_api';
import { create_thread_api } from './create_thread_api';
import { list_messages_api } from './list_messages_api';


// Andere Datei
import { create_assistant as create_assistantParams } from './create_assistant';
import { delete_assistant as delete_assistantParams } from './delete_assistant';
import { create_thread as create_threadParams } from './create_thread';
import { list_messages as list_messagesParams } from './list_messages';


export const functions: ChatCompletionCreateParams.Function[] = [
  
  create_assistantParams,
  delete_assistantParams,
  create_threadParams,
  list_messagesParams,
  
];

export async function runFunction(name: string, args: any) {
  switch (name) {
    case "create_assistant":
      return await create_assistant_api(args.model, args.name, args.description, args.instructions, args.tools);
    case "delete_assistant":
      return await delete_assistant_api(args.assistant_id);
    case "create_thread":
      return await create_thread_api(args.messages);
    case "list_messages":
      return await list_messages_api(args.thread_id, args.limit);
    default:
      
      return null;
  }
}