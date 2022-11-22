import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

import {
  greenBigOutlineHalfOutboard,
  greenOutlineHalfArtboard,
  homepageHero,
} from "../../assets";

import {
  ActivistDigitalCard,
  HomepageArticles,
  HomepageSection,
} from "./components";

export default function Homepage() {
  const { postData, isLoading } = useSelector((store) => store.posts);
  const { digitalActivistData } = useSelector((store) => store.homepage);

  const [currentArticleNumber, setCurrentArticleNumber] = useState(1);

  const currentArticle = useMemo(
    () => postData[currentArticleNumber - 1],
    [currentArticleNumber, postData]
  );

  return (
    <>
      <Helmet>
        <title>Home | Greenpeace Indonesia</title>
        <meta name="title" content="Greenpeace Indonesia" />
        <meta
          name="description"
          content="Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Greenpeace Indonesia" />
        <meta
          property="og:description"
          content="Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami."
        />
        <meta
          property="og:image"
          content="/src/assets/images/greenpeace-indonesia-home.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Greenpeace Indonesia" />
        <meta
          property="twitter:description"
          content="Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami."
        />
        <meta
          property="twitter:image"
          content="/src/assets/images/greenpeace-indonesia-home.png"
        />
      </Helmet>
      <figure className="relative">
        <img
          src={homepageHero}
          alt="Homepage Hero"
          className="-z-50 max-h-[776px] min-h-[286px] w-full bg-contain bg-no-repeat object-cover"
        />
        <div className="absolute top-[45%] left-8 font-montserrat sm:left-10 md:left-20 lg:left-32 xl:left-40 2xl:left-44">
          <h1 className="my-1 text-lg font-bold text-white sm:text-2xl md:text-4xl lg:my-4 lg:text-6xl">
            Semesta ku jatuh
          </h1>
          <h1 className="my-1 text-lg font-bold text-white sm:text-2xl md:text-4xl lg:my-4 lg:text-6xl">
            hati pada mu.
          </h1>
        </div>
      </figure>

      <section></section>

      <div className="flex flex-col">
        <HomepageSection
          headerText="Artikel Terbaru"
          descriptionText="Baca tentang beberapa kemenangan, tragedi, dan momen penting lainnya dari Greenpeace 50 tahun terakhir."
        >
          {isLoading && <h1>Loading ...</h1>}
          {postData && !isLoading && (
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
              src={greenBigOutlineHalfOutboard}
              alt="Artboard Ilustration"
              className="absolute top-[calc(3rem+3rem)] bottom-0 hidden h-1/2 rotate-180 bg-cover object-contain lg:right-0 lg:top-[13%] lg:block lg:w-10/12 xl:top-[calc(3rem+3rem)] xl:right-0 xl:w-auto 2xl:right-0 3xl:right-[2%]"
            />
            <img
              src={greenBigOutlineHalfOutboard}
              alt="Artboard Ilustration"
              className="absolute bottom-[calc(3rem+3rem)] hidden bg-cover object-contain lg:left-0 lg:bottom-[15%] lg:block lg:w-10/12 xl:-left-0 xl:bottom-[calc(3rem+3rem)] xl:w-auto 2xl:left-0 3xl:left-[2%]"
            />
            <img
              src={greenOutlineHalfArtboard}
              alt="Artboard Ilustration"
              className="absolute top-[calc(3rem+3rem)] hidden bg-contain xl:left-[8%] xl:block 3xl:left-[12%]"
            />
            <img
              src={greenOutlineHalfArtboard}
              alt="Artboard Ilustration"
              className="absolute bottom-[calc(3rem+3rem)] hidden rotate-180 bg-contain xl:right-[8%] xl:block 3xl:right-[12%]"
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
