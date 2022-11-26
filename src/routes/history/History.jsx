import { Helmet } from "react-helmet-async";

import { historyCover } from "../../assets";
import { SectionGpCard } from "../../components";

export default function History() {
  return (
    <>
      <Helmet>
        <title>History | Greenpeace Indonesia</title>
        <meta name="title" content="Sejarah Greenpeace Indonesia" />
        <meta
          name="description"
          content="Di tahun 1971, motivasi dan visi untuk menjadikan dunia menjadi hijau dan damai berawal. Sekelompok aktivis berlayar dari Vancouver, Canada dengan kapal nelayan tua, Phyllis Cormack. Mereka adalah para aktivis pendiri Greenpeace, mereka percaya bahwa setiap orang dapat melakukan perubahaan."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Greenpeace Indonesia" />
        <meta
          property="og:description"
          content="Di tahun 1971, motivasi dan visi untuk menjadikan dunia menjadi hijau dan damai berawal. Sekelompok aktivis berlayar dari Vancouver, Canada dengan kapal nelayan tua, Phyllis Cormack. Mereka adalah para aktivis pendiri Greenpeace, mereka percaya bahwa setiap orang dapat melakukan perubahaan."
        />
        <meta property="og:image" content="/greenpeace-indonesia-home.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Greenpeace Indonesia" />
        <meta
          property="twitter:description"
          content="Di tahun 1971, motivasi dan visi untuk menjadikan dunia menjadi hijau dan damai berawal. Sekelompok aktivis berlayar dari Vancouver, Canada dengan kapal nelayan tua, Phyllis Cormack. Mereka adalah para aktivis pendiri Greenpeace, mereka percaya bahwa setiap orang dapat melakukan perubahaan."
        />
        <meta
          property="twitter:image"
          content="/greenpeace-indonesia-home.png"
        />
      </Helmet>
      <div className="flex flex-col gap-8 pb-16 md:gap-8 xl:gap-12">
        <figure className="">
          <img
            src={historyCover}
            alt="Homepage Hero"
            className="-z-50 max-h-[732px] min-h-[286px] w-full bg-contain bg-no-repeat object-cover"
          />
          <div className="relative -top-8 left-4 w-max overflow-hidden bg-[url('/src/assets/images/green-full-artboard.png')] bg-cover bg-no-repeat object-cover pr-4 pb-4 md:left-8 md:-top-12 lg:left-[11%] lg:pr-6 lg:pb-6 2xl:left-[14%]">
            <div className="bg-white p-3 shadow-xl md:py-6 md:px-8">
              <h1 className="font-montserrat text-2xl font-bold text-green-gp-400 sm:text-3xl md:text-4xl lg:text-5xl">
                Sejarah Greenpeace
              </h1>
            </div>
          </div>
        </figure>
        <div className="m-auto flex flex-col gap-20 lg:w-10/12 lg:gap-32">
          <section className="basic-padding flex flex-col gap-6 lg:gap-12">
            <h2 className="font-montserrat text-2xl font-bold text-submarine-gp-500 md:text-[28px] 2xl:text-3xl">
              Awal Mula Greenpeace
            </h2>
            <article className="m-auto flex flex-col gap-4 xl:pl-8 2xl:pl-12">
              <p>
                <strong className="font-montserrat text-sm font-semibold sm:text-base lg:text-lg 2xl:text-xl 2xl:leading-9">
                  Di tahun 1971, motivasi dan visi untuk menjadikan dunia
                  menjadi hijau dan damai berawal. Sekelompok aktivis berlayar
                  dari Vancouver, Canada dengan kapal nelayan tua, Phyllis
                  Cormack. Mereka adalah para aktivis pendiri Greenpeace, mereka
                  percaya bahwa setiap orang dapat melakukan perubahaan.
                </strong>
              </p>
              <p className="font-source-sans-pro text-sm leading-6 md:text-base xl:text-lg 2xl:leading-9">
                Misi mereka untuk menyaksikan dampak buruk dari uji coba nuklir
                yang di lakukan Amerika Serikat di Amchitka, sebuah pulau kecil
                di pesisir barat Alaska, yang merupakan tempat perlindungan
                terakhir bagi 3.000 berang-berang dan rumah elang kepala botak
                dan satwa liar lainnya.
              </p>
              <p className="font-source-sans-pro text-sm leading-6 md:text-base xl:text-lg 2xl:leading-9">
                Walaupun mereka menggunakan kapal tua bernama Phyllis Cormack,
                yang mengalami berbagai halangan sebelum sampai di Alaska,
                perjalanan mereka menimbulkan banyak perhatian publik.
              </p>

              <p className="font-source-sans-pro text-sm leading-6 md:text-base xl:text-lg 2xl:leading-9">
                Amerika Serikat masih terus mendanai uji coba bom nuklir di
                Amchitka, tapi suara penolakan terus bergaung dan akhirnya
                didengar. Pada tahun yang sama, uji coba nuklir berakhir pada
                tahun yang sama, dan pulau tersebut dideklarasikan menjadi suaka
                alam untuk burung.
              </p>
              <p className="font-source-sans-pro text-sm leading-6 md:text-base xl:text-lg 2xl:leading-9">
                Kini, Greenpeace menjadi organisasi internasional yang
                berkampanye untuk perlindungan lingkungan secara global yang
                berkantor pusat di Amsterdam, Belanda. Greenpeace mempunyai 2,8
                juta pendukung di seluruh dunia dan memiliki kantor regional di
                41 negara
              </p>
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
