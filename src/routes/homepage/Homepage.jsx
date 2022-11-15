import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { homepageHero } from "../../assets";

import {
  ActivistDigitalCard,
  HomepageArticles,
  HomepageSection,
} from "./components";

export default function Homepage() {
  const { postsData, isLoading } = useSelector((store) => store.posts);
  const { digitalActivistData } = useSelector((store) => store.homepage);
  const [currentArticleNumber, setCurrentArticleNumber] = useState(1);
  const currentArticle = useMemo(
    () => postsData[currentArticleNumber - 1],
    [currentArticleNumber, postsData]
  );

  return (
    <>
      <figure>
        <img
          src={homepageHero}
          alt="Homepage Hero"
          className="-z-50 max-h-[776px] min-h-[286px] w-full bg-contain bg-no-repeat object-cover"
        />
      </figure>
      <div className="flex flex-col">
        <HomepageSection
          headerText="Artikel Terbaru"
          descriptionText="Baca tentang beberapa kemenangan, tragedi, dan momen penting lainnya dari Greenpeace 50 tahun terakhir."
        >
          {isLoading && <h1>Loading ...</h1>}
          {postsData && !isLoading && (
            <HomepageArticles
              key={currentArticle.id}
              {...currentArticle}
              onSetCurrentArticleNumber={setCurrentArticleNumber}
              currentArticleNumber={currentArticleNumber}
            />
          )}
        </HomepageSection>

        <HomepageSection
          headerText="Menjadi Aktivis Digital"
          descriptionText="Perkembangan zaman semakin dinamis, teknologi informasi salah satu yang paling cepat berubah. Saat ini untuk menyuaraan isu-isu perlindungan lingkungan tidak hanya melalui kegiatan konvensional saja. Jadilah bagian dari aktivis digital untuk mengatakan isu perlindungan lingkungan. Apa sih yang bisa kita lakukan di dunia."
        >
          <div className="relative flex w-full flex-col items-center gap-8 p-4 md:p-8 lg:p-12">
            <img
              src="/src/assets/images/green-big-outline-half-artboard.png"
              alt="Artboard Ilustration"
              className="absolute top-[calc(3rem+3rem)] bottom-0 hidden h-1/2 rotate-180 bg-cover object-contain lg:right-0 lg:top-[13%] lg:block lg:w-10/12 xl:top-[calc(3rem+3rem)] xl:right-0 xl:w-auto 2xl:right-0 3xl:right-[2%]"
            />
            <img
              src="/src/assets/images/green-big-outline-half-artboard.png"
              alt="Artboard Ilustration"
              className="absolute bottom-[calc(3rem+3rem)] hidden bg-cover object-contain lg:left-0 lg:bottom-[15%] lg:block lg:w-10/12 xl:-left-0 xl:bottom-[calc(3rem+3rem)] xl:w-auto 2xl:left-0 3xl:left-[2%]"
            />
            <img
              src="/src/assets/images/green-outline-half-artboard.png"
              alt="Artboard Ilustration"
              className="absolute top-[calc(3rem+3rem)] hidden bg-contain xl:left-[10%] xl:block 3xl:left-[12%]"
            />
            <img
              src="/src/assets/images/green-outline-half-artboard.png"
              alt="Artboard Ilustration"
              className="absolute bottom-[calc(3rem+3rem)] hidden rotate-180 bg-contain xl:right-[10%] xl:block 3xl:right-[12%]"
            />
            {digitalActivistData.map((data) => (
              <ActivistDigitalCard {...data} key={data.id} />
            ))}
          </div>
        </HomepageSection>
      </div>
    </>
  );
}
