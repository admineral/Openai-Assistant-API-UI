// app/api/chat/create_assistant.ts
export const create_assistant = {
  name: "create_assistant",
  description: "Create an assistant using 'gpt-3.5-turbo' or 'gpt-4-preview' models.",
  parameters: {
    type: "object",
    properties: {
      model: {
        type: "string",
        enum: ["gpt-3.5-turbo-1106", "gpt-4-1106-preview"],
        description: "Model ID to use.",
      },
      name: {
        type: "string",
        maxLength: 256,
        description: "Assistant's name.",
      },
      description: {
        type: "string",
        maxLength: 512,
        description: "Assistant's description.",
      },
      instructions: {
        type: "string",
        maxLength: 32768,
        description: "System instructions for the assistant",
      },
      tools: {
        type: "array",
        maxItems: 128,
        items: {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["code_interpreter", "retrieval", "function"],
            },
            function: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  maxLength: 64,
                },
                parameters: {
                  type: "object",
                },
              },
              required: ["name", "parameters"],
            },
          },
          required: ["type"],
        },
        description: "List of enabled tools. default: retrieval",
      },
    },
    required: ["model"],
  },
};