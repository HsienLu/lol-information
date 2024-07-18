import {HeroDetailsCarousel} from "@/components/HeroDetailsCarousel";
import {Card} from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";
import useGetData from "@/hooks/useGetData";

import {useEffect} from "react";
import {useParams} from "react-router-dom";

function HeroDetails() {
  const testArr = [1, 2, 3, 4];
  const heroname = useParams();
  const heroName = heroname.heroname;
  const {data} = useFetch(
    `${import.meta.env.VITE_API_URL}/champion/${heroName}.json`
  );
  const newData = useGetData(data, heroName);
  useEffect(() => {
    if (data) {
      if (heroName) {
        console.log(newData.title);
      }
    }
  }, [data]);
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
                <HeroDetailsCarousel></HeroDetailsCarousel>
              </section>
              <section className="text-group-intro w-4/6 pr-12 flex flex-col">
                <h3>故事</h3>
                <p className="flex-grow">{newData.lore}</p>
                <h3>能力值</h3>
                <p className="flex-grow">
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
                  <br />
                  Spell block per level: {newData.stats.spellblockperlevel}
                  <br />
                  Attack range: {newData.stats.attackrange}
                  <br />
                  HP regen: {newData.stats.hpregen}
                  <br />
                  HP regen per level: {newData.stats.hpregenperlevel}
                  <br />
                  MP regen: {newData.stats.mpregen}
                  <br />
                  MP regen per level: {newData.stats.mpregenperlevel}
                  <br />
                  Crit: {newData.stats.crit}
                  <br />
                  Crit per level: {newData.stats.critperlevel}
                  <br />
                  Attack damage: {newData.stats.attackdamage}
                  <br />
                  Attack damage per level: {newData.stats.attackdamageperlevel}
                  <br />
                  Attack speed per level: {newData.stats.attackspeedperlevel}
                  <br />
                  Attack speed: {newData.stats.attackspeed}
                </p>
                <section className="text-group-spell flex justify-around">
                  <div className="group">
                    <h4>{newData.passive?.name}</h4>
                    <Card className=" w-16 h-16 border-slate-950  ">
                      <img
                        src={`${
                          import.meta.env.VITE_IMG_URL
                        }/14.3.1/img/passive/${newData.name}_Passive.png`}
                        alt=""
                      />
                    </Card>
                  </div>
                  {testArr.map((v, i) => {
                    return (
                      <div className="group" key={i}>
                        <h4>{v}</h4>
                        <Card className=" w-16 h-16 border-slate-950">
                          <img
                            src={`${
                              import.meta.env.VITE_IMG_URL
                            }/14.3.1/img/passive/Aatrox_Passive.png`}
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
