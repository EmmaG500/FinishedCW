const Datastore = require("nedb");

class Ingredients {
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
        //this.db= new Datastore({filename:'dish.db', autoload:true});
    }

    init() {
        // populate ingredients list
        //let id=1
        this.db.insert({
            _id: "1",
            name: "Choice meat",
            allergen: false
        });
        this.db.insert({
            _id: "2",
            name: "Chillies",
            allergen: false
        });
        this.db.insert({
            _id: "3",
            name: "Lemon",
            allergen: false
        });
        this.db.insert({
            _id: "4",
            name: "Garlic",
            allergen: false
        });
        this.db.insert({
            _id: "5",
            name: "Duck",
            allergen: false
        });
        this.db.insert({
            _id: "6",
            name: "Tamarind",
            allergen: false
        });
        this.db.insert({
            _id: "7",
            name: "Salad",
            allergen: false
        });
        this.db.insert({
            _id: "8",
            name: "Cashew",
            allergen: true
        });
        this.db.insert({
            _id: "9",
            name: "Sirloin",
            allergen: false
        });
        this.db.insert({
            _id: "10",
            name: "Prawns",
            allergen: false
        });
        this.db.insert({
            _id: "11",
            name: "Lemongrass",
            allergen: false
        });
        this.db.insert({
            _id: "12",
            name: "Seafood sauce",
            allergen: true
        });
        this.db.insert({
            _id: "13",
            name: "Pepper",
            allergen: false
        });
        this.db.insert({
            _id: "14",
            name: "Coriander",
            allergen: false
        });
        this.db.insert({
            _id: "15",
            name: "Chicken",
            allergen: false
        });
        this.db.insert({
            _id: "16",
            name: "Herbs",
            allergen: false
        });
        this.db.insert({
            _id: "17",
            name: "Pandan leaves",
            allergen: false
        });
        this.db.insert({
            _id: "18",
            name: "Peanut",
            allergen: true
        });
        this.db.insert({
            _id: "19",
            name: "Lamb",
            allergen: false
        });
        this.db.insert({
            _id: "20",
            name: "Pork",
            allergen: false
        });
        this.db.insert({
            _id: "22",
            name: "Crab",
            allergen: false
        });
        this.db.insert({
            _id: "23",
            name: "Vegetables",
            allergen: false
        });
        this.db.insert({
            _id: "24",
            name: "Beef",
            allergen: false
        });
        this.db.insert({
            _id: "25",
            name: "Onion",
            allergen: false
        });
        this.db.insert({
            _id: "26",
            name: "Coconut",
            allergen: false
        });
        this.db.insert({
            _id: "27",
            name: "Bamboo shoot",
            allergen: false
        });
        this.db.insert({
            _id: "28",
            name: "Bell pepper",
            allergen: false
        });
        this.db.insert({
            _id: "29",
            name: "Aubergine",
            allergen: false
        });
        this.db.insert({
            _id: "30",
            name: "Basil",
            allergen: false
        });
        this.db.insert({
            _id: "31",
            name: "Squid",
            allergen: false
        });
        this.db.insert({
            _id: "32",
            name: "Egg",
            allergen: true
        });
        this.db.insert({
            _id: "33",
            name: "Curry",
            allergen: false
        });
        this.db.insert({
            _id: "34",
            name: "Pineapple",
            allergen: false
        });
        this.db.insert({
            _id: "35",
            name: "Grapes",
            allergen: false
        });
        this.db.insert({
            _id: "36",
            name: "Broccoli",
            allergen: false
        });
        this.db.insert({
            _id: "37",
            name: "Sea bass",
            allergen: false
        });
        this.db.insert({
            _id: "38",
            name: "Rice",
            allergen: false
        });
        this.db.insert({
            _id: "39",
            name: "Oyster",
            allergen: false
        });
        this.db.insert({
            _id: "40",
            name: "Banana",
            allergen: false
        });
        this.db.insert({
            _id: "41",
            name: "Sesame",
            allergen: true
        });
        this.db.insert({
            _id: "42",
            name: "Vanilla",
            allergen: false
        });
        this.db.insert({
            _id: "43",
            name: "Milk",
            allergen: true
        });
        this.db.insert({
            _id: "44",
            name: "Mango",
            allergen: false
        });
        this.db.insert({
            _id: "45",
            name: "Sago",
            allergen: false
        });
        this.db.insert({
            _id: "46",
            name: "Chocolate",
            allergen: false
        });
        this.db.insert({
            _id: "47",
            name: "Noodles",
            allergen: false
        });
        this.db.insert({
            _id: "49",
            name: "Cod",
            allergen: false
        })
    }

    //a function to return all entries from the database
    getAllEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({}).sort({name:1}).exec( function (err, entries) {
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

    addIngredient(name, allergen){
        // add new ingredient
        this.db.insert({
            name: name,
            allergen: allergen
        });
    }

    editIngredient(id, name, allergen){
        this.db.update({_id: id.slice(1)}, { $set:{name: name, allergen: allergen}}, {}, function(err, numReplaced){
            if(err){
                console.log(err)
            } else {
                console.log("Updated")
            }
        })
    }

    deleteEntry(id){
        //delete ingredient - functionality exists but not fully implemented as all dishes containing ingredient would be impacted
        this.db.remove({_id:id.slice(1)}, {}, function(err, numRemoved){
            if(err){
                console.log(err)
            }
            else{
                console.log("ingredient deleted")
            }
        })
    }
}

module.exports = Ingredients;