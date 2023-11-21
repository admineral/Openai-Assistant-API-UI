import OpenAI from "openai";

const openai = new OpenAI();


const myTool = {
    type: 'function' as const, // Use 'as const' to indicate this is a constant value
    function: {
      name: 'myFunctionName',
      parameters: {
        type: "object",
        properties: {}
      }
    }
  };

export async function create_assistant_api(
    model : string,
    name = null,
    description = null,
    instructions = null,
    tools: { type: string, function?: { name: string, parameters: object } }[] = []
  ) {
    // Validate tools
    const validTools = ["code_interpreter", "retrieval", "function"];
    tools.forEach(tool => {
        if (!validTools.includes(tool.type)) {
          throw new Error(`Invalid tool: ${tool.type}. Valid tools are ${validTools.join(", ")}`);
        }
      });


    const myAssistant = await openai.beta.assistants.create({
      model,
      name,
      description,
      instructions,
      tools: [myTool], // Pass the array of tool objects directly
    });
  
    // Log the assistant's ID
    console.log('Here is the Assistant ID' ,myAssistant.id);
  
    // Return a message with the assistant's ID
    return `Created assistant ${name} with ID: ${myAssistant.id}`;
}