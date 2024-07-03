import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { useEffect } from "react";
// 定義 Props 的類型
interface HeroAvatarCardProps {
    heroPicURL: string;
    heroName: string;
  }
function HeroAvatarCard({heroPicURL,heroName}:HeroAvatarCardProps) {
    

  return (
    <>
      <div className="w-max-content">
        <Avatar>
          <AvatarImage src={heroPicURL} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="p-4 text-center">{heroName}</p>
      </div>
    </>
  );
}
export default HeroAvatarCard;
