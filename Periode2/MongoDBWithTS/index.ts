import * as mongo from "mongodb";
const MongoClient = mongo.MongoClient;
const uri = "mongodb+srv://fullstackUser:handel18mind@fullstack-cluster.zg9qf.mongodb.net/<dbname>?retryWrites=true&w=majority";

/* IMPORTANT ---> 
   Before you start, do a tcs --init in the root of the project to create tsconfig.json
*/

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function insertAndReadData() {
    try {
        await client.connect();
        const db = client.db('test');
        await db.collection('inventory').deleteMany({})
        const result = await db.collection('inventory').insertOne({
            item: "canvas",
            qty: 100,
            tags: ["cotton"],
            size: { h: 28, w: 35.5, uom: "cm" }
          })
           //console.log('Count', result.insertedCount)
           //console.log('ID', result.insertedId)
           //console.log('Object', result.ops)
           var results = await db.collection('inventory').find({}).toArray();
           //cursor.forEach((data)=>{if(data){console.log(data)}},(err)=>{if(err){console.log(err)}})
           console.log('All data',results)

        


    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Connection Closed")
    }
}


async function connectSetupDataAndGetDB() {
    await client.connect();
    const db = client.db('test');
    await db.collection('inventory').deleteMany({})
    await db.collection('inventory').insertMany([
        { item: "journal",
          qty: 25,
          size: { h: 14, w: 21, uom: "cm" },
          status: "A"},
        { item: "notebook",
          qty: 50,
          size: { h: 8.5, w: 11, uom: "in" },
          status: "A"},
        { item: "paper",
          qty: 100,
          size: { h: 8.5, w: 11, uom: "in" },
          status: "D"},
        { item: "planner",
          qty: 75, size: { h: 22.85, w: 30, uom: "cm" },
          status: "D"},
        { item: "postcard",
          qty: 45,
          size: { h: 10, w: 15.25, uom: "cm" },
          status: "A"}
      ])
      return db;
}

async function readDataWithQueries() {
    try {
        const db = await connectSetupDataAndGetDB();
        let result = await db.collection('inventory').find({ status: "D" }).toArray();
        console.log('status D',result)

        result = await db.collection('inventory').find({ 
            size: { h: 14, w: 21, uom: "cm" }
          }).toArray();
        console.log('Size',result)

        result = await db.collection('inventory').find({ 
            "size.uom": "in"
          }).toArray();
        console.log('size uom',result)

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}

async function readWithOptions() {
    try {
        const db = await connectSetupDataAndGetDB();
        let result = await db.collection('inventory').find(
            {},
            {
                projection: {item:1, qty:1, _id:0},
                limit: 3,
                sort : {qty:-1}
            }
            ).toArray();
        console.log(result);
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}

async function readDataWithOperatorsAndCompoundQueries() {
    try {
        const db = await connectSetupDataAndGetDB();
        let result = await db.collection('inventory').find({ 
            "size.h": { $lt: 15 }
          }).toArray();
          //console.log('height lt 15',result)

          result =  await db.collection('inventory').find({ 
            status: "A", 
            qty: { $lt: 30 }
          }).toArray();
          //console.log('status A, qty lt 30', result)

          result =  await db.collection('inventory').find({ 
            $or: [ {status: "A" }, { qty: { $lt: 30 } } ]
          }).toArray();
          console.log('status A OR qty lt 30', result)

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
async function updateData() {
    try {
        const db = await connectSetupDataAndGetDB();

        let result = await db.collection('inventory').findOneAndUpdate(
            { item: "paper" },
            { $set: { "size.uom": "cm", status: "P" },
              $currentDate: { lastModified: true } },
              {returnOriginal:false}
              );
        //console.log(result.value)

        const res = await db.collection('inventory').updateMany(
            { qty: { $lt: 50 } },
            { $set: { "size.uom": "in", status: "P" },
              $currentDate: { lastModified: true } })
        console.log(res.modifiedCount)
             
               
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }

}
async function deleteData() {
    try {
        const db = await connectSetupDataAndGetDB();

        let result = await db.collection('inventory').findOneAndDelete({ 
            status: "D" 
        })
        //console.log(result)

        const res = await db.collection('inventory').deleteMany({ 
            status: "A" 
          })
          console.log(res.deletedCount)
        
          
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
//insertAndReadData();
//readDataWithQueries();
//readWithOptions()
//readDataWithOperatorsAndCompoundQueries();
//updateData()
deleteData()