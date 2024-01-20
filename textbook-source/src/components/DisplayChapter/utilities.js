/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param {string} inputString - The input string to capitalize.
 * @returns {string} - The input string with the first letter of each word capitalized.
 */
export function capitalizeWords(inputString) {
    // Split the input string into words based on spaces
    const words = inputString.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word; // Preserve empty words (e.g., multiple spaces)
        }
    });

    // Join the capitalized words back into a single string
    const result = capitalizedWords.join(' ');

    return result;
}