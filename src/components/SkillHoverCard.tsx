import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useSanitizedHTML from "@/hooks/useSanitizedHTML";

interface SkillHoverCardProps {
  HoverComponent: React.ComponentType;
  newData: any;
}

const SkillHoverCard: React.FC<SkillHoverCardProps> = ({
  HoverComponent,
  newData,
}) => {
  const sanitizedContent = useSanitizedHTML(newData);
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger>
        <HoverComponent />
      </HoverCardTrigger>
      <HoverCardContent className="w-1/2" align="start">
        {sanitizedContent}
      </HoverCardContent>
    </HoverCard>
  );
};

export default SkillHoverCard;
