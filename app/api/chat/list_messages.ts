// app/api/chat/list_messages.ts

export const list_messages = {
    name: "list_messages",
    description: "Fetches a specified number of messages from a particular thread.",
    parameters: {
      type: "object",
      properties: {
        thread_id: {
          type: "string",
          description: "Identifier of the thread to fetch messages from.",
        },
        limit: {
          type: "integer",
          description: "Specifies the maximum number of messages to return. Can be any value between 1 and 100. Defaults to 20 if not provided.",
          default: 20
        }
      },
      required: ["thread_id"]
    }
};