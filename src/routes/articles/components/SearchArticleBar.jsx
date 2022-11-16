import { HiOutlineSearch } from "react-icons/hi";

export default function SearchArticleBar() {
  return (
    <form
      className="flex w-full items-center justify-center gap-2 bg-white p-2 shadow-shadow-card-with-illustration focus-within:outline focus-within:outline-1 focus-within:outline-green-200 md:p-4 lg:w-3/4 xl:w-3/5"
      id="search-article-form"
    >
      <label
        htmlFor="search-article-title"
        className="flex w-[90%] items-center gap-3 text-black-gp-100 md:gap-4"
      >
        <HiOutlineSearch className="h-6 w-6 text-current" />
        <input
          type="search"
          name="search-article-title"
          id="search-article-title"
          className="w-full appearance-none bg-transparent p-2 text-current focus:outline-none lg:text-lg"
          placeholder="Telusuri judul ..."
        />
      </label>
    </form>
  );
}
