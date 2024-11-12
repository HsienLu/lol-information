import heroSection from "/images/HomePage/hero-section.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {VersionContext} from "@/context/versionContext";
import useCookie from "@/hooks/useCookie";
import {useContext, useEffect, useState} from "react";
import {HeroData as HeroDataTypes} from "../types/HeroTypes";
import {Link} from "react-router-dom";

function HomePage() {
  const [randomHeroData, setRandomHeroData] = useState<HeroDataTypes[]>([]);
  const lolInformationVersionByCookie = useCookie("lol-information-version");
  const newVersion =
    useContext(VersionContext) ?? lolInformationVersionByCookie;
  // 隨機選擇五個項目
  const getRandomItems = (
    arr: HeroDataTypes[],
    num: number
  ): HeroDataTypes[] => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/${newVersion}/data/zh_TW/champion.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let arrayData: HeroDataTypes[] = Object.values(data.data);
        let filterArrayHeroData = getRandomItems(arrayData, 5);
        setRandomHeroData(filterArrayHeroData);
        console.log(filterArrayHeroData);
      })
      .catch((error) => console.error("Error", error));
  }, [newVersion]);

  return (
    <>
      {/* 主要內容 */}
      <main className="container mx-auto mt-8 p-4">
        {/* 英雄橫幅 */}
        <div className="relative mb-12">
          <img
            src={heroSection}
            alt="Heroes Banner"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent rounded-lg"></div>
          <div className="absolute bottom-4 left-4">
            <h1 className="text-4xl font-bold mb-2 text-gray-400">
              一起闖進大世界
            </h1>
            <p className="text-lg text-gray-400">世界賽事火熱進行中</p>
          </div>
        </div>

        {/* 搜索欄 */}
        <div className="relative mb-12">
          <FontAwesomeIcon
            className="text-gray-300 absolute top-4 left-0"
            icon={faCoffee}
          />
          <input
            type="text"
            placeholder="搜索英雄、物品或新聞..."
            className="w-full py-3 px-6 pr-12 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 遊戲模式選擇 */}
        <div className="flex gap-4 mb-12 justify-evenly">
          {["召喚峽谷", "咆嘯深淵"].map((mode, i) => (
            <div
              key={mode}
              className="flex-none w-2/4 h-96 bg-gray-800 bg-opacity-50 p-4 rounded-lg text-center hover:bg-opacity-75 transition cursor-pointer"
              style={{
                backgroundImage: `url(/images/HomePage/map1${i + 1}.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-lg font-semibold bg-gray-800 bg-opacity-50 rounded-lg">
                {mode}
              </h3>
            </div>
          ))}
        </div>

        {/* 英雄列表 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">熱門英雄</h2>
          <div className="grid grid-cols-5 gap-4">
            {randomHeroData.map((v, i) => (
              <Link key={v.id} to={`/hero-detail/${v.id}`}>
                <div
                  key={i}
                  className="bg-gray-800 bg-opacity-50 rounded-lg text-center hover:bg-opacity-75 transition cursor-pointer"
                >
                  <img
                    src={`${
                      import.meta.env.VITE_API_URL
                    }/img/champion/centered/${v.id}_0.jpg`}
                    alt={`${v.name}`}
                    className="object-cover rounded-t-lg"
                  />
                  <p className="text-sm pt-2 pb-2">{v.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 最新資訊 */}
        {/* <div className="grid grid-cols-2 gap-8">
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
        </div> */}
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
