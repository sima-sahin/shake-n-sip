function namify(input) {
  if (!input) return "";

  return input
    // Split camelCase into separate words: "longIsland" → "long Island"
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    // Replace hyphens with spaces
    .replace(/-/g, " ")
    // Trim and split by one or more spaces
    .trim()
    .split(/\s+/)
    // Capitalize the first letter of each word, lowercase the rest
    .map(
      word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    // Join back into a single string
    .join(" ");
}

export default namify;