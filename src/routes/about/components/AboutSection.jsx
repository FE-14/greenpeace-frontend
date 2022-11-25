import ArticleList from "./ArticleList";

export default function AboutSection({
  title,
  listTypeClassname,
  articleData,
}) {
  return (
    <section className="basic-padding mt-28 mb-20 flex flex-col gap-12 lg:mt-40">
      <h2 className="font-montserrat text-3xl font-semibold tracking-wide text-submarine-gp-500 md:text-4xl lg:text-5xl xl:text-5xl">
        {title}
      </h2>

      <article className="lg:pl-12">
        {articleData.map((article, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              {article?.listTitle && (
                <h3 className="text-2xl font-semibold">{article?.listTitle}</h3>
              )}
              <ul
                className={`grid list-inside ${listTypeClassname} gap-8 lg:grid-flow-col lg:grid-rows-2 lg:text-lg 2xl:text-xl`}
              >
                {article.listData.map((list, index) => (
                  <ArticleList {...list} key={`${title}-${index}`} />
                ))}
              </ul>
            </div>
          );
        })}
      </article>
    </section>
  );
}
