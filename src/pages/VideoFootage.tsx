import MarkdownFolder from "../components/MarkdownFolder";

function VideoFootage() {
  const folderName = "videos";
  const videoslDocs = Object.keys(
    import.meta.glob("/videos/*.md", { eager: false })
  ).map((path) => path.replace("/videos/", ""));

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 min-h-[500px]">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 border-b-4 border-blue-500 pb-3">
        現場片段及來源
      </h1>
      <p className="text-gray-600">此頁面將展示現場片段及來源內容。</p>
      <MarkdownFolder folderPath={folderName} fileList={videoslDocs} />
    </div>
  );
}

export default VideoFootage;
