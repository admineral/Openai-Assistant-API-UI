// Apikey.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Modal, { Styles } from 'react-modal';

interface ApikeyProps {
  onApiKeySubmit: (key: string) => void;
  isOpen: boolean;
}

const apiKeyLength = 40;



const customStyles: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40%', // Set the width to 40% of the screen width
    height: 'auto', // Set the height to auto
    padding: '20px', // Add some padding
    display: 'flex', // Use flexbox for layout
    flexDirection: 'column', // Stack the children vertically
    alignItems: 'center', // Center the children horizontally
    justifyContent: 'center', // Center the children vertically
  },
};

const Apikey: React.FC<ApikeyProps> = ({ onApiKeySubmit, isOpen }) => {
  const [userapikey, setUserApikey] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onApiKeySubmit(userapikey); // Use the onApiKeySubmit function
  }

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Label htmlFor="apikey" style={{ marginBottom: '10px' }}>
          API Key
        </Label>
        <Input
          id="apikey"
          type="password"
          placeholder="sk-################################"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserApikey(e.target.value)
          }
          autoFocus
          style={{ marginBottom: '20px' }}
        />
        <Button type="submit" disabled={userapikey.length < apiKeyLength}>
          Save
        </Button>
      </form>
    </Modal>
  );
};

export default Apikey;