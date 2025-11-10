const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const flatAndUniqueTags = [...new Set(tagsFromPosts.flat(Infinity))];

console.log(flatAndUniqueTags);

// some method -- usecase
const currentUserRoles = ["user", "editor"];

const featureAccessRoles = ["admin", "manager"];

const hasAccess = currentUserRoles.some((val) =>
  featureAccessRoles.includes(val)
);

console.log(hasAccess);
