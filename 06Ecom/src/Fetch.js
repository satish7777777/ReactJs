export async function loadData() {
  fetch("https://fakestoreapi.in/api/products")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      const data = res.products;
      let category = [...new Set(data.map((key) => key.category))];
      console.log("category", category);


      const masterData = {
        category: category,
        dataArr :data
      }
     return masterData
    });
}
