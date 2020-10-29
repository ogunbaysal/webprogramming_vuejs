import basket from "@/app/store/basket";
import {uuid} from "vue-uuid";

export class Category {
    constructor(title, link, children = []) {
        this.title = title;
        this.link = link;
        this.children = children;
    }
    addChild(category){
        this.children.push(category);
    }
}

export class Product {
    constructor(jsonProduct) {
        this.id = jsonProduct.id;
        this.title = jsonProduct.title;
        this.link = jsonProduct.link;
        this.images = jsonProduct.images;
        this.brand = jsonProduct.brand;
        this.price = jsonProduct.price;
        this.discount = jsonProduct.discount;
        this.comments = [...this.parseComments(jsonProduct.comments)];
    }
    parseComments(jsonComments){
        const data = [];
        jsonComments.forEach(comment => {
           data.push(new ProductComment(this, comment));
        });
        return data;
    }
}
export class ProductComment {
    constructor(product,jsonComment) {
        this.product = product;
        this.user_id = jsonComment.user_id;
        this.comment = jsonComment.comment;
        this.star = jsonComment.star;
        this.name = jsonComment.name;
        this.display_name = jsonComment.display_name;

    }

}

export class User {
    constructor(username, name, email, password) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export class BasketItem {
    constructor(item, amount) {
        this.id = uuid.v1();
        this.item = item;
        this.amount = amount;
    }
    add(amount = 1){
        this.amount += amount;
    }
    remove(amount = 1){
        this.amount -= amount;
    }
}
export class Basket {
    constructor(user = null) {
        this.items = [];
        this.user = user;
    }
    totalBasketItem(){
        return this.items.length;
    }
    totalAmount(){
        let total = 0;
        this.items.forEach(item => total += (item.item.price * item.amount ));
        return total;
    }
    add(item, amount = 1){
        let flag = false
        this.items.forEach(basketItem => {
           if(basketItem.item.id === item.id){
               basketItem.add(amount);
               flag = true;
           }
        });
        if(flag === false){
            basket.items.push(new BasketItem(item, amount));
        }
    }
    remove(item_id, amount = null) {
        for(let i = 0; i < this.items.length; i++){
            const basketItem = this.items[i];
            if(basketItem.item.id === item_id){
                if(amount === null || basketItem.item.amount <= amount){
                    delete this.items[i];
                }
                else{
                    basketItem.remove(amount);
                }
                return true;
            }
        }
        return false;
    }
}