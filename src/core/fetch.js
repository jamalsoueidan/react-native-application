import allData from "./data.js";

//fake fetch api
export const fetch = (page, limit = 15) => {
  // create settimeout 5sec?
  const total = allData.length;
  let from = total - (page + 1) * limit;
  let to = from + limit;
  if (to < 1) {
    //nothing left
    return null;
  }

  if (from < 0) {
    //return the last items
    to = from + limit;
    from = 0;
  }
  return allData.slice(from, to).reverse();
};

let id = 1000;
export const create = value => ({
  id: ++id,
  message: value,
  created_at: new Date().toISOString(),
  sender: {
    id: 1
  }
});
