import MarkdownFolder from "../components/MarkdownFolder";

function TechnicalAnalysis() {
  const folderName = "analysis"
  const technicalDocs = Object.keys(
    import.meta.glob("/analysis/*.md", { eager: false })
  ).map((path) => path.replace(`/${folderName}/`, ""));

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 min-h-[500px]">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 border-b-4 border-blue-500 pb-3">
        技術分析與相關文獻
      </h1>
      <p className="text-gray-600">此頁面將展示技術分析與相關文獻內容。</p>
      <MarkdownFolder folderPath={folderName} fileList={technicalDocs} />
    </div>
  );
}

export default TechnicalAnalysis;
