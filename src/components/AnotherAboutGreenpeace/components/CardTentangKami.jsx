import { aboutUsLogo } from "../../../assets";
import ReadMoreArticleLink from "../../ReadMoreArticleLink";

function CardTentangKami() {
  return (
    <div className="mb-10 rounded-md shadow-lg sm:w-80 hover:bg-slate-100">
      <img src={aboutUsLogo} alt="about us" className="mt-2 w-40" />
      <div className="px-6 py-4">
        <div className="mb-1 mt-3 text-xl font-bold text-black">
          Tentang Kami
        </div>
        <p className="mb-12 font-source-sans-pro text-sm text-black">
          Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi.
          Butuh perubahan. Butuh aksi. Greenpeace memiliki landasan prinsip dan
          nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan
          kami.
        </p>
        <ReadMoreArticleLink />
      </div>
    </div>
  );
}

export default CardTentangKami;
