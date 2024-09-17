function HomePage() {
  return (
    <>
      {/* 主要內容 */}
      <main className="container mx-auto mt-8 p-4">
        {/* 英雄橫幅 */}
        <div className="relative mb-12">
          <img
            src="/api/placeholder/1200/400"
            alt="Heroes Banner"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent rounded-lg"></div>
          <div className="absolute bottom-4 left-4">
            <h1 className="text-4xl font-bold mb-2">一起闖進大世界</h1>
            <p className="text-lg">季中賽事火熱進行中</p>
          </div>
        </div>

        {/* 搜索欄 */}
        <div className="relative mb-12">
          <input
            type="text"
            placeholder="搜索英雄、物品或新聞..."
            className="w-full py-3 px-6 pr-12 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 遊戲模式選擇 */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {["召喚峽谷", "嚎哭深淵", "團隊戰術家"].map((mode) => (
            <div
              key={mode}
              className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-center hover:bg-opacity-75 transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{mode}</h3>
            </div>
          ))}
        </div>

        {/* 英雄列表 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">熱門英雄</h2>
          <div className="grid grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-800 bg-opacity-50 p-2 rounded-lg text-center hover:bg-opacity-75 transition cursor-pointer"
              >
                <img
                  src={`/api/placeholder/100/${100 + i}`}
                  alt={`Hero ${i + 1}`}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p className="text-sm">英雄 {i + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 最新資訊 */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">最新消息</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-75 transition cursor-pointer"
                >
                  <h3 className="font-semibold mb-2">新聞標題 {i + 1}</h3>
                  <p className="text-sm text-gray-400">簡短的新聞描述...</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">近期賽事</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-75 transition cursor-pointer"
                >
                  <h3 className="font-semibold mb-2">賽事名稱 {i + 1}</h3>
                  <p className="text-sm text-gray-400">賽事時間和地點</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-black bg-opacity-50 mt-12 py-6">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>&copy; 2024 英雄聯盟資訊站. 版權所有.</p>
        </div>
      </footer>
    </>
  );
}
export default HomePage;
