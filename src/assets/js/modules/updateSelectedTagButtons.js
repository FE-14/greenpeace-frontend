export const updateSelectedTagButtons = (buttons, selectedTag) => {
  buttons.forEach((button) => {
    if (button.dataset.tag === selectedTag) {
      button.classList.remove("bg-green-50", "text-submarine-gp-500");
      button.classList.add("text-green-50", "bg-submarine-gp-500");

      return;
    }

    button.classList.remove("text-green-50", "bg-submarine-gp-500");
    button.classList.add("bg-green-50", "text-submarine-gp-500");
  });
};
