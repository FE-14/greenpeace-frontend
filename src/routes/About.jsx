import { Helmet } from "react-helmet-async";

import { bgIntroAbout1, bgIntroAbout2 } from "../assets";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Greenpeace Indonesia</title>
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
        <meta property="og:image" content="/greenpeace-indonesia-home.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Greenpeace Indonesia" />
        <meta
          property="twitter:description"
          content="Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami."
        />
        <meta
          property="twitter:image"
          content="/greenpeace-indonesia-home.png"
        />
      </Helmet>
      <figure className="absolute -z-10 h-[calc(100vh/1.25)] w-screen opacity-[12%]">
        <img
          src={bgIntroAbout2}
          className="flex h-full w-full bg-cover object-cover"
          alt="Greenpeace Cover 2"
        />
      </figure>

      <section className="basic-padding my-20 flex flex-col gap-8 lg:my-32">
        <div className="flex flex-col gap-4 font-montserrat">
          <h1 className="text-3xl font-bold text-green-gp-400 md:text-4xl lg:text-5xl 2xl:text-6xl">
            Tentang Kami
          </h1>
          <div className="flex flex-col gap-2 sm:w-3/4 lg:w-1/2 xl:w-2/5">
            <h2 className="text-lg font-semibold">
              Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh
              solusi. Butuh perubahan. Butuh aksi.
            </h2>
            <p className="font-source-sans-pro text-sm md:text-base">
              Di seluruh dunia, kita berdiri bersama-sama dengan masyarakat,
              menuntut pertanggung jawaban berbagai pemerintahan dan perusahaan
              untuk bertanggung jawab. Mulai dari jalanan hingga ke tempat para
              pengambil keputusan, kita mempunyai kekuatan nyata jika kita
              bekerja sama.
            </p>
          </div>
        </div>
        <figure className="relative bg-red-800 lg:h-[762px] lg:max-h-[762px]">
          <img
            src={bgIntroAbout1}
            className="h-full w-full object-cover"
            alt="Greenpeace Cover 1"
          />
        </figure>

        <div
          className={`relative -top-32 left-0 max-w-[600px] overflow-hidden bg-[url("/src/assets/images/green-full-artboard.png")] bg-cover
bg-no-repeat object-cover pr-8 pb-8 md:left-8 lg:left-16 xl:left-24 xl:max-w-[648px]`}
        >
          <div className="bg-white">
            <p className="p-4 font-source-sans-pro md:py-6 md:px-8">
              12 orang berangkat dari Vancouver, Kanada menggunakan kapal
              bernama Phyllis Cormack, di dalam foto ini, namanya ditutupi
              dengan Greenpeace, untuk memprotes uji coba bom nuklir Amerika
              Serikat di Amchitka, Alaska. Ini adalah sebagian dari mereka
              sedang berfoto di haluan kapal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
