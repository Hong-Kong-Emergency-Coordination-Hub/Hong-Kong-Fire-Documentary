import { useState } from "react";
import MarkdownViewer from "./MarkdownViewer";

interface MarkdownFolderProps {
  folderPath: string;
  fileList: string[];
}

function MarkdownFolder({ folderPath, fileList }: MarkdownFolderProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const files = fileList ?? [];
  const effectiveSelectedFile =
    selectedFile && files.includes(selectedFile)
      ? selectedFile
      : files[0] ?? null;

  return (
    <div className="flex gap-8 min-h-[500px]">
      {files.length > 0 && (
        <>
          <div className="flex-none w-64 bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-blue-500">
              文件列表
            </h3>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li
                  key={index}
                  className={`px-4 py-3 rounded cursor-pointer transition-all text-sm ${
                    effectiveSelectedFile === file
                      ? "bg-blue-500 text-white font-medium"
                      : "text-slate-700 hover:bg-blue-50 hover:translate-x-1"
                  }`}
                  onClick={() => setSelectedFile(file)}
                >
                  {file.replace(".md", "")}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-white rounded-lg p-8 shadow-md overflow-y-auto">
            {effectiveSelectedFile && (
              <MarkdownViewer
                folderPath={folderPath}
                fileName={effectiveSelectedFile}
              />
            )}
          </div>
        </>
      )}
      {files.length === 0 && (
        <div className="text-center py-12 text-gray-500 text-lg w-full">
          <p>沒有找到任何文件</p>
        </div>
      )}
    </div>
  );
}

export default MarkdownFolder;
