import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ReadMoreArticleLink({ id }) {
  return (
    <Link
      to={`/articles/${id}`}
      relative="path"
      className="flex items-center gap-1 font-montserrat text-xs font-bold text-submarine-gp-500 duration-150 hover:gap-2 hover:brightness-[80%] md:text-sm"
    >
      Baca Selengkapnya <HiOutlineArrowRight className="h-4 w-4" />
    </Link>
  );
}
