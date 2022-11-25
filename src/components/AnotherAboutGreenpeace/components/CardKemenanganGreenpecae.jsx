import { victoryLogo } from "../../../assets";
import ReadMoreArticleLink from "../../ReadMoreArticleLink";

function CardKemenanganGreenpeace() {
  return (
    <div className="mb-10 rounded-md shadow-lg sm:w-80 hover:bg-slate-100">
      <img src={victoryLogo} alt="about us" className="mt-2 w-40" />
      <div className="px-6 py-4">
        <div className="mb-1 mt-1 text-xl font-bold text-black">Kemenangan</div>
        <p className="mb-7 font-source-sans-pro text-sm text-black">
          Selama bertahun-tahun, Greenpeace telah melakukan suatu perubahan
          positif untuk lingkungan dunia dan juga termasuk Asia Tenggara. Terima
          kasih atas bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk
          lingkungan!
        </p>
        <ReadMoreArticleLink />
      </div>
    </div>
  );
}

export default CardKemenanganGreenpeace;
