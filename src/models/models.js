class Category {
    constructor(title, link, children = []) {
        this.title = title;
        this.link = link;
        this.children = children;
    }
    addChild(category){
        this.children.push(category);
    }
}
class Product {
    constructor(title, price, initialImage = '') {
        this.title = title;
        this.link = '';
        this.images = initialImage.length !== 0 ? [initialImage] : [];
        this.brand = '';
        this.price = price;
        this.discount = 0;
        this.comments = [];
    }
}
class ProductComment {
    constructor(user_id, product_id, comment, star) {
        this.user_id = user_id;
        this.product_id = product_id;
        this.comment = comment;
        this.star = star;
    }

}

class User {
    constructor(username, name, email, password) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export {
    Category,
    Product,
    ProductComment,
    User
};