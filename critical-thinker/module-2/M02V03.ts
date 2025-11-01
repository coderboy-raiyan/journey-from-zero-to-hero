const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const flatAndUniqueTags = [...new Set(tagsFromPosts.flat(Infinity))];

console.log(flatAndUniqueTags);
