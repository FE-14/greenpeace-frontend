import { Helmet } from "react-helmet-async";

import { historyCover } from "../../assets";
import { Card } from "../../components";

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
      <figure className="relative">
        <img
          src={historyCover}
          alt="Homepage Hero"
          className="-z-50 max-h-[732px] min-h-[286px] w-full bg-contain bg-no-repeat object-cover"
        />
        <div
          className={`absolute -bottom-20 overflow-hidden bg-[url("/src/assets/images/green-full-artboard.png")] bg-cover bg-no-repeat object-cover
pr-4 pb-4 xs:-bottom-16 sm:left-4 md:left-8 lg:left-16 lg:-bottom-20 lg:pr-8 lg:pb-8 xl:left-24`}
        >
          <div className="bg-white p-4 shadow-xl md:py-6 md:px-8">
            <h1 className="font-montserrat text-xs font-bold text-green-gp-400 sm:text-sm lg:text-6xl">
              Sejarah Greenpeace
            </h1>
          </div>
        </div>
      </figure>

      <section className="basic-padding mt-40">
        <div className=" flex flex-col gap-8 font-montserrat">
          <h2 className="text-4xl font-semibold text-submarine-gp-500 ">
            Awal Mula Greenpeace
          </h2>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 col-start-2">
              <p className=" xl:text-xl">
                <strong className="leading-9 tracking-wide">
                  Di tahun 1971, motivasi dan visi untuk menjadikan dunia
                  menjadi hijau dan damai berawal. Sekelompok aktivis berlayar
                  dari Vancouver, Canada dengan kapal nelayan tua, Phyllis
                  Cormack. Mereka adalah para aktivis pendiri Greenpeace, mereka
                  percaya bahwa setiap orang dapat melakukan perubahaan.
                </strong>
              </p>
              <p className="font-source-sans-pro font-normal leading-7">
                Misi mereka untuk menyaksikan dampak buruk dari uji coba nuklir
                yang di lakukan Amerika Serikat di Amchitka, sebuah pulau kecil
                di pesisir barat Alaska, yang merupakan tempat perlindungan
                terakhir bagi 3.000 berang-berang dan rumah elang kepala botak
                dan satwa liar lainnya.
                <br />
                <br />
                Walaupun mereka menggunakan kapal tua bernama Phyllis Cormack,
                yang mengalami berbagai halangan sebelum sampai di Alaska,
                perjalanan mereka menimbulkan banyak perhatian publik.
                <br />
                <br />
                Amerika Serikat masih terus mendanai uji coba bom nuklir di
                Amchitka, tapi suara penolakan terus bergaung dan akhirnya
                didengar. Pada tahun yang sama, uji coba nuklir berakhir pada
                tahun yang sama, dan pulau tersebut dideklarasikan menjadi suaka
                alam untuk burung.
                <br />
                <br />
                Kini, Greenpeace menjadi organisasi internasional yang
                berkampanye untuk perlindungan lingkungan secara global yang
                berkantor pusat di Amsterdam, Belanda. Greenpeace mempunyai 2,8
                juta pendukung di seluruh dunia dan memiliki kantor regional di
                41 negara
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="basic-padding">
        <div className="mt-36 mb-10 text-center font-montserrat text-4xl font-semibold text-submarine-gp-500">
          Lainnya Tentang Kami
        </div>
        <div className="container mx-auto mb-4 justify-center gap-8 px-6 font-montserrat sm:flex">
          <Card type="about" />
          <Card type="victory" />
        </div>
      </section>
    </>
  );
}
