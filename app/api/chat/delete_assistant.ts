
// app/api/chat/delete_assistant.ts

export const delete_assistant = {
    name: "delete_assistant",
    description: "Delete an assistant.",
    parameters: {
      type: "object",
      properties: {
        assistant_id: {
          type: "string",
          description: "The ID of the assistant to delete.",
        },
      },
      required: ["assistant_id"],
    },
};