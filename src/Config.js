

class Config {
    basePath = "https://www.westelm.com";
    productEndPoint = this.basePath + "/services/catalog/v4/category/shop/new/all-new/index.json";
    //productEndPoint = "https://localhost:3000/public/index.json";
    noProductMessage = {"message": "No products available. Please try again later."};
}

export default new Config();