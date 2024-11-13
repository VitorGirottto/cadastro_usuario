require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

let singleton;

async function connect() {

    try {
        const client = new MongoClient(process.env.MONGO_HOST);
        await client.connect();
        console.log("Conectado ao MongoDB!");
        return client.db(process.env.MONGO_DATABASE);
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
    
    if(singleton) return singleton;

    const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();

    ClientEncryption.db(process.env.MONGO_DATABASE);
    return singleton;
}

async function  insert(customer) {
    const db = await connect();
    return db.collection("custumers").insertOne(customer);
}

async function  find() {
    const db = await connect();
    return db.collection("custumers").find().toArray();
}

async function remove(id){
    const db = await connect();
    return db.collection("custumers").deleteOne({_id: new ObjectId(id)});
}

async function update(id, name){
    const db = await connect();
    return db.collection("custumers").updateOne({_id: new ObjectId(id)}, {$set: {name} });
}

module.exports = {
    insert,
    find,
    remove,
    update
}