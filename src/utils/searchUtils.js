/**
 * Filters an array of items by search term and category.
 * @param {Array} data - The array of items (e.g., products).
 * @param {string} searchTerm - The search string entered by the user.
 * @param {string} category - The selected category.
 * @param {Array<string>} keys - The properties to search (e.g., ["title", "description"]).
 * @returns {Array} - Filtered array of items.
 */
export const filterBySearchAndCategory = (
  data = [], // default to empty array
  searchTerm = "",
  category = "",
  keys = []
) => {
  if (!Array.isArray(data)) return [];

  return data.filter(item => {
    const matchesSearch = searchTerm
      ? keys.some(key =>
          (item[key] ?? "")
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : true;

    const matchesCategory =
      !category || item.category === category;

    return matchesSearch && matchesCategory;
  });
};
