import MarkdownFolder from "../components/MarkdownFolder";

function VolunteerSupport() {
  const folderName = "support";
  const supportlDocs = Object.keys(
    import.meta.glob("/support/*.md", { eager: false })
  ).map((path) => path.replace(`/${folderName}/`, ""));
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 min-h-[500px]">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 border-b-4 border-blue-500 pb-3">
        義工及社區支援資訊
      </h1>
      <p className="text-gray-600">此頁面將展示義工及社區支援資訊內容。</p>
      <MarkdownFolder folderPath={folderName} fileList={supportlDocs} />
    </div>
  );
}

export default VolunteerSupport;
