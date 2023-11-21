// app/api/chat/create_thread.ts

export const create_thread = {
    name: "create_thread",
    description: "Create a thread.",
    parameters: {
      type: "object",
      properties: {
        messages: {
          type: "array",
          description: "A list of messages to start the thread with. Optional.",
          items: {
            type: "object",
            properties: {
              role: {
                type: "string",
                description: "The role of the entity that is creating the message. Currently only 'user' is supported.",
                enum: ["user"],
              },
              content: {
                type: "string",
                description: "The content of the message.",
              },
            },
            required: ["role", "content"],
          },
        },
      },
    },
};