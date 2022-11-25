import { historyLogo } from "../../../assets";
import ReadMoreArticleLink from "../../ReadMoreArticleLink";

function CardSejarahGreenpeace() {
  return (
    <div className="mb-10 rounded-md shadow-lg sm:w-80  hover:bg-slate-100">
      <img src={historyLogo} alt="about us" className="mt-2 w-40" />
      <div className="px-6 py-4">
        <div className="mb-1 mt-2 text-xl font-bold text-black">Sejarah</div>
        <p className="mb-7 font-source-sans-pro text-sm text-black">
          Di tahun 1971, dengan motivasi menjadikan dunia menjadi hijau dan
          damai, sekelompok aktivis berlayar dari Vancouver, Cananda, untuk
          melakukan protes terhadap rencana uji coba bom nuklir Amerika Serikat
          di pulau Amchitka, pesisir barat Alasaka.
        </p>
        <ReadMoreArticleLink />
      </div>
    </div>
  );
}

export default CardSejarahGreenpeace;
