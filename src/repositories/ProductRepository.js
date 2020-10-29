import {Product} from "@/models/models";

class ProductRepository {
    constructor() {
        this.products = [
            new Product('Siyah Kadın Bot & Bootie', 199.90, 'https://cdn.dsmcdn.com//ty18/product/media/images/20201028/13/20094511/87676517/1/1_org.jpg'),
            new Product('Siyah Erkek Bot & Bootie', 199.90, 'https://cdn.dsmcdn.com//assets/product/images2/244919/56572818/1/1_org.jpg'),
            new Product('Mavi Kadın Bot & Bootie', 199.90, 'https://cdn.dsmcdn.com//assets/product/media/images/20190923/13/256637/56723656/1/1_org.jpg'),
            new Product('Mavi Erkek Bot & Bootie', 199.90),
            new Product('Yeşil Kadın Bot & Bootie', 199.90),
            new Product('Yeşil Erkek Bot & Bootie', 199.90),
            new Product('Beyaz Kadın Bot & Bootie', 199.90),
            new Product('Beyaz Erkek Bot & Bootie', 199.90),

        ];
    }
    searchProducts(param){
        return this.products.filter(item => item.title.toLowerCase().includes(param.toLowerCase()));
    }
}

export default new ProductRepository();