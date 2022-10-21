export const createTagElements = (tagArray) => {
  return tagArray
    .map((tag) => {
      return `<span class="text-md p-4 bg-green-gp-100 text-submarine-gp-500">${tag}</span>`;
    })
    .join("");
};
