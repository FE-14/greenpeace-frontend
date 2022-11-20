import { useEffect, useMemo, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { SkeletonArticles } from "../components";
import { getPostsData } from "../features/posts/postsSlice";
import { updateSearchValue } from "../features/search/searchSlice";

import { ArticlesList } from "./articles/components";

export default function Search() {
  const URL = "https://637a41587419b414df9d4f08.mockapi.io/greenpeace/posts";

  const dispatch = useDispatch();
  const { postData, isLoading } = useSelector((store) => store.posts);

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");

  const filteredPostData = useMemo(() => {
    const searchQueryParamsValue = searchParams.get("q");
    let data = [...postData];

    if (searchQueryParamsValue) {
      data = data.filter((post) => {
        return post.title
          .toLowerCase()
          .includes(searchQueryParamsValue.toLowerCase());
      });
    }

    return data;
  }, [searchParams, postData]);

  const handleChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.length === 0) {
      return;
    }

    dispatch(updateSearchValue(searchValue));
    setSearchParams({
      q: searchValue,
    });
  };

  useEffect(() => {
    setSearchValue(searchParams.get("q"));
    dispatch(getPostsData(URL));
  }, [searchParams.get("q")]);

  useEffect(() => {
    if (!searchParams.get("q")) {
      setSearchParams({
        q: "",
      });
    }
    dispatch(getPostsData(URL));
  }, []);

  return (
    <>
      <section className="basic-padding mt-32 flex w-full flex-col items-center justify-center font-montserrat">
        <h1 className="text-3xl font-bold" id="search-result">
          {filteredPostData.length} hasil untuk pencarian &apos;
          {searchParams.get("q")}
          &apos;
        </h1>
        <form
          className="mt-12 w-full items-center py-4 px-8 shadow-shadow-card-with-illustration lg:w-1/2"
          onSubmit={handleSubmit}
        >
          <label htmlFor="search-field" className="flex items-center gap-4">
            <HiOutlineSearch className="h-8 w-8" />
            <input
              type="search"
              id="search-field"
              className="w-full p-2 outline-none"
              placeholder="Telusuri judul artikel ..."
              value={searchValue}
              onChange={handleChangeSearchValue}
            />
          </label>
        </form>
      </section>
      <section className="basic-padding my-20 flex flex-col items-center justify-center">
        {isLoading && <SkeletonArticles />}
        {!isLoading && filteredPostData.length === 0 && (
          <div className="my-8 flex flex-col gap-4 font-montserrat md:my-2">
            <h1 className="text-xl font-bold">
              Maaf, kami tidak dapat menemukan apa yang kamu cari.
            </h1>
            <ul className="list-inside list-disc font-source-sans-pro md:text-lg">
              <li>Cek kesalahan dalam penulisan, dan coba pencarian lagi</li>
              <li>Coba lakukan pencarian lain</li>
            </ul>
          </div>
        )}
        {!isLoading && filteredPostData.length > 0 && (
          <ArticlesList postData={filteredPostData} defaultLayout />
        )}
      </section>
    </>
  );
}
