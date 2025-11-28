import MarkdownFolder from "../components/MarkdownFolder";

function GovernmentDocs() {
  const folderName = "docs"
  const governmentlDocs = Object.keys(
    import.meta.glob("/docs/*.md", { eager: false })
  ).map((path) => path.replace(`/${folderName}/`, ""));

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 min-h-[500px]">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 border-b-4 border-blue-500 pb-3">
        政府文件、部門回覆及公開信件
      </h1>
      <p className="text-gray-600">
        此頁面將展示政府文件、部門回覆及公開信件內容。
      </p>
      <MarkdownFolder folderPath={folderName} fileList={governmentlDocs} />
    </div>
  );
}

export default GovernmentDocs;
