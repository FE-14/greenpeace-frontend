import { Helmet } from "react-helmet-async";

import { ourVictoryCover } from "../../assets";
import { SectionGpCard } from "../../components";

import { Accordion } from "./components";

const victoriesData = [
  {
    title: "Pembangunan PLTU dan Perizinan Kelapa Sawit",
    year: 2018,
    victories: [
      "Menteri ESDM, Ignasius Jonan mengumumkan bahwa tidak akan ada lagi pembangunan PLTU baru khususnya di jaringan Jawa-Bali.",
      "Presiden Joko Widodo mengeluarkan Inpres moratorium izin perkebunan sawit, HTI, dan pertambangan.",
      "Wilmar, perusahaan kelapa sawit raksasa yang menguasai 80% perdagangan minyak sawit global, mengumumkan kebijakan nol deforestasi.",
    ],
  },
  {
    title: "Perizinan Tambang dan Kebijakan Hutan",
    year: 2017,
    victories: [
      "Kementerian Energi Sumber Daya Alam dan Mineral mencabut izin operasi dan produksi tambang milik PT. Mikgro Metal Perdana (MMP) di Pulau Bangka.",
      "Bank HSBC, secara global mempublikasikan kebijakan nol deforestasi, gambut dan eksploitasi, mencakup pendanaan perusahaan sawit.",
      "Setelah berjuang selama hampir satu dekade mempertahankan hutan mereka, masyarakat Kampung Manggroholo dan Sira, Papua Barat berhasil memperoleh izin pengelolaan Hutan Desa.",
    ],
  },
  {
    title: "Hak Hutan Adat, Gugatan Terkait Limbah, dan Kesepakatan Paris",
    year: 2016,
    victories: [
      "Untuk pertama kalinya Pemerintah secara resmi mengakui hak atas hutan adat. Upacara Peresmian Pengakuan Hutan Adat, dilaksanakan di Istana Negara pada Jumat, 30 Desember 2016. Presiden menyerahkan surat keputusan (SK) pengakuan hutan adat kepada sembilan komunitas masyarakat hukum adat dengan total luasan 13.122,3 hektare.",
      "Gugatan Koalisi Melawan Limbah yang terdiri dari Greenpeace, Walhi Jawa Barat, Pawapeling dan LBH Bandung dikabulkan di Pengadilan Tata Usaha Negeri (PTUN) Bandung pada Selasa, 24 Mei 2016. Gugatan dilayangkan kepada Bupati Sumedang yang telah menerbitkan Izin Pembuangan Limbah Cair (IPLC) untuk PT Kahatex, PT Insan Sandang dan PT Five Star.",
      "Indonesia meratifikasi Kesepakatan Paris, dan menentukan NDC (National Determined Contribution) atau penurunan emisi sebesar 29%, dan 41% dengan bantuan internasional.",
    ],
  },
  {
    title: "Kebijakan Deforestasi dengan Perusahaan Kertas APRIL",
    year: 2015,
    victories: [
      "Salah satu perusahaan kertas raksasan, APRIL, milik Royal Golden Eagle Group mengumumkan kebijakan mengakhiri deforestasi di Indonesia.",
    ],
  },
  {
    title: "Kebijakan Konservasi Hutan dari Perusahaan Kertas Asia Pupl",
    year: 2013,
    victories: [
      "Perusahaan kertas raksasa Asia Pulp and Paper mengumumkan Kebijakan Konservasi Hutan baru mereka yang tidak akan melakukan ekspansi industri lebih di hutan dan lahan gambut.",
    ],
  },
  {
    title: "Komitmen Perusahaan  dan Presiden dalam Melindungi Hutan",
    year: 2011,
    victories: [
      "Golden Agri Resources, perusahaan kelapa sawit anak perusahaan Sinar Mas Group, membuat komitmen publik untuk mengubah praktik perkebunan dan perlindungan hutan dukungan.",
      "Presiden Yudhoyono berkomitmen untuk melindungi hutan Indonesia dengan mengumumkan moratorium untuk konsesi baru di hutan dan lahan gambut dan hutan dengan nilai konservasi tinggi selama 2 tahun.",
    ],
  },
  {
    title: "Kerusakan Hutan dan Lahan Gambut di Indonesia",
    year: 2010,
    victories: [
      "Unilever, Kraft, Nestle dan banyak perusahaan multinasional lainnya merubah kebijakan pembelian mereka serta menolak untuk membeli minyak kelapa sawit dari perusahaan yang merusak hutan dan lahan gambut di Indonesia.",
    ],
  },
  {
    title: "Menolak Nuklir dan Mengurangi Emisi Karbon",
    year: 2009,
    victories: [
      "Presiden Yudhoyono berkomitmen untuk mengurangi emisi karbon Indonesia sebesar 26%, dan 41% dengan bantuan internasional pada 2020.",
      "Setelah kita  melakukan tekanan untuk menolak Nuklir di seluruh kawasan Asia Tenggara,  Presiden Republik Indonesia Susilo Bambang Yudyono mencabut  rencana pembangunan PLTN  dan mengatakan akan mengembangkan energi terbarukan sebagai alternatif sebelum memilih nuklir.",
    ],
  },
  {
    title: "Penghentian Proyek yang Dapat Merugikan Masyarakat",
    year: 2008,
    victories: [
      "Persatuan eksportir beras Thailand berkomitmen hanya melakukan ekspor beras yang bebas dari rekayasa genetik.",
      "Senator di Filipina akhirnya meluluskan pendanaan untuk Energi Terbarukan dan undang-undang energi terbarukan, seperti energi  angin  dan matahari untuk menjaga keamanan energi dan memerangi perubahan iklim.",
      "Setelah Greenpeace bekerja bersama mendukung kelompok perlindungan lingkungan Tapsakae untuk menghentikan pembangunan PLTU baru yang berdaya 4,000 megawatt di desa Tapsake, Provinsi Prachuab Khiri Khan, Thailand. Perusahaan listrik Thailand , Electricity Generation Aouthority Thailand (EGAT) menghentikan proyek mereka.",
      "Tiga minggu setelah suatu aksi yang sangat  besar dan mendapat dukungan dari  115000 email kepada Unilever.  Akhirnya mereka  mendukung Moratorium penghentian pembalakan hutan untuk perkebunan kelapa sawit di Indonesia.",
    ],
  },
  {
    title: "Pengurangan Bahan Bakar Fosil",
    year: 2007,
    victories: [
      "Peningkatan kesadaran tentang bahaya energi listrik yang bersumber dari nuklir membuat para alim-ulama di Jawa dan Madura mengeluarkan fatwa “Haram” untuk pembangunan PLTN di Indonesia.",
      "Greenpeace bekerja sama dengan GRIPP ( Green Renewable Independent Power Producer) meluncurkan Jeepney (kendaraan umum iconic Filipina) dengan mengunakan energi terbarukan. The electric jeepney adalah inovasi untuk mengurangi penggunaan bahan bakar fosil untuk mengatasi perubahan iklim.",
    ],
  },
  {
    title: "Aliran Dana dan Pembatalan Proyek",
    year: 2006,
    victories: [
      "Seruan yang sangat masif dari kelompok anak-anak muda di Greenpeace (Solar Generation) selama pertemuan Asian Development Bank (ADB) ke-39  yang akhirnya ADB mengalirkan pendanaan untuk “Proyek Energi Bersih” sebesar $1 miliar di tahun 2008.",
      "Setelah perlawanan yang masif dari masyarakat Isabela dan Greenpeace, Perusahaan  Minyak Bumi Nasional Filipina (PNOC) akhirnya menyetujui untuk membatalkan rencana mengintegrasikan penambangan batu bara dengan proyek PLTU mine-mouth di Isabela, Filipina",
    ],
  },
  {
    title: "Membangun Area Bebas Rekayasa Genetik",
    year: 2005,
    victories: [
      "Pulau Mindoro di Filipina mendirikan  area bebas rekayasa genetik, memberikan inspirasi untuk membuat lebih banyak area bebas rekayasa genetik, dan memberikan kekuatan para petani bahwa rekayasa genetik bukan satu-satunya cara untuk keamanan pangan di Filipina.",
    ],
  },
  {
    title: "Desakan Perlindungan Terhadap Hewan Laut",
    year: 2004,
    victories: [
      "Desakan perlindungan terhadap paus minke, hiu putih, pohon merbau, dan lumba-lumba jenis irrawaddy akhirnya dapat direalisasikan pada konvensi perdangangan internasional satwa dan tumbuhan langka (CITES) di Bangkok Thailand.",
    ],
  },
  {
    title: "Kampanye dan Penolakan dari Greenpeace",
    year: 2002,
    victories: [
      "Penolakan Greenpeace pada sumber makanan dengan rekayasa genetik di Thailand mendapat sambutan pemerintah dengan memberikan label (tanda) pada produk makanan yang terkontaminasi rekayasa genetik. Label ini memberikan kekuatan pada konsumen untuk menghindarinya.",
      "Kampanye Greenpeace mempromosikan solusi dari dampak perubahan iklim dapat mencegah pembangunan PLTU batu bara di Bo Nok dan Ban Krut in Prachuap Khiri, Tahiland dan  rencana pembangunan PLTU di Pulupandan, Provinsi Negros, Filipina.",
    ],
  },
  {
    title: "Persetujuan Undang-Undang Manajemen Ekologi",
    year: 2001,
    victories: [
      "Bersama dengan organisasi lingkungan dan masyarakat, Greenpeace berhasil mendorong disetujuinya undang-undang manajemen ekologi  pembuangan limbah Filipina yang memandatkan penerapan  strategi  dari awal hingga akhir, penguraian sampah yang sesuai, pemisahan, dan daur ulang sampah untuk memecahkan masalah sampah di Filipina.",
    ],
  },
  {
    title: "Greenpeace Berhasil Mempimpin Kampanye",
    year: 1999,
    victories: [
      "Greenpeace sukses memimpin kampanye  untuk mendorong pasal dari UU Republic No. 8749, yang juga dikenal sebagai “UU Udara Bersih 1999 Filipina” yang di dalamnya menyertakan larangan nasional  atas pembakaran sampah. Larangan yang belum pernah dilakukan sebelumnya. ",
    ],
  },
];

