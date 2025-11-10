// Lookup table

const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

type TTable = { [key: string]: (typeof postsArray)[0] };
type TPostsArray = (typeof postsArray)[0];

const lookUp = postsArray?.reduce((table: TTable, curr: TPostsArray) => {
  table[curr.id] = curr;
  return table;
}, {} as TTable);

console.log(lookUp);
