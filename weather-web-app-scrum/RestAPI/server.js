require("dotenv").config({ path: "./.env" });

const { MongoClient, ServerApiVersion } = require("mongodb");

// import node-fetch

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const express = require("express");

var bodyParser = require("body-parser");
const app = express();

const cors = require("cors");

app.use(cors()); //Fixes CORS issues

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Content-Security-Policy", "default-src");
  next();
});

// create application/x-www-form-urlencoded parser

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Open db connection

const uri = `mongodb+srv://mongoadmin:${process.env.MONGO_DB_PWD}@cluster0.trufl7s.mongodb.net/?retryWrites=true&w=majority`;
const uri2 =
  "mongodb+srv://mongdb-demo:VTfuNWkH6kSZWsdD@customes.vtbsjg2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const client2 = new MongoClient(uri2, {
  // testidb *poista*
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("weatherdatadb"); // DB name
    const coll = db.collection("weatherdatadb"); // DB collection name

    // Add new user
    app.post("/insert/user", urlencodedParser, async (req, res) => {
      const collUsers = db.collection("users"); // DB collection name
      // Connect client
      await client.connect();

      // Build user from request parameters
      // Add location object here for future use(?)
      const newUser = {
        email: req.body.email,
        password: req.body.password,
        // Adding dummy data for testing
      };

      // Check if email is already in database
      const query = {
        email: req.body.email,
      };

      // Find data based on query parameters
      let result = await collUsers.findOne(query);

      // Check if email is already in use
      if (result === null) {
        res.status(200).send({ message: "ok" });
        // Add new user to db
        await collUsers.insertOne(newUser);
      } else {
        res.status(400).send({ message: "Sähköposti on jo käytössä." });
      }
    });

    const db2 = client2.db("WeatherAPPDB"); // testidb *poista*
    const coll2 = db2.collection("Users"); //testidb collection *poista*

    app.get("/api/collection", async (req, res) => {
      await client2.connect();
      await client2.db("WeatherAPPDB").command({ ping: 1 });

      //Luetaan email pyynnöstä /api/collection?user=<email>
      console.log(req.query.user);
      //const queryId= req.query.id
      /*
            db.players.find( {}, { 
              games: { $elemMatch: { score: { $gt: 5 } } },
               joined: 1, 
               lastLogin: 1
               } )*/

      const query = {
        email: req.query.user,
        locations: {
          $elemMatch: { id: 1 },
        },
      };
      console.log("query: " + JSON.stringify(query));
      coll2.find({ locations: { $elemMatch: { id: 1 } } });
      const response = await coll2.findOne(query);
      console.log("response:");
      console.log(response);
      res.status(200).json({ response });
      /*
      console.log("Succesfull Ping");
      if (response != null) {
        console.log("Data found" + response.locations)
        console.log(response.locations)
        res.status(200).json({ response });
      }
      else {
        res.status(404).json({ response:"User not found" });
      }
      */
    });
    app.post("/api/collection", urlencodedParser, async (req, res) => {
      await client2.connect();
      await client2.db("WeatherAPPDB").command({ ping: 1 });
      //console.log(req.query.user)
      /*const query = {
        email: req.query.user,
        locations: {
          $elemMatch: { id: 1 }
        }
      };*/
      const newBody = req.body;
      console.log("PAssed express body");
      console.log(newBody);
      /*
      coll2.find({ locations: { $elemMatch: { id: 1 } } })
      const response = await coll2.updateOne(query,newBody);*/

      console.dir(req.body);
      console.log("test");
    });

    // Data fetching with dynamic variables

    app.get("/api/:kaupunki", async (req, res) => {
      // Connect client
      await client.connect();
      // Users location
      const userLocation = req.params.kaupunki;

      //Forecast length

      const forecastLength = 5;

      // Fetch data from external API

      const docs = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=796e7bc31de84f04826110615232504&q=${userLocation}&days=${forecastLength}&aqi=no`
      );

      // Convert docs to JSON

      const docsJson = await docs.json();

      // Add data to db
      await coll.insertOne(docsJson);
      console.log("Data lisätty onnistuneesti tietokantaan", docsJson);

      // Redirect to different endpoint

      res.redirect(`/result/${req.params.kaupunki}`);
    });

    // Get data from db

    app.get("/result/:kaupunki", async (req, res, next) => {
      // Connect client
      await client.connect();
      console.log("Haetaan dataa tietokannasta...");

      // Set users location
      let userLocation = req.params.kaupunki;

      let currentTime = new Date().getTime();
      // Get current date - 2 hours on correct format

      let updatedTime = new Date(currentTime - 2 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 16)
        .replace("T", " ");

      // Query for specific data
      let i = 0;
      const query = {
        "location.name": userLocation,
        // Get data that is newer than current time - 2h
        "location.localtime": { $gte: updatedTime },
      };

      // Find data based on query parameters
      let result = await coll.findOne(query);

      // If data is null try again
      while (result === null || i <= 5) {
        result = await coll.findOne(query);
        i++;
      }

      // If data is null
      if (result === null) {
        res.send("Kaupunkia ei löytynyt");
      }
      console.log("Mongosta haettua Dataa: " + result);
      // Print results

      res.status(200).json({ result });

      next();
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    await client2.close();
  }
}
run().catch(console.dir);

app.listen(4000, () => console.log("Serveri kuuntelee portissa: ", 4000));
