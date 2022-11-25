import { Helmet } from "react-helmet-async";

import { artboardRectangle, historyCover } from "../../assets";
import { Card } from "../../components";

export default function History() {
  return (
    <>
      <Helmet>
        <title>History | Greenpeace Indonesia</title>
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
      <figure className="relative">
        <img
          src={historyCover}
          alt="Homepage Hero"
          className="-z-50 max-h-[732px] min-h-[286px] w-full bg-contain bg-no-repeat object-cover"
        />
        <img
          src={artboardRectangle}
          alt=""
          className="min-w-2/5 absolute -bottom-14 h-28 overflow-hidden object-cover sm:left-2 md:left-8 lg:left-12 xl:left-24 xl:max-w-[648px]"
        />
      </figure>

      <section className="basic-padding">
        <div className="m-auto font-montserrat">
          <h1 className="mt-36 mb-6 text-4xl font-semibold text-submarine-gp-500 ">
            Awal Mula Greenpeace
          </h1>
          <div className="m-auto  text-justify md:ml-14 md:mr-auto lg:ml-20 lg:mr-20">
            <h3 className="mb-4 font-semibold text-black">
              Di tahun 1971, motivasi dan visi untuk menjadikan dunia menjadi
              hijau dan damai berawal. Sekelompok aktivis berlayar dari
              Vancouver, Canada dengan kapal nelayan tua, Phyllis Cormack.
              Mereka adalah para aktivis pendiri Greenpeace, mereka percaya
              bahwa setiap orang dapat melakukan perubahaan.
            </h3>
            <p className="mb-5 font-normal lg:text-sm">
              Misi mereka untuk menyaksikan dampak buruk dari uji coba nuklir
              yang di lakukan Amerika Serikat di Amchitka, sebuah pulau kecil di
              pesisir barat Alaska, yang merupakan tempat perlindungan terakhir
              bagi 3.000 berang-berang dan rumah elang kepala botak dan satwa
              liar lainnya.
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
              Kini, Greenpeace menjadi organisasi internasional yang berkampanye
              untuk perlindungan lingkungan secara global yang berkantor pusat
              di Amsterdam, Belanda. Greenpeace mempunyai 2,8 juta pendukung di
              seluruh dunia dan memiliki kantor regional di 41 negara
            </p>
          </div>
        </div>
      </section>

      <section className="basic-padding">
        <div className="mt-36 mb-10 text-center font-montserrat text-4xl font-semibold text-submarine-gp-500">
          Lainnya Tentang Kami
        </div>
        <div className="container mx-auto mb-4 justify-center gap-8 px-6 font-montserrat sm:flex">
          <Card type="aboutUs" />
          <Card type="victory" />
        </div>
      </section>
    </>
  );
}
