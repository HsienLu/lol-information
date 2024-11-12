import HeroAvatarCard from "@/components/HeroAvatarCard";
import {Badge} from "@/components/ui/badge";
import {VersionContext} from "@/context/versionContext";
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useCookie from "@/hooks/useCookie";
function HeroList() {
  const [itemData, setItemNameData] = useState<Array<object>>([]);
  const [badgeType, setBadgeType] = useState([
    "AbilityHaste",
    "Active",
    "Armor",
    "ArmorPenetration",
    "AttackSpeed",
    "Aura",
    "Boots",
    "Consumable",
    "CooldownReduction",
    "CriticalStrike",
    "Damage",
    "GoldPer",
    "Health",
    "HealthRegen",
    "Jungle",
    "Lane",
    "LifeSteal",
    "MagicPenetration",
    "MagicResist",
    "Mana",
    "ManaRegen",
    "NonbootsMovement",
    "OnHit",
    "Slow",
    "SpellBlock",
    "SpellDamage",
    "SpellVamp",
    "Stealth",
    "Tenacity",
    "Trinket",
    "Vision",
  ]);
  const [tagStates, setTagStates] = useState<{[key: string]: boolean}>({
    AbilityHaste: true,
    Active: true,
    Armor: true,
    ArmorPenetration: true,
    AttackSpeed: true,
    Aura: true,
    Boots: true,
    Consumable: true,
    CooldownReduction: true,
    CriticalStrike: true,
    Damage: true,
    GoldPer: true,
    Health: true,
    HealthRegen: true,
    Jungle: true,
    Lane: true,
    LifeSteal: true,
    MagicPenetration: true,
    MagicResist: true,
    Mana: true,
    ManaRegen: true,
    NonbootsMovement: true,
    OnHit: true,
    Slow: true,
    SpellBlock: true,
    SpellDamage: true,
    SpellVamp: true,
    Stealth: true,
    Tenacity: true,
    Trinket: true,
    Vision: true,
  });
  const tags = Object.keys(tagStates);
  const lolInformationVersionByCookie = useCookie("lol-information-version");
  const newVersion =
    useContext(VersionContext) ?? lolInformationVersionByCookie;
  useEffect(() => {
    console.log(newVersion);
    fetch(`${import.meta.env.VITE_API_URL}/${newVersion}/data/zh_TW/item.json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let arrayData: object[] = Object.values(data.data);
        setItemNameData(arrayData);
      })
      .catch((error) => console.error("Error", error));
  }, [newVersion]);

  let filterTagsData = itemData.filter((v: any) =>
    badgeType.some((tagV) => v.tags.includes(tagV))
  );
  useEffect(() => {
    console.log(filterTagsData);
  }, [filterTagsData]);
  return (
    <>
      <div className="container mx-auto ">
        <div className="mt-5 flex gap-5 flex-wrap">
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
          {filterTagsData.map((v: any, index: number) => {
            return (
              <Link key={index} to={`/item-details/${v.id}`}>
                <HeroAvatarCard
                  heroPicURL={`${
                    import.meta.env.VITE_API_URL
                  }/${newVersion}/img/item/${v.image.full}`}
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
