import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { LayoutGroup } from "framer-motion";

import { articleHero } from "../../assets";
import { getPostsData } from "../../features/posts/postsSlice";

import {
  ArticlesList,
  ButtonCategory,
  SearchArticleBar,
  SkeletonArticles,
} from "./components";

import "react-loading-skeleton/dist/skeleton.css";

export default function Articles() {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { postData, isLoading } = useSelector((store) => store.posts);

  const [hoveredCategory, setHoveredCategory] = useState(null);

  const articlesCategory = ["Semua", "Krisis Iklim", "Hutan", "Polusi"];
  const URL = import.meta.env.VITE_POSTS_API_1;

  const selectedCategory = useMemo(() => {
    const categoryParamsValue = searchParams.get("category");
    return categoryParamsValue || "Semua";
  }, [searchParams.get("category")]);

  useEffect(() => {
    dispatch(getPostsData(URL));
  }, []);

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
        <SearchArticleBar />

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
              />
            ))}
          </LayoutGroup>
        </div>
      </section>

      <section className="basic-padding my-12 flex flex-col items-center justify-center gap-10 lg:my-32">
        {isLoading && <SkeletonArticles />}
        {!isLoading && (
          <ArticlesList
            selectedCategory={selectedCategory}
            postData={postData}
          />
        )}
      </section>
    </>
  );
}
