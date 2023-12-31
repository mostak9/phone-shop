require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6nmlwzx.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const phonesCollection = client.db("phoneDB").collection("phonesCollection");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // api to get data count
    app.get("/dataCount", async (req, res) => {
      const result = await phonesCollection.estimatedDocumentCount();
      res.send({ result });
    });
    // api to get all the products
    app.get("/allProducts", async (req, res) => {
      const index = parseInt(req.query.index) || 0;
      const limit = parseInt(req.query.limit) || null;
      let filter = {}
      if(req.query.brand){
        filter = {brand: req.query.brand};
      }
      else if(req.query.name){
        filter = {model:  { $regex: req.query.name, $options: 'i' }};
      }
      

      console.log(req.query.brand);
      const result = await phonesCollection
        .find(filter)
        .skip(index)
        .limit(limit)
        .toArray();
      res.send(result);
    });
    // api to get latest products
    app.get("/latestProducts", async (req, res) => {
      const result = await phonesCollection
        .aggregate([{ $sample: { size: 12 } }])
        .toArray();
      res.send(result);
    });

    // api to get single products
    app.get("/productDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const product = await phonesCollection.findOne(query);
      res.send(product);
    });

    // api to brands 
    app.get('/brands', async (req, res) => {
      const data = await phonesCollection.aggregate([
        {
          $group: {
            _id: null,
            brands: { $addToSet: '$brand' }
          }
        },
        {
          $project: {
            _id: 0,
            brands: 1
          }
        }
      ]).toArray();
      res.send(data[0].brands.sort());
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Phone server is running");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
