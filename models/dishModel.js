const Datastore = require("nedb"); // import nedb package

class Dishes {
    constructor(dbFilePath) {
        if (dbFilePath) {
            //embedded
            this.db = new Datastore({
                filename: dbFilePath,
                autoload: true
            });
        } else {
            //in memory
            this.db = new Datastore();
        }
    }

    init() {

        //populate sides
        this.db.insert({
            name: 'KHAO SUAY',
            section: 'Side Dishes',
            description: 'Jasmine Rice',
            price: 5.99,
            visible: true,
            ingredients: ["38"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'KHAO PAD KHAI',
            section: 'Side Dishes',
            description: 'Egg Fried Rice',
            price: 5.99,
            visible: false,
            ingredients: ["32", "38"],
            vegan: false,
            vegetarian: true,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'KHAO NEOW',
            section: 'Side Dishes',
            description: 'Sticky Rice',
            price: 5.99,
            visible: true,
            ingredients: ["38"],
            vegan: true,
            vegetarian: true,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'KHAO MA PRAO',
            section: 'Side Dishes',
            description: 'Coconut Rice',
            price: 5.99,
            visible: true,
            ingredients: ["26", "38"],
            vegan: true,
            vegetarian: true,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'SEN MEE LUAK',
            section: 'Side Dishes',
            description: 'Trio of Steamed Noodles with Fried Garlic',
            price: 7.99,
            visible: true,
            ingredients: ["4", "47"],
            vegan: true,
            vegetarian: true,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'PAD PAK RUEM',
            section: 'Side Dishes',
            description: 'Stir-Fried Mixed Vegetables with Oyster Sauce',
            price: 8.99,
            visible: true,
            ingredients: ["23","39"],
            vegan: false,
            vegetarian: false,
            pescetarian: true,
            glutenFree: true
        });

        //populate appetizers

        this.db.insert({
            name: 'Thai Orchid Platter',
            section: 'Appetizers',
            description: 'Chicken Satay, King Prawn Spring Rolls, Fish Cakes, Vegetable Spring Rolls and Crispy Won Tons.',
            price: 11.99,
            visible: true,
            ingredients: ["15", "10", "49", "23"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: true
        });
        this.db.insert({
            name: 'Chicken Satay',
            section: 'Appetizers',
            description: 'Grilled Marinated Skewered Chicken , served with Peanut Satay Sauce',
            price: 6.99,
            visible: true,
            ingredients: ["15", "18"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'Lamb Satay',
            section: 'Appetizers',
            description: 'Marinated skewered Lamb, Grilled and accompanied with a Peanut Satay Sauce',
            price: 7.99,
            visible: true,
            ingredients: ["19", "18"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'Pork Ribs',
            section: 'Appetizers',
            description: 'Succulent Pork Ribs Marinated in a Thai Sweet sauce',
            price: 6.99,
            visible: true,
            ingredients: ["2", "20"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'Chicken Parcels',
            section: 'Appetizers',
            description: 'Marinated with Thai Herbs then wrapped with Pandan Leaves and served with a Sweet Chilli Sauce',
            price: 3.99,
            visible: false,
            ingredients: ["15", "2", "16", "17"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'Salt and Chilli Crab',
            section: 'Appetizers',
            description: 'Small Soft Shelled Crab stir fried with sea salt, Chilli and Garlic',
            price: 5.99,
            visible: false,
            ingredients: ["22", "2", "4"],
            vegan: false,
            vegetarian: false,
            pescetarian: true,
            glutenFree: true
        });
        
        // populate mains
        
        this.db.insert({
            name: 'KHAO PAD SUB-PA-ROD',
            section: 'Mains',
            description: 'Pineapple fried rice with chicken, king prawns and squid, egg, cashew nuts and curry sauce',
            price: 11.99,
            visible: true,
            ingredients: ["33", "15", "10", "34", "31", "8", "32"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'SEA BASS RAAD PRIG',
            section: 'Mains',
            description: 'Sea bass fillets topped with homemade spicy tamarind sauce, onions and red & green peppers',
            price: 16.99,
            visible: false,
            ingredients: ["37", "6", "25", "28"],
            vegan: false,
            vegetarian: false,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'BEEF PAD CHA',
            section: 'Mains',
            description: 'Beef stir-fried with onions, peppers in black pepper sauce',
            price: 13.99,
            visible: true,
            ingredients: ["23", "24", "25", "13"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: true
        });
        this.db.insert({
            name: 'LOVE DUCK CURRY',
            section: 'Mains',
            description: 'Roasted duck in red curry sauce with coconut milk, pineapple chunks, grapes, tomatoes, red & green pepper',
            price: 16.99,
            visible: true,
            ingredients: ["5", "35", "26", "33", "34", "28"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'GAENG DAENG',
            section: 'Mains',
            description: 'Traditional Thai red curry with your choice of meat, coconut milk, bamboo shoots, red & green peppers, aubergines and sweet basils',
            price: 14.99,
            visible: false,
            ingredients: ["32", "1", "30", "26", "27", "28", "29"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'PED SAUCE MA-KHAM',
            section: 'Mains',
            description: 'Crispy duck breast with a rich, special sweet & sour tamarind sauce, broccoli, crispy red onions and cashew nuts.',
            price: 19.99,
            visible: false,
            ingredients: ["5", "6", "8", "36", "25"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        
        // populate desserts
        
        this.db.insert({
            name: 'THAI COCONUT STICKY RICE AND MANGO',
            section: 'Desserts',
            description: 'Traditional Thai dessert! Sweet coconut sticky rice paired perfectly with ripe mango',
            price: 7.99,
            visible: true,
            ingredients: ["26", "38", "44"],
            vegan: true,
            vegetarian: true,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'KHAO NIEW I-TIM',
            section: 'Desserts',
            description: 'Sweet coconut sticky rice served with a selection of coconut, mango or ice cream',
            price: 5.99,
            visible: false,
            ingredients: ["26", "38", "43", "42"],
            vegan: false,
            vegetarian: true,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'BANANA FRITTERS',
            section: 'Desserts',
            description: 'Golden banana coated with desiccated coconut, sesame seeds served with vanilla ice cream',
            price: 5.99,
            visible: true,
            ingredients: ["43", "26", "40", "41", "42"],
            vegan: false,
            vegetarian: true,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'DEEP-FRIED ICE CREAM',
            section: 'Desserts',
            description: 'Double cream vanilla ice cream surrounded in a warm and crispy shell',
            price: 3.99,
            visible: true,
            ingredients: ["43", "42"],
            vegan: false,
            vegetarian: false,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'TRIPLE CHOCOLATE BROWNIE',
            section: 'Desserts',
            description: 'Warm triple chocolate brownie served with Double cream vanilla ice cream and chocolate sauce',
            price: 4.99,
            visible: false,
            ingredients: ["43", "46", "42"],
            vegan: false,
            vegetarian: true,
            pescetarian: true,
            glutenFree: true
        });
        this.db.insert({
            name: 'MANGO SAGO',
            section: 'Desserts',
            description: 'Fresh mango, mango puree, sago, coconut cream, vanilla ice cream, sesame seeds and coconut flakes',
            price: 6.99,
            visible: true,
            ingredients: ["43", "44", "42", "41", "40", "26"],
            vegan: false,
            vegetarian: true,
            pescetarian: true,
            glutenFree: true
        });
        
        // populate specials
        
        this.db.insert({
            name: 'Weeping Tiger Steak',
            section: 'Specials',
            description: 'Marinated fillet of Sirloin steak, grilled over charcoal, served on a sizzling plate with a spicy sauce',
            price: 24.99,
            visible: true,
            ingredients: ["9", "2"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'Kung Pao',
            section: 'Specials',
            description: 'Jumbo prawns marinated with lemongrass, grilled over charcoal and served with seafood sauce',
            price: 20.99,
            visible: false,
            ingredients: ["10", "11", "12"],
            vegan: false,
            vegetarian: false,
            pescetarian: true,
            glutenFree: false
        });
        this.db.insert({
            name: 'Sauce Ma-Kharm Duck',
            section: 'Specials',
            description: 'Grilled duck topped with tamarind sauce, served on bed of salad and topped with cashew nuts',
            price: 19.99,
            visible: true,
            ingredients: ["5", "6", "7", "8"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: false
        });
        this.db.insert({
            name: 'Tod Kratiam Prik Thai',
            section: 'Specials',
            description: 'Your choice of meat with lightly battered stir-fried garlic, pepper, and coriander sauce',
            price: 19.99,
            visible: false,
            ingredients: ["1", "4", "13", "14"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: true
        });
        this.db.insert({
            name: 'Nung Ma Naow',
            section: 'Specials',
            description: 'Your choice of meat steamed and topped with Thai fresh chillies,fresh lemon and garlic sauce',
            price: 20.99,
            visible: true,
            ingredients: ["1", "2", "3", "4"],
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            glutenFree: true
        });
    }

    //a function to return all entries from the database
    getAllEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({}).sort({name:1}).exec(function (err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(entries);
                }
            })
        })
    }
    
    findDish(id){

        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.findOne({_id: id.slice(1)}, function (err, entry) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(entry);
                }
            })
        })
    }

    removeIngredients(id){
        // delete ingredients from existing entry so it can be repopulated
        this.db.update({_id: id.slice(1)}, {$unset: { ingredients: true }}, {}, function(err, numRemoved){
            if(err){
                console.log(err)
            } else{
                console.log("Ingredients removed")
            }
        })
    }

    updateDish(id, name, section, description, price, visible, ingreds, vegan, vegetarian, pescetarian, gf){
        //update existing dish
        this.db.update({_id: id.slice(1)}, { $set:{name: name, section: section, description: description, price: price, visible: visible, ingredients: ingreds, vegan: vegan, vegetarian: vegetarian, pescetarian:pescetarian, glutenFree: gf}}, {}, function(err, numReplaced){
            if(err){
                console.log(err)
            } else {
                console.log("Updated")
            }
        })
    }

    deleteEntry(id){
        //delete dish
        this.db.remove({_id:id.slice(1)}, {}, function(err, numRemoved){
            if(err){
                console.log(err)
            }
            else{
                console.log("Dish deleted")
            }
        })
    }

    hideDish(id){
        //change dish visible value to false
        this.db.update({_id: id.slice(1)}, {$set:{visible:false}}, {}, function(err, numReplaced){
            if(err){
                console.log(err)
            }
            else {
                console.log("Dish hidden")
            }
        })
    }

    showDish(id){
        //change dish visible value to true
        this.db.update({_id: id.slice(1)}, {$set:{visible:true}}, {}, function(err, numReplaced){
            if(err){
                console.log(err)
            }
            else {
                console.log("Dish shown")
            }
        })
    }

    addDish(name, section, description, visible, price, ingredients, vegan, vegetarian, pescetarian, gf){
        // insert new dish
        this.db.insert({
            name: name,
            section: section,
            description: description,
            price: price,
            visible: visible,
            ingredients: ingredients,
            vegan: vegan,
            vegetarian: vegetarian,
            pescetarian: pescetarian,
            glutenFree: gf
        });
    }
}

module.exports = Dishes;