import productsData from "./MOCK_DATA.json";

export const getProductsData = () => {
  const categories = new Set(productsData.map((product) => product.category));
  const filteredProducts: any[] = [];
  for (const category of categories) {
    const items = productsData?.filter(
      (products) => products.category === category
    );
    filteredProducts.push({ category, items });
  }

  return filteredProducts;
};
