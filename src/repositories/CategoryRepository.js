import {Category} from "@/models/models";

class CategoryRepository {
    constructor() {
        this.categories = [
            new Category('Kadın', 'kadin', [
                new Category('Ayakkabı', 'kadin-ayakkabi', [
                    new Category('Topuklu Ayakkabı', 'topuklu-ayakkabi'),
                    new Category('Sneaker', 'kadin-sneaker'),
                    new Category('Günlük Ayakkabı', 'kadin-gunluk-ayakkabi'),
                    new Category('Bot & Bootie', 'kadin-bot-bootie-ayakkabi'),
                    new Category('Koşu & Antreman', 'kadin-kosu-antreman-ayakkabi'),
                ]),
                new Category('Giyim', 'kadin-giyim', [
                    new Category('Elbise', 'kadin-elbise'),
                    new Category('Sweatshirt', 'kadin-sweatshirt'),
                    new Category('T-Shirt', 'kadin-t-shirt'),
                    new Category('Pantalon', 'kadin-pantalon'),
                    new Category('Gömlek', 'kadin-gomlek'),
                ])
            ]),
            new Category('Erkek', 'erkek', [
                new Category('Ayakkabı', 'erkek-ayakkabi', [
                    new Category('Sneaker', 'erkek-sneaker'),
                    new Category('Günlük Ayakkabı', 'erkek-gunluk-ayakkabi'),
                    new Category('Bot & Bootie', 'erkek-bot-bootie-ayakkabi'),
                    new Category('Koşu & Antreman', 'erkek-kosu-antreman-ayakkabi'),
                ]),
                new Category('Giyim', 'erkek-giyim', [
                    new Category('Sweatshirt', 'erkek-sweatshirt'),
                    new Category('T-Shirt', 'erkek-t-shirt'),
                    new Category('Pantalon', 'erkek-pantalon'),
                    new Category('Gömlek', 'erkek-gomlek'),
                ])
            ]),
        ];
    }
    searchCategories(param){
        return this.categories.filter(item => item.title.toLowerCase().includes(param.toLowerCase()));
    }
    getAll()
    {
        return this.categories;
    }
}

export default new CategoryRepository();