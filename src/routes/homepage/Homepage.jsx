import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  bgIntroAbout1,
  bgIntroAbout2,
  greenBigOutlineHalfOutboard,
  greenLineIllustration,
  greenOutlineHalfArtboard,
  homepageHero,
} from "../../assets";
import { getPostsData } from "../../features/posts/postsSlice";

import {
  ActivistDigitalCard,
  HomepageArticles,
  HomepageSection,
  HomepageSkeleton,
} from "./components";

export default function Homepage() {
  const { postData, isLoading } = useSelector((store) => store.posts);
  const { digitalActivistData } = useSelector((store) => store.homepage);

  const [currentArticleNumber, setCurrentArticleNumber] = useState(1);
  const dispatch = useDispatch();
  const URL = import.meta.env.VITE_POSTS_API_1;

  useEffect(() => {
    dispatch(getPostsData(URL));
  }, []);

  const currentArticle = useMemo(
    () => postData[currentArticleNumber - 1],
    [currentArticleNumber, postData]
  );

  return (
    <>
      <Helmet>
        <title>Beranda | Greenpeace Indonesia</title>
        <meta name="title" content="Beranda | Greenpeace Indonesia" />
        <meta
          name="description"
          content="Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Beranda | Greenpeace Indonesia" />
        <meta
          property="og:description"
          content="Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami."
        />
        <meta property="og:image" content="/greenpeace-indonesia-home.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Beranda | Greenpeace Indonesia"
        />
        <meta
          property="twitter:description"
          content="Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami."
        />
        <meta
          property="twitter:image"
          content="/greenpeace-indonesia-home.png"
        />
      </Helmet>
      <figure className="relative">
        <img
          src={homepageHero}
          alt="Homepage Hero"
          className="-z-50 max-h-[776px] min-h-[346px] w-full bg-contain bg-no-repeat object-cover"
        />
        <div className="absolute top-[45%] left-6 font-montserrat sm:left-10 md:left-20 lg:left-32 xl:left-40 2xl:left-44">
          <h1 className="my-2 text-2xl font-bold text-white md:text-4xl lg:my-4 lg:text-6xl">
            Semesta ku jatuh
          </h1>
          <h1 className="my-2 text-2xl font-bold text-white md:text-4xl lg:my-4 lg:text-6xl">
            hati pada mu.
          </h1>
        </div>
      </figure>
      <div className="flex flex-col items-center">
        <section className="basic-padding relative my-4 grid items-center gap-12 py-4 md:my-12 md:grid-cols-2 lg:mt-20 xl:my-20 2xl:gap-24">
          <div className="flex flex-col justify-between gap-4 lg:gap-8 xl:gap-12">
            <img
              src={greenLineIllustration}
              className="hidden h-full object-cover md:block"
              alt="Green Line Illustration"
            />

            <div className="flex flex-col gap-2 lg:gap-4">
              <div>
                <h1 className="mb-3 mt-8 font-montserrat text-3xl font-bold text-green-600 lg:text-5xl ">
                  Tentang Kami
                </h1>
                <h2 className="my-5 mb-3 font-montserrat text-lg text-black lg:text-2xl">
                  Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh
                  solusi. Butuh perubahan. Butuh aksi.
                </h2>
              </div>
              <p className="mb-4 font-source-sans-pro text-base text-black lg:text-lg ">
                Di seluruh dunia, kita berdiri bersama-sama dengan masyarakat,
                menuntut pertanggung jawaban berbagai pemerintahan dan
                perusahaan untuk bertanggung jawab. Mulai dari jalanan hingga ke
                tempat para pengambil keputusan, kita mempunyai kekuatan nyata
                jika kita bekerja sama.
              </p>
            </div>
            <Link
              to="/about"
              className="flex w-max items-center gap-5 bg-orange-500 py-4 px-6 font-source-sans-pro text-lg font-bold leading-tight text-white shadow-md transition 
              duration-150 ease-in-out hover:bg-orange-600 hover:shadow-lg lg:py-5 lg:px-14 lg:text-xl"
            >
              <FaRegCircle className="h-6 w-6 text-current" /> Tentang Kami
            </Link>
          </div>
          <div className="relative hidden h-full md:block lg:h-[420px]">
            <img
              className="hidden object-cover shadow-2xl lg:absolute lg:-top-4 lg:-right-0 lg:block"
              src={bgIntroAbout1}
              alt="Greenpeace Cover 1"
            />
            <img
              className="h-full object-cover shadow-2xl lg:absolute lg:-bottom-4 lg:-left-4 lg:h-auto"
              src={bgIntroAbout2}
              alt="Greenpeace Cover 2"
            />
          </div>
        </section>
        <HomepageSection
          headerText="Artikel Terbaru"
          descriptionText="Baca tentang beberapa kemenangan, tragedi, dan momen penting lainnya dari Greenpeace 50 tahun terakhir."
        >
          {isLoading && <HomepageSkeleton />}
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
