import {HeroDetailsCarousel} from "@/components/HeroDetailsCarousel";
import {Card} from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";
import useGetData from "@/hooks/useGetData";

import {useEffect} from "react";
import {useParams} from "react-router-dom";

function HeroDetails() {

  const heroname = useParams();
  const heroName: string | undefined = heroname.heroname;
  const {data} = useFetch(
    `${import.meta.env.VITE_API_URL}/champion/${heroName}.json`
  );
  const newData = useGetData(data, heroName);
  useEffect(()=>{
    console.log(newData)
  },[newData])
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${
          import.meta.env.VITE_IMG_URL
        }/img/champion/centered/${heroName}_0.jpg)`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="container mx-auto">
        <section className="g-glossy">
          <h2 className="text-center leading-normal text-3xl font-bold text-white py-5">
            {newData.name}-{newData.title}
          </h2>

          <main>
            <div className="flex ">
              <section className="ml-20 w-2/6">
                <HeroDetailsCarousel
                  heroName={heroName ?? "defaultHeroName"}
                  newData={newData ?? "defaultNewData"}
                ></HeroDetailsCarousel>
              </section>
              <section className="text-group-intro text-white w-4/6 pr-12 flex flex-col">
                <div className="text-box-story flex-grow">
                  <h3 className="text-xl font-semibold mb-2">故事</h3>
                  <p>{newData.lore}</p>
                </div>
                <main className="group-main flex justify-between flex-grow">
                  <div className="group-ability ">
                    <h3 className="text-xl font-semibold mb-2">能力值</h3>
                    {newData.stats ? (
                      <p>
                        HP: {newData.stats.hp}
                        <br />
                        HP per level: {newData.stats.hpperlevel}
                        <br />
                        MP: {newData.stats.mp}
                        <br />
                        MP per level: {newData.stats.mpperlevel}
                        <br />
                        Move speed: {newData.stats.movespeed}
                        <br />
                        Armor: {newData.stats.armor}
                        <br />
                        Armor per level: {newData.stats.armorperlevel}
                        <br />
                        Spell block: {newData.stats.spellblock}
                      </p>
                    ) : (
                      <p>能力值資料不可用</p>
                    )}
                  </div>
                  <div className="group-hint">
                    <h3 className="text-xl font-semibold mb-2">遊玩提示</h3>
                    <section className="text-group-intro text-white flex flex-col">
                      <h3 className="text-lg font-semibold ">友方提示</h3>
                      <ul>
                        {newData?.allytips?.map((tip: any, index: any) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>

                      <h3 className="text-lg font-semibold mt-2">敵方提示</h3>
                      <ul>
                        {newData?.enemytips?.map((tip: any, index: any) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </main>
                <section className="text-group-spell flex justify-around">
                  <div className="group">
                    <h4>{newData.passive?.name}</h4>
                    <Card className=" w-16 h-16 border-0   overflow-hidden">
                      <img
                        src={`${
                          import.meta.env.VITE_IMG_URL
                        }/14.3.1/img/passive/${newData?.image?.full}`}
                        alt=""
                      />
                      {/* Aatrox_Passive */}
                    </Card>
                  </div>
                  {newData?.spells?.map((v: any) => {
                    return (
                      <div className="group" key={v.id}>
                        <h4>{v.name}</h4>
                        <Card className=" w-16 h-16 border-0  overflow-hidden">
                          <img
                            src={`${
                              import.meta.env.VITE_IMG_URL
                            }/14.3.1/img/spell/${v.id}.png`}
                            alt=""
                          />
                        </Card>
                      </div>
                    );
                  })}
                </section>
              </section>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
export default HeroDetails;
