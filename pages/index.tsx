import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { INearBy } from "@/interface/INearBy";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
const montserrat = Montserrat({ subsets: ["latin"] });

type HomeProps = {
  nearBy: INearBy[];
  cards: any[];
};
export default function Home({ nearBy, cards }: HomeProps) {
  return (
    <>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto'>
        <section className='mt-6'>
          <h2 className={`${montserrat.className} text-4xl font-semibold pb-5`}>
            Explore Nearby
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {nearBy.map((n) => (
              <SmallCard key={n.img} nearBy={n}></SmallCard>
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide'>
            {cards?.map((card) => (
              <MediumCard key={card.img} card={card} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const nearByData = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const cards = [
    {
      img: "https://img.staticmb.com/mbphoto/locality/cropped_images/2022/Jan/25/Photo_h470_w1080/78847_JBCN-International-School_470_1080.jpg",
      title: "Outdoor Gateway",
    },
    {
      img: "https://img.staticmb.com/mbphoto/locality/cropped_images/2022/Jan/25/Photo_h470_w1080/78847_The-hotel-plaza2_470_1080.jpg",
      title: "Unique Stay",
    },
    {
      img: "https://img.staticmb.com/mbphoto/locality/cropped_images/2022/Jan/25/Photo_h470_w1080/78847_The-Hotel-Plaza1_470_1080.jpg",
      title: "Entire Home",
    },
    {
      img: "https://img.staticmb.com/mbphoto/locality/cropped_images/2022/Jan/25/Photo_h470_w1080/78847_The-Fern-Residency2_470_1080.jpg",
      title: "Pet Allowed",
    },
  ];
  const nearBy = await nearByData.json();
  return {
    props: {
      nearBy,
      cards,
      status: 200,
    },
  };
}
