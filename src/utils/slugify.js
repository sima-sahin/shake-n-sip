export const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // not excepting chars unless letters, numbers, empty space or dashes
    .trim()
    .replace(/\s+/g, "-");        // empty spaces turns into dashes