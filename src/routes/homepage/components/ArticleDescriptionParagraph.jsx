// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

export default function ArticleDescriptionParagraph({ paragraph }) {
  return (
    <p className="text-sm text-black-gp-100 md:text-lg lg:text-base">
      {paragraph}.
    </p>
  );
}

ArticleDescriptionParagraph.propTypes = {
  paragraph: PropTypes.string.isRequired,
};