export default function OurVictory() {
  return (
    <>
      <Helmet>
        <title>Kemenangan | Greenpeace Indonesia</title>
        <meta name="title" content="Kemenangan | Greenpeace Indonesia" />
        <meta
          name="description"
          content="Selama bertahun-tahun, Greenpeace telah melakukan suatu perubahan positif untuk lingkungan dunia dan juga termasuk Asia tenggara. Terima kasih atas bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk lingkungan!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://greenpeace.netlify.app/our-victory"
        />
        <meta property="og:title" content="Kemenangan | Greenpeace Indonesia" />
        <meta
          property="og:description"
          content="Selama bertahun-tahun, Greenpeace telah melakukan suatu perubahan positif untuk lingkungan dunia dan juga termasuk Asia tenggara. Terima kasih atas bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk lingkungan!"
        />
        <meta
          property="og:image"
          content="/greenpeace-indonesia-our-victory.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://twitter.com/greenpeaceid"
        />
        <meta
          property="twitter:title"
          content="Kemenangan | Greenpeace Indonesia"
        />
        <meta
          property="twitter:description"
          content="Selama bertahun-tahun, Greenpeace telah melakukan suatu perubahan positif untuk lingkungan dunia dan juga termasuk Asia tenggara. Terima kasih atas bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk lingkungan!"
        />
        <meta
          property="twitter:image"
          content="/greenpeace-indonesia-our-victory.webp"
        />
      </Helmet>

      <div className="flex flex-col gap-8 pb-16 md:gap-8 xl:gap-12">
        <figure>
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

              <Accordion data={victoriesData} />
            </article>
          </section>
          <section className="basic-padding flex flex-col items-center gap-8 lg:gap-12">
            <h2 className="font-montserrat text-2xl font-bold text-submarine-gp-500 md:text-[28px] 2xl:text-3xl">
              Lainnya Tentang Kami
            </h2>
            <div className="grid w-full gap-4 xs:w-[90%] sm:w-3/4 md:w-full md:grid-cols-2 md:gap-6 lg:w-full 2xl:w-[90%] 3xl:w-4/5 ">
              <SectionGpCard type="about" />
              <SectionGpCard type="history" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
