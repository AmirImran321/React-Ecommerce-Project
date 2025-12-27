
/**
 * Filters an array of items by search term and category.
 * @param {Array} data - The array of items (e.g., products).
 * @param {string} searchTerm - The search string entered by the user.
 * @param {string} category - The selected category.
 * @param {Array<string>} keys - The properties to search (e.g., ["title", "description"]).
 * @returns {Array} - Filtered array of items.
 */
export const filterBySearchAndCategory = (data, searchTerm, category, keys) => {
  return data.filter(item => {
    const matchesSearch = keys.some(key =>
      item[key]?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const matchesCategory =
      category === "" || item.category === category;

    return matchesSearch && matchesCategory;
  });
};
