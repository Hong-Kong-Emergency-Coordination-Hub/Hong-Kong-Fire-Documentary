import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-4 py-4">
          <Link
            to="/"
            className="text-white px-5 py-3 rounded hover:bg-slate-600 transition-colors text-sm whitespace-nowrap"
          >
            技術分析與相關文獻
          </Link>
          <Link
            to="/government-docs"
            className="text-white px-5 py-3 rounded hover:bg-slate-600 transition-colors text-sm whitespace-nowrap"
          >
            政府文件、部門回覆及公開信件
          </Link>
          <Link
            to="/news-media"
            className="text-white px-5 py-3 rounded hover:bg-slate-600 transition-colors text-sm whitespace-nowrap"
          >
            新聞報道及官方資料
          </Link>
          <Link
            to="/site-photos"
            className="text-white px-5 py-3 rounded hover:bg-slate-600 transition-colors text-sm whitespace-nowrap"
          >
            現場圖片及相關紀錄
          </Link>
          <Link
            to="/volunteer-support"
            className="text-white px-5 py-3 rounded hover:bg-slate-600 transition-colors text-sm whitespace-nowrap"
          >
            義工及社區支援資訊
          </Link>
          <Link
            to="/timeline"
            className="text-white px-5 py-3 rounded hover:bg-slate-600 transition-colors text-sm whitespace-nowrap"
          >
            時間線（按時序整理）
          </Link>
          <Link
            to="/video-footage"
            className="text-white px-5 py-3 rounded hover:bg-slate-600 transition-colors text-sm whitespace-nowrap"
          >
            現場片段及來源
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar