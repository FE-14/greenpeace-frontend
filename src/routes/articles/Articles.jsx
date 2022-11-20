/* eslint-disable indent */
import { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { LayoutGroup } from "framer-motion";

import { articleHero } from "../../assets";
import { getPostsData } from "../../features/posts/postsSlice";

import {
  ArticlesList,
  ButtonCategory,
  SearchArticleBar,
  SkeletonArticles,
} from "./components";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();

  const dispatch = useDispatch();
  const { postData, isLoading } = useSelector((store) => store.posts);

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const articlesCategory = ["Semua", "Krisis Iklim", "Hutan", "Polusi"];
  const URL = import.meta.env.VITE_POSTS_API_1;

  const selectedCategory = useMemo(() => {
    const categoryParamsValue = searchParams.get("category");

    return categoryParamsValue || "Semua";
  }, [searchParams.get("category")]);

  const filteredPostData = useMemo(() => {
    const searchQueryParamsValue = searchParams.get("q");
    const categoryParamsValue = searchParams.get("category");
    let data = [...postData];

    if (searchQueryParamsValue) {
      data = data.filter((post) => {
        return post.title
          .toLowerCase()
          .includes(searchQueryParamsValue.toLowerCase());
      });
    }

    if (categoryParamsValue) {
      data =
        categoryParamsValue === "Semua"
          ? data
          : data.filter((post) => {
              return post.tags.includes(categoryParamsValue.toLowerCase());
            });
    }

    return data;
  }, [searchParams, postData]);

  const handleSearchQuerySubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (searchQuery) {
        setSearchParams(
          { q: searchQuery, category: searchParams.get("category") },
          { preventScrollReset: true }
        );
      } else {
        setSearchParams(
          { category: searchParams.get("category") },
          { preventScrollReset: true }
        );
      }
    },
    [search, searchQuery]
  );

  const handleSearchQeryChange = useCallback(
    (event) => {
      const { value } = event.target;

      setSearchQuery(value);
    },
    [searchQuery]
  );

  useEffect(() => {
    const categoryParamsValue = searchParams.get("category");

    if (!categoryParamsValue) {
      setSearchParams({
        category: "Semua",
      });
    }

    dispatch(getPostsData(URL));
  }, []);

  useEffect(() => {
    const searchQueryParamsValue = searchParams.get("q") || "";

    setSearchQuery(searchQueryParamsValue);
  }, [searchParams.get("q")]);

  return (
    <>
      <Helmet>
        <title>Articles | Greenpeace Indonesia</title>
      </Helmet>

      <figure className="relative bg-green-gp-800/80">
        <img
          src={articleHero}
          alt="Homepage Hero"
          className="-z-50 max-h-[576px] min-h-[286px] w-full bg-contain bg-no-repeat object-cover"
        />
        <div className="absolute top-[25%] left-8 font-montserrat sm:top-[40%] sm:left-10 md:left-20 lg:top-[30%] lg:left-32 xl:left-44 2xl:left-52">
          <h1 className="my-1 text-lg font-bold text-green-500 sm:text-2xl md:text-4xl lg:my-4 lg:text-5xl">
            Artikel
          </h1>
          <h1 className="my-1 w-3/4 text-xs font-bold text-white sm:text-xl md:w-[60%] lg:my-4 lg:text-3xl">
            Kumpulan artikel dan informasi terkait kondisi bumi Indonesia
            dibawah ancaman krisis iklim.
          </h1>
          <p className="w-10/12 text-[10px] font-normal text-white/90 sm:text-xs md:w-[65%] md:text-sm lg:text-lg">
            Langkah pertama dengan memahami bagaimana krisis iklim telah
            berdampak pada kehidupan kita di masa lalu, sekarang, dan masa
            depan. Tetap up to date pada berita terbaru mengenai kemajuan krisis
            iklim, yang menjadi semakin berbahaya tepat di depan mata Anda.
          </p>
        </div>
      </figure>
      <section className="basic-padding my-12 flex flex-col items-center justify-center gap-10">
        <SearchArticleBar
          onSearchQeryChange={handleSearchQeryChange}
          onSearchQuerySubmit={handleSearchQuerySubmit}
          searchQuery={searchQuery}
        />

        <div
          className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-10"
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <LayoutGroup>
            {articlesCategory.map((category) => (
              <ButtonCategory
                category={category}
                isCategoryOnHover={hoveredCategory === category}
                setHoveredCategory={setHoveredCategory}
                isSelected={selectedCategory === category}
                key={category}
                isLoading={isLoading}
              />
            ))}
          </LayoutGroup>
        </div>
      </section>

      <section className="basic-padding my-12 flex flex-col items-center justify-center gap-10 lg:my-32">
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
          <ArticlesList
            selectedCategory={selectedCategory}
            postData={filteredPostData}
          />
        )}
      </section>
    </>
  );
}
