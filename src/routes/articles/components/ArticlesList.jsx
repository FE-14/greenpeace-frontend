import { memo } from "react";

import { ArticleCard } from "../../../components";

export default memo(function ArticlesList({ postData }) {
  if (postData.length === 0) {
    return (
      <div className="mt-8 flex flex-col gap-4 font-montserrat md:mt-2">
        <h1 className="text-xl font-bold">
          Maaf, kami tidak dapat menemukan apa yang kamu cari.
        </h1>
        <ul className="list-inside list-disc font-source-sans-pro md:text-lg">
          <li>Cek kesalahan dalam penulisan, dan coba pencarian lagi</li>
          <li>Coba lakukan pencarian lain</li>
        </ul>
      </div>
    );
  }

  return postData.map((post, index) => (
    <ArticleCard key={post.id} index={index} {...post} />
  ));
});
