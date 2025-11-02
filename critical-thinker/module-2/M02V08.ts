//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };

type TSales = (typeof sales)[0];
type TReport = {
  [Key: string]: {
    totalRevenue: number;
    itemCount: number;
  };
};

const generateSalesReport = sales?.reduce((report: TReport, curr: TSales) => {
  const { category, price, quantity } = curr;

  if (!report[category]) {
    report[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  report[category]!.totalRevenue += price * quantity;
  report[category]!.itemCount += quantity;

  return report;
}, {});

console.log(generateSalesReport);
