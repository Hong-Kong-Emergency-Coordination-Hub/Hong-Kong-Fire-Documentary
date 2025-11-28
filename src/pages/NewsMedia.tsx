import MarkdownFolder from "../components/MarkdownFolder";

function NewsMedia() {
  const folderName = "news";
  const newsMediaDocs = Object.keys(
    import.meta.glob("/news/*.md", { eager: false })
  ).map((path) => path.replace(`/${folderName}/`, ""));

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 min-h-[500px]">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 border-b-4 border-blue-500 pb-3">
        新聞報道及官方資料
      </h1>
      <p className="text-gray-600">此頁面將展示新聞報道及官方資料內容。</p>
      <MarkdownFolder folderPath={folderName} fileList={newsMediaDocs} />
    </div>
  );
}

export default NewsMedia;
