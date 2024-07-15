import {HeroDetailsCarousel} from "@/components/HeroDetailsCarousel";

function HeroDetails() {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${
          import.meta.env.VITE_IMG_URL
        }/img/champion/centered/Pyke_0.jpg)`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="container mx-auto">
        <section className="g-glossy">
          <h2 className="text-center leading-normal text-3xl font-bold text-white py-5">
            派克
          </h2>
          <aside className="ml-20 ">
            <HeroDetailsCarousel></HeroDetailsCarousel>
          </aside>
          <main></main>
        </section>
      </div>
    </div>
  );
}
export default HeroDetails;
