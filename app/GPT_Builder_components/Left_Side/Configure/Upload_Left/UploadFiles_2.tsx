// my-app/app/GPT_Builder_components/Left_Side/Configure/Upload_Left/UploadFiles_2.tsx
import { prepareUploadFile, deleteUploadedFile } from '../../../../modules/assistantModules';
import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define the structure of the file data
interface FileData {
  name: string;
  fileId?: string;
  status?: 'uploading' | 'uploaded' | 'failed';
}

const UploadFiles_Configure = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const originalFiles: File[] = Array.from(selectedFiles);
    originalFiles.forEach(file => {
      const fileData: FileData = { name: file.name, status: 'uploading' };
      setFiles(currentFiles => [...currentFiles, fileData]);

      prepareUploadFile(file, setStatusMessage)
        .then(fileId => {
          setFiles(currentFiles =>
            currentFiles.map(f =>
              f.name === fileData.name ? { ...f, fileId, status: 'uploaded' } : f
            )
          );
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          setFiles(currentFiles =>
            currentFiles.map(f =>
              f.name === fileData.name ? { ...f, status: 'failed' } : f
            )
          );
        });
    });

    event.target.value = '';
  }, []);

  const handleDelete = useCallback((fileId: string) => {
    const fileIndex = files.findIndex(f => f.fileId === fileId);
    if (fileIndex === -1) return;

    deleteUploadedFile(fileId, setStatusMessage)
      .then(() => {
        setFiles(currentFiles => currentFiles.filter(f => f.fileId !== fileId));
        setStatusMessage(`File deleted successfully.`);
      })
      .catch(error => {
        console.error('Error deleting file:', error);
        setStatusMessage(`Failed to delete file.`);
      });
  }, [files]);

  
  return (
    <TooltipProvider>
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Knowledge</h1>
          {/* Placeholder for the right-aligned content, if any */}
          <div></div>
        </div>
        {/* File display grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {files.map((file, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 flex justify-between items-center relative">
              <div className="flex items-center">
                {/* Green dot indicates successful upload */}
                <span className={`h-3 w-3 rounded-full mr-2 ${file.status === 'uploaded' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {/* Truncate file name to fit the container */}
                <div className="truncate">
                  <p className="font-medium">{file.name.length > 10 ? `${file.name.substring(0, 10)}...` : file.name}</p>
                  <p className="text-sm text-gray-400">{file.status}</p>
                </div>
              </div>
              {/* Delete button appears on hover */}
              {file.fileId && file.status === 'uploaded' && (
                <button
                  className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white font-bold p-2 rounded-full text-xs"
                  onClick={() => file.fileId && handleDelete(file.fileId)}
                >
                  × {/* Close icon */}
                </button>
              )}
            </div>
          ))}
        </div>
        {/* Upload button */}
        <div className="text-center">
          <button
            className="bg-gray-200 text-gray-800 uppercase font-bold text-sm px-6 py-2 rounded shadow hover:bg-gray-300"
            onClick={() => document.getElementById('fileUpload')?.click()}
          >
            Upload files
          </button>
          <input
            id="fileUpload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
            multiple // Allow multiple file uploads
          />
        </div>
        {/* No status message to be displayed as per instructions */}
      </div>
    </TooltipProvider>
  );
  
  
  
  
  
};

export default UploadFiles_Configure;
