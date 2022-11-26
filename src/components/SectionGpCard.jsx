import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import { aboutUsLogo, historyLogo, victoryLogo } from "../assets";

const cardTypesObject = {
  history: {
    title: "Sejarah",
    image: historyLogo,
    description:
      "Di tahun 1971, dengan motivasi menjadikan dunia menjadi hijau dan damai, sekelompok aktivis berlayar dari Vancouver, Cananda, untuk melakukan protes terhadap rencana uji coba bom nuklir Amerika Serikat di pulau Amchitka, pesisir barat Alasaka ",
  },

  about: {
    title: "Tentang Kami",
    image: aboutUsLogo,
    description:
      "Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami.",
  },

  "our-victory": {
    title: "Kemenangan",
    image: victoryLogo,
    description:
      "Selama bertahun-tahun, Greenpeace telah melakukan suatu perubahan positif untuk lingkungan dunia dan juga termasuk Asia Tenggara. Terima kasih atas bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk lingkungan!.",
  },
};

export default function SectionGpCard({ type }) {
  return (
    <div className="flex w-full flex-col gap-8 p-8 shadow-shadow-card-with-illustration hover:bg-slate-100">
      <figure className="relative flex w-max flex-col gap-4">
        <img
          src={cardTypesObject[type].image}
          alt={`${cardTypesObject[type].title} Icon`}
          className="w-28 object-cover"
        />
        <h2 className="font-montserrat text-lg font-bold lg:text-2xl">
          {cardTypesObject[type].title}
        </h2>
      </figure>

      <p className="font-source-sans-pro text-sm text-black lg:text-base">
        {cardTypesObject[type].description}
      </p>
      <Link
        to={`/${type}`}
        relative="path"
        className="flex items-center gap-1 font-montserrat text-xs font-bold text-submarine-gp-500 duration-150 hover:gap-2 hover:brightness-[80%] md:text-sm"
      >
        Baca Selengkapnya <HiOutlineArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
