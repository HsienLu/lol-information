import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface SkillHoverCardProps {
  HoverComponent: React.ComponentType;
  newData: any
}

const SkillHoverCard: React.FC<SkillHoverCardProps> = ({ HoverComponent,newData }) => {
  return (
    <HoverCard openDelay={100} >
      <HoverCardTrigger>
        <HoverComponent />
      </HoverCardTrigger>
      <HoverCardContent className="w-1/2" align="start">
        {newData}
      </HoverCardContent>
    </HoverCard>
  );
}

export default SkillHoverCard;