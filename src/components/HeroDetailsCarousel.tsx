import {Card, CardContent} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export function HeroDetailsCarousel({
  heroName,
  newData,
}: {
  heroName: string;
  newData: any;
}) {

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent className="">
          {newData?.skins?.map((v:any,i:any)=>{
            return(

          <CarouselItem className="" key={i}>
            <div className="">
              <Card className="border-0 bg-transparent">
                <CardContent className=" flex aspect-square items-center justify-center p-1">
                  <img
                    className=""
                    src={`${
                      import.meta.env.VITE_API_URL
                    }/img/champion/loading/${heroName}_${v.num}.jpg`}
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
            )
          })}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent text-slate-100 border-0 -left-8" />
      <CarouselNext className="bg-transparent text-slate-100 border-0 -right-8" />
    </Carousel>
  );
}
