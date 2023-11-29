// NameDescriptionInstructions.tsx
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string(),
  instructions: z.string(),
});

interface NameDescriptionInstructionsProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  instructions: string;
  setInstructions: React.Dispatch<React.SetStateAction<string>>;
}

const NameDescriptionInstructions: React.FC<NameDescriptionInstructionsProps> = ({ name, setName, instructions, setInstructions }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      instructions,
    },
  });

  return (
    <FormProvider {...form}>
      <div className="bg-gray-800 p-7 rounded-lg -ml-4 mt-2">
        <form className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input 
                    className="bg-gray-700 border border-gray-600 text-white w-full px-4 py-3 rounded" 
                    id="name" 
                    placeholder="Name your GPT" 
                    onChange={(e) => {
                      setName(e.target.value);
                      field.onChange(e);
                    }}
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <textarea 
                    className="bg-gray-700 border border-gray-600 text-white w-full px-4 py-3 rounded h-36" 
                    id="instructions" 
                    placeholder="What does this GPT do? How does it behave? What should it avoid doing?" 
                    onChange={(e) => {
                      setInstructions(e.target.value);
                      field.onChange(e);
                    }}
                    value={field.value}
                  ></textarea>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </div>
    </FormProvider>
  );
};

export default NameDescriptionInstructions;