import { useState, useEffect } from "react";
import Markdown from "react-markdown";

interface MarkdownViewerProps {
  folderPath: string;
  fileName: string;
}

function MarkdownViewer({ folderPath, fileName }: MarkdownViewerProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      setLoading(true);
      setError(null);

      try {
        const filePath = `/${folderPath}/${fileName}`;
        const response = await fetch(filePath);

        if (!response.ok) {
          throw new Error(`無法載入文件: ${fileName}`);
        }

        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : "未知錯誤");
      } finally {
        setLoading(false);
      }
    };

    if (folderPath && fileName) {
      loadMarkdown();
    }
  }, [folderPath, fileName]);

  if (loading) {
    return (
      <div className="text-center py-8 text-gray-500 text-lg">載入中...</div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded my-4">
        錯誤: {error}
      </div>
    );
  }

  return (
    <div className="prose prose-slate max-w-none leading-relaxed text-gray-700">
      <Markdown
        components={{
          // Todo: video link or embedding/
          img: ({ ...props }) => (
            <img
              {...props}
              src={
                props?.src?.startsWith("http")
                  ? props.src
                  : `/${folderPath}/${props.src}`
              }
              alt={props.alt}
            />
          ),
          a: ({ ...props }) => {
            if (props.href?.endsWith(".pdf")) {
              return (
                <div className="pdf-container">
                  <iframe
                    src={`/${folderPath}/${props.href}`}
                    width="100%"
                    height="600px"
                    title={fileName}
                  />
                </div>
              );
            }
            return (
              <a href={props.href} {...props} className="font-bold">
                {props.children}
              </a>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default MarkdownViewer;
