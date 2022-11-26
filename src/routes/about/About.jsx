import { Helmet } from "react-helmet-async";

import { bgIntroAbout1, bgIntroAbout2 } from "../../assets";
import { SectionGpCard } from "../../components";

import { ArticleList } from "./components";

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

      <section className="basic-padding mt-20 flex flex-col gap-8 lg:mt-32">
        <div className="flex flex-col gap-4 font-montserrat">
          <h1 className="text-3xl font-bold text-green-gp-400 md:text-4xl lg:text-5xl 2xl:text-6xl">
            Tentang Kami
          </h1>
          <div className="flex flex-col gap-2 sm:w-3/4 lg:w-1/2 2xl:w-2/5">
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
          <div
            className={`absolute -bottom-20 h-max max-w-[600px] overflow-hidden bg-[url("/src/assets/images/green-full-artboard.png")] bg-cover bg-no-repeat object-cover
pr-4 pb-4 xs:-bottom-16 sm:left-4 md:left-8 lg:left-16 lg:-bottom-20 lg:pr-8 lg:pb-8 xl:left-24 xl:max-w-[648px]`}
          >
            <div className="bg-white">
              <p className="p-4 font-source-sans-pro text-xs sm:text-sm md:py-6 md:px-8 lg:text-base">
                12 orang berangkat dari Vancouver, Kanada menggunakan kapal
                bernama Phyllis Cormack, di dalam foto ini, namanya ditutupi
                dengan Greenpeace, untuk memprotes uji coba bom nuklir Amerika
                Serikat di Amchitka, Alaska. Ini adalah sebagian dari mereka
                sedang berfoto di haluan kapal.
              </p>
            </div>
          </div>
        </figure>
      </section>
      <div className="mb-20 mt-40 flex flex-col gap-16">
        <section className="basic-padding flex flex-col gap-8 font-montserrat">
          <h2
            className="w-1/2 font-montserrat text-3xl font-semibold
          tracking-wide text-submarine-gp-500 sm:w-3/4 md:text-4xl lg:w-2/5 xl:text-5xl"
          >
            Nilai Dasar
          </h2>
          <article className="lg:pl-20">
            <ul className="grid list-disc gap-4 px-2 lg:grid-flow-col lg:grid-rows-2 lg:px-0">
              <ArticleList>
                <strong>
                  Aksi tanpa kekerasan dan bertanggung jawab secara pribadi.
                  Kami beraksi dengan penuh kesadaran.
                </strong>
                &nbsp;Artinya kami siap bertanggung jawab untuk setiap aksi yang
                dilakukan, termasuk bertanggung jawab secara pribadi. Kami
                berkomitmen penuh terhadap perdamaian; semua aktivis Greenpeace
                yang mengikuti aksi telah mendapat pelatihan tentang aksi damai.
                Independensi. Sejak berdiri, Greenpeace tidak pernah menerima
                dana dari pemerintah, perusahaan atau partai politik manapun.
                Donasi individu adalah tulang punggung kampanye Greenpeace. Baca
                laporan audit tahunan di sini.
              </ArticleList>
              <ArticleList>
                <strong>Independensi</strong>&nbsp;Sejak berdiri, Greenpeace
                tidak pernah menerima dana dari pemerintah, perusahaan atau
                partai politik manapun. Donasi individu adalah tulang punggung
                kampanye Greenpeace. Baca laporan audit tahunan di sini.
              </ArticleList>
              <ArticleList>
                <strong>
                  Greenpeace tidak punya lawan atau kawan yang permanen.
                </strong>
                &nbsp;Jika sebuah pemerintahan atau perusahaan punya komitmen
                untuk membuat perubahan positif, kami akan bekerja sama demi
                mewujudkan perubahan itu. Tetapi jika komitmen itu berubah atau
                tidak dijalankan, kami akan kembali berkampanye. Yang terpenting
                adalah aksi nyata, bukan kata-kata.
              </ArticleList>
              <ArticleList>
                <strong>Mempromosikan solusi.</strong>&nbsp;Melakukan tekanan
                tidaklah cukup, kami merancang, melakukan riset dan
                mengkampanyekan langkah-langkah nyata demi terwujudnya masa
                depan yang hijau dan damai bagi kita semua.
              </ArticleList>
            </ul>
          </article>
        </section>

        <section className="basic-padding flex flex-col gap-8 font-montserrat">
          <h2
            className="w-3/4 font-montserrat text-3xl font-semibold
          tracking-wide text-submarine-gp-500 sm:w-3/4 md:text-4xl lg:w-2/5 xl:text-5xl"
          >
            Struktur Organisasi Greenpeace
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <article className="flex flex-col gap-4 lg:pl-20">
                <h3 className="text-2xl font-semibold">Rapat-Rapat</h3>
                <ul className="flex list-decimal flex-col gap-2 px-2 lg:px-0 ">
                  <ArticleList>
                    <strong>Rapat Anggota:</strong>&nbsp;Merupakan otoritas
                    tertinggi di dalam Perkumpulan Greenpeace Indonesia.
                  </ArticleList>
                  <ArticleList>
                    <strong>Rapat Pengurus:</strong>&nbsp;Merupakan rapat yang
                    dapat diadakan setiap waktu bila dipandang perlu atas
                    permintaan tertulis dari satu orang atau lebih Pengurus.
                  </ArticleList>
                  <ArticleList>
                    <strong>Rapat Pengawas:</strong>&nbsp;Merupakan rapat yang
                    dapat diadakan setiap waktu bila dianggap perlu atas
                    permintaan tertulis dari seorang atau lebih Pengawas.
                  </ArticleList>
                </ul>
              </article>
              <article className="flex flex-col gap-2 lg:pl-20">
                <h3 className="text-2xl font-semibold">Badan Pengurus</h3>
                <ul className="flex list-decimal flex-col gap-2 px-2 lg:px-0">
                  <ArticleList>
                    <strong>Ketua</strong>
                    <h4>Harry Surjadi</h4>
                  </ArticleList>
                  <ArticleList>
                    <strong>Sekretaris</strong>
                    <h4>Ir. Abdon Nababan</h4>
                  </ArticleList>
                  <ArticleList>
                    <strong>Bendahara</strong>
                    <h4>Yosep Adi Prestyo</h4>
                  </ArticleList>
                  <ArticleList>
                    <strong>Anggota</strong>
                    <h4>Wahyu Dhyatmika</h4>
                  </ArticleList>
                </ul>
              </article>
            </div>
            <article className="flex flex-col gap-2 lg:pl-20">
              <h3 className="text-2xl font-semibold">
                Kepala (Country Director)
              </h3>
              <p className="font-source-sans-pro">
                Dipilih dan ditetapkan serta bertanggung jawab kepada Badan
                Pengurus dalam pelaksanaan program-program Greenpeace Indonesia
                dan bertindak mewakili Perkumpulan dalam urusan-urusan hukum,
                baik di dalam maupun di luar Pengadilan.
              </p>
              <p className="font-source-sans-pro">
                Adapun susunan pelaksana program Greenpeace adalah sebagai
                berikut:
              </p>
              <ul className="flex list-decimal flex-col gap-2 px-2 lg:px-0">
                <ArticleList>
                  <strong>Country Director</strong>
                  <h4>Leonard Simanjuntak</h4>
                </ArticleList>
                <ArticleList>
                  <strong>Global Head of Indonesia Forest campaign</strong>
                  <h4>Kiki Taufik</h4>
                </ArticleList>
                <ArticleList>
                  <strong>Climate & Energy Manager</strong>
                  <h4>Tata Mustasya</h4>
                </ArticleList>
                <ArticleList>
                  <strong>Regional Oceans Campaign Coordinator</strong>
                  <h4>Arifsyah M Nasution</h4>
                </ArticleList>
                <ArticleList>
                  <strong>Urban Issue Campaigner</strong>
                  <h4>Muharram Atha R </h4>
                </ArticleList>
                <ArticleList>
                  <strong>Digital & Communication Manager</strong>
                  <h4>Afif Saputra</h4>
                </ArticleList>
                <ArticleList>
                  <strong>Public Engagement & Actions Manager</strong>
                  <h4>Khalisah Khalid</h4>
                </ArticleList>
                <ArticleList>
                  <strong>Human Resources Manager</strong>
                  <h4>Sofyan Siradj</h4>
                </ArticleList>
                <ArticleList>
                  <strong>Finance & Admin Manager</strong>
                  <h4>Pendy Salim</h4>
                </ArticleList>
              </ul>
            </article>
          </div>
        </section>
        <section className="basic-padding m-auto mt-20 flex flex-col items-center gap-8 lg:w-10/12 lg:gap-12">
          <h2 className="font-montserrat text-2xl font-bold text-submarine-gp-500 md:text-[28px] 2xl:text-3xl">
            Lainnya Tentang Kami
          </h2>
          <div className="grid w-full gap-4 xs:w-[90%] sm:w-3/4 md:w-full md:grid-cols-2 md:gap-6 lg:w-full 2xl:w-[90%] 3xl:w-4/5 ">
            <SectionGpCard type="history" />
            <SectionGpCard type="our-victory" />
          </div>
        </section>
      </div>
    </>
  );
}
