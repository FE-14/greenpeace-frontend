import { Helmet } from "react-helmet-async";

import { ourVictoryCover } from "../../assets";
import { SectionGpCard } from "../../components";

export default function OurVictory() {
  return (
    <>
      <Helmet>
        <title>History | Greenpeace Indonesia</title>
        <meta name="title" content="Sejarah Greenpeace Indonesia" />
        <meta
          name="description"
          content="Selama bertahun-tahun, Greenpeace telah melakukan suatu perubahan positif untuk lingkungan dunia dan juga termasuk Asia tenggara. Terima kasih atas bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk lingkungan!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Greenpeace Indonesia" />
        <meta
          property="og:description"
          content="Selama bertahun-tahun, Greenpeace telah melakukan suatu perubahan positif untuk lingkungan dunia dan juga termasuk Asia tenggara. Terima kasih atas bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk lingkungan!"
        />
        <meta property="og:image" content="/greenpeace-indonesia-home.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Greenpeace Indonesia" />
        <meta
          property="twitter:description"
          content="Selama bertahun-tahun, Greenpeace telah melakukan suatu perubahan positif untuk lingkungan dunia dan juga termasuk Asia tenggara. Terima kasih atas bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk lingkungan!"
        />
        <meta
          property="twitter:image"
          content="/greenpeace-indonesia-home.png"
        />
      </Helmet>

      <div className="flex flex-col gap-8 pb-16 md:gap-8 xl:gap-12">
        <figure className="">
          <img
            src={ourVictoryCover}
            alt="Our Victory Cover"
            className="-z-50 max-h-[732px] min-h-[286px] w-full bg-contain bg-no-repeat object-cover"
          />
          <div className="relative -top-8 left-4 w-max overflow-hidden bg-[url('/src/assets/images/green-full-artboard.webp')] bg-cover bg-no-repeat object-cover pr-4 pb-4 md:left-8 md:-top-12 lg:left-[11%] lg:pr-6 lg:pb-6 2xl:left-[14%]">
            <div className="bg-white p-3 shadow-xl md:py-6 md:px-8">
              <h1 className="font-montserrat text-2xl font-bold text-green-gp-400 sm:text-3xl md:text-4xl lg:text-5xl">
                Kemenangan
              </h1>
            </div>
          </div>
        </figure>
        <div className="m-auto mb-20 flex flex-col gap-20 lg:w-10/12 lg:gap-32">
          <section className="basic-padding flex flex-col gap-6 lg:gap-12">
            <h2 className="font-montserrat text-2xl font-bold text-submarine-gp-500 md:text-[28px] 2xl:text-3xl">
              Kemenangan Greenpeace
            </h2>
            <article className="m-auto flex flex-col gap-12 xl:pl-8 2xl:pl-12">
              <p>
                <strong className="font-montserrat text-sm font-semibold sm:text-base lg:text-lg 2xl:text-xl 2xl:leading-9">
                  Selama bertahun-tahun, Greenpeace telah melakukan suatu
                  perubahan positif untuk lingkungan dunia dan juga termasuk
                  Asia tenggara. Terima kasih atas bantuanmu. Inilah kemenangan
                  kita, inilah kemenangan untuk lingkungan!
                </strong>
              </p>
              <h2 className="font-montserrat text-xl font-bold lg:text-2xl">
                Dari 1999 Sampai Sekarang
              </h2>

              {/* accordion here */}
            </article>
          </section>
          <section className="basic-padding flex flex-col items-center gap-8 lg:gap-12">
            <h2 className="font-montserrat text-2xl font-bold text-submarine-gp-500 md:text-[28px] 2xl:text-3xl">
              Lainnya Tentang Kami
            </h2>
            <div className="grid w-full gap-4 xs:w-[90%] sm:w-3/4 md:w-full md:grid-cols-2 md:gap-6 lg:w-full 2xl:w-[90%] 3xl:w-4/5 ">
              <SectionGpCard type="about" />
              <SectionGpCard type="our-victory" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
