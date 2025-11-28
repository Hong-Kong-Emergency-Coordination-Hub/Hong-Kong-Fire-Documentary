import MarkdownFolder from "../components/MarkdownFolder";

function Timeline() {
  const folderName = "timeline";
  const timelineDocs = Object.keys(
    import.meta.glob("/timeline/*.md", { eager: false })
  ).map((path) => path.replace(`/${folderName}/`, ""));

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 min-h-[500px]">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 border-b-4 border-blue-500 pb-3">
        時間線（按時序整理）
      </h1>
      <p className="text-gray-600">此頁面將展示按時序整理的時間線內容。</p>
      <MarkdownFolder folderPath={folderName} fileList={timelineDocs} />
    </div>
  );
}

export default Timeline;
