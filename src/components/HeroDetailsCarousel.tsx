import {Card, CardContent} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {useEffect} from "react";
export function HeroDetailsCarousel({
  heroName,
  newData,
}: {
  heroName: string;
  newData: any;
}) {
  useEffect(() => {
    console.log(heroName);
    console.log(newData.skins);
  }, []);

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent className="">
        {Array.from({length: 5}).map((_, index) => (
          <CarouselItem className="" key={index}>
            <div className="">
              <Card className="border-0 bg-transparent">
                <CardContent className=" flex aspect-square items-center justify-center p-1">
                  <img
                    className=""
                    src={`${
                      import.meta.env.VITE_IMG_URL
                    }/img/champion/loading/Aatrox_0.jpg`}
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent text-slate-100 border-0 -left-8" />
      <CarouselNext className="bg-transparent text-slate-100 border-0 -right-8" />
    </Carousel>
  );
}
