import MarkdownFolder from "../components/MarkdownFolder";

function SitePhotos() {
  const folderName = "photos";
  const sitePhotoDocs = Object.keys(
    import.meta.glob("/photos/*.md", { eager: false })
  ).map((path) => path.replace(`/${folderName}/`, ""));

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 min-h-[500px]">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 border-b-4 border-blue-500 pb-3">
        現場圖片及相關紀錄
      </h1>
      <p className="text-gray-600">此頁面將展示現場圖片及相關紀錄內容。</p>
      <MarkdownFolder folderPath={folderName} fileList={sitePhotoDocs} />
    </div>
  );
}

export default SitePhotos;
