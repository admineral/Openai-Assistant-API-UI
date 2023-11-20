// Capabilities.tsx
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

const FormSchema = z.object({
  Knowledge_Retrieval: z.boolean().default(false).optional(),
});

interface CapabilitiesProps {
  knowledgeRetrieval: boolean;
  setKnowledgeRetrieval: React.Dispatch<React.SetStateAction<boolean>>;
}

const Capabilities: React.FC<CapabilitiesProps> = ({ knowledgeRetrieval, setKnowledgeRetrieval }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Knowledge_Retrieval: knowledgeRetrieval,
    },
  });

  const { watch } = form;
  const watchKnowledgeRetrieval = watch("Knowledge_Retrieval", false); // Hier setzen wir den Standardwert auf false

  React.useEffect(() => {
    if (watchKnowledgeRetrieval !== undefined) {
      setKnowledgeRetrieval(watchKnowledgeRetrieval);
    }
  }, [watchKnowledgeRetrieval]);


  return (
    <div className="bg-gray-800 p-4 rounded-lg -ml-1 mr-3 mt-2 -mb-14">
      <Form {...form}>
        <form className="w-full space-y-6">
          <div>
            <h3 className="mb-6 text-lg font-medium">Capabilities</h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="Knowledge_Retrieval"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Knowledge Retrieval
                      </FormLabel>
                      <FormDescription>
                        Search your knowledge base for relevant information.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* ... other form fields ... */}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Capabilities;