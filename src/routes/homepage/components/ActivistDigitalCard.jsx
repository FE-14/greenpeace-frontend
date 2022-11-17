import classNames from "classnames";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

export default function ActivistDigitalCard({ id, title, description }) {
  return (
    <article
      className={classNames(
        "relative z-10 flex flex-col items-start gap-4 bg-white p-4 shadow-xl duration-200 hover:shadow-2xl md:max-w-3xl md:flex-row md:items-center md:gap-8 md:p-12",
        {
          "xl:-left-12": id % 2 !== 0,
          "xl:-right-12": id % 2 === 0,
        }
      )}
    >
      <div className="text-left font-montserrat text-6xl font-bold text-green-500 md:text-7xl lg:text-8xl">
        {id}
      </div>
      <div className="">
        <h2 className="text-lg font-bold text-submarine-gp-500 xl:text-xl">
          {title}
        </h2>
        <p className="font-source-sans-pro text-base">{description}</p>
      </div>
    </article>
  );
}

ActivistDigitalCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
