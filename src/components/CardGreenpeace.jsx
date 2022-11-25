import { aboutUsLogo, historyLogo, victoryLogo } from "../assets";

import ReadMoreArticleLink from "./ReadMoreArticleLink";

export default function Card({ type }) {
  const cardTypesObject = {
    history: {
      title: "Sejarah",
      image: historyLogo,
      description:
        "Di tahun 1971, dengan motivasi menjadikan dunia menjadi hijau dan damai, sekelompok aktivis berlayar dari Vancouver, Cananda, untuk melakukan protes terhadap rencana uji coba bom nuklir Amerika Serikat di pulau Amchitka, pesisir barat Alasaka ",
    },

    aboutUs: {
      title: "Tentang Kami",
      image: aboutUsLogo,
      description:
        "Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami.",
    },

    victory: {
      title: "Kemenangan",
      image: victoryLogo,
      description:
        "Selama bertahun-tahun, Greenpeace telah melakukan suatu perubahan positif untuk lingkungan dunia dan juga termasuk Asia Tenggara. Terima kasih atas bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk lingkungan!.",
    },
  };

  return (
    <div className="mb-10 rounded-md shadow-lg hover:bg-slate-100  sm:w-80">
      <img
        src={cardTypesObject[type].image}
        alt="about us"
        className="mt-2 w-40"
      />
      <div className="px-6 py-4">
        <h2 className="mb-1 mt-2 text-xl font-bold text-black">
          {cardTypesObject[type].title}
        </h2>
        <p className="mb-7 font-source-sans-pro text-sm text-black">
          {cardTypesObject[type].description}
        </p>
        <ReadMoreArticleLink />
      </div>
    </div>
  );
}
