// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

export default function HomepageSection({
  headerText,
  descriptionText,
  children,
}) {
  return (
    <section className="basic-padding my-16 mx-auto flex w-full flex-col items-center justify-center gap-20 font-montserrat">
      <div className="flex flex-col items-center gap-3 text-center font-montserrat">
        <h1 className="text-3xl font-bold tracking-wide text-green-gp-500 lg:text-4xl">
          {headerText}
        </h1>
        <p className="text-black-gp-50 md:w-[90%] lg:w-10/12 lg:text-lg 2xl:w-3/4">
          {descriptionText}
        </p>
      </div>
      {children}
    </section>
  );
}

HomepageSection.propTypes = {
  headerText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
