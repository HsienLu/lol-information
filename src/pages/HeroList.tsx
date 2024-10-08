import HeroAvatarCard from "@/components/HeroAvatarCard";
import {Badge} from "@/components/ui/badge";
import {VersionContext} from "@/context/versionContext";
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useCookie from "@/hooks/useCookie";
function HeroList() {
  const [heroData, setHeroNameData] = useState<Array<object>>([]);
  const [badgeType, setBadgeType] = useState([
    "Marksman",
    "Mage",
    "Assassin",
    "Tank",
    "Fighter",
    "Support",
  ]);
  const [tagStates, setTagStates] = useState<{[key: string]: boolean}>({
    Marksman: true,
    Mage: true,
    Assassin: true,
    Tank: true,
    Fighter: true,
    Support: true,
  });
  const tags = Object.keys(tagStates);
  const lolInformationVersionByCookie = useCookie("lol-information-version");
  const newVersion = useContext(VersionContext) ?? lolInformationVersionByCookie ;
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/${newVersion}/data/zh_TW/champion.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let arrayData: object[] = Object.values(data.data);
        setHeroNameData(arrayData);
      })
      .catch((error) => console.error("Error", error));
  }, [newVersion]);

  let filterTagsData = heroData.filter((v: any) =>
    badgeType.some((tagV) => v.tags.includes(tagV))
  );
  useEffect(() => {
    console.log(filterTagsData);
  }, [filterTagsData]);
  return (
    <>
      <div className="container mx-auto ">
        <div className="mt-5 flex gap-5">
          {tags.map((tag) => (
            <Badge
              onClick={() => {
                setTagStates({
                  ...tagStates,
                  [tag]: !tagStates[tag],
                });
                let newBadgeType;
                if (badgeType.includes(tag)) {
                  // 如果 tag 已經在 badgeType 中，則移除它
                  newBadgeType = badgeType.filter((v) => v !== tag);
                } else {
                  // 如果 tag 不在 badgeType 中，則添加它
                  newBadgeType = [...badgeType, tag];
                }
                setBadgeType(newBadgeType);
              }}
              className="hover:cursor-pointer"
              variant={tagStates[tag] ? "default" : "outline"}
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="my-4 flex flex-wrap gap-[1.4rem] justify-start ">
          {filterTagsData.map((v: any) => {
            return (
              <Link key={v.id} to={`/hero-detail/${v.id}`}>
                <HeroAvatarCard
                  heroPicURL={`${
                    import.meta.env.VITE_API_URL
                  }/${newVersion}/img/champion/${v.image.full}`}
                  heroName={`${v.name}`}
                ></HeroAvatarCard>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default HeroList;
