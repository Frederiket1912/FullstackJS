# Period-2 Node, Express with TypeScript, JavaScript Backend Testing, MongoDB and Geo-location

Note: This description is too big for a single exam-question. It will be divided up into separate questions for the exam

1) Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat
 - You write backend and frontend in the same language.
 
2) Explain the difference between Debug outputs and ApplicationLogging. What’s wrong with console.log(..) statements in our backend code.


3) Demonstrate a system using application logging and environment controlled debug statements.
 - See readyForDay6/src/middlewares/logger for example of logging and .env for debug settings.

4) Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript/Typescript + relevant packages
 - We use the testing framework Mocha to execute tests and log test results to the terminal. We use the assertion library Chai to verify our return values in our tests.
 - See readyForDay6/test/gameEndpointTest and /gameFacadeTest for examples.

5) Explain a setup for Express/Node/Test/Mongo-DB development with Typescript, and how it handles "secret values",  debug and testing.

6) Explain, preferably using an example, how you have deployed your node/Express applications, and which of the Express Production best practices you have followed.
- example https://4semester.frederiket.dk/
- Best practices followed:
  - only used async code.
  - handling exceptions.
  - ensure app automatically restarts via pm2 on the droplet.
  - use reverse proxy nginx.
  
7) Explain possible steps to deploy many node/Express servers on the same droplet, how to deploy the code and how to ensure servers will continue to operate, 
even after a droplet restart.
 - On digital ocean under networking you can set up different DNS records to point to your droplets ip adress fx app1.frederiket.dk and app2.frederiket.dk.
 - To deploy code and ensire servers continue to operate follow steps here https://docs.google.com/document/d/1Wqd5-TNBXVp4lBhxRrJ10ul7Nq9-CVyoyTwm6gWPHA8/edit
 
8) Explain, your chosen strategy to deploy a Node/Express application including how to solve the following deployment problems:
- see answer 7

9) Ensure that you Node-process restarts after a (potential) exception that closed the application
- see answer 7

10) Ensure that you Node-process restarts after a server (Ubuntu) restart
- see answer 7

11) Ensure that you can run “many” node-applications on a single droplet on the same port (80)
- see answer 7

12) Explain, using relevant examples, the Express concept; middleware.
 - Express middleware are functions that execute during the lifecycle of a request to the Express server. 
 Each middleware has access to the HTTP request and response for each route (or path) it's attached to. 
 In fact, Express itself is compromised wholly of middleware functions.
 - for examples see readyForDay6/src/middlewares/basic-auth.ts and the implementation in readyForDay6/scr/routes/userApiDB.ts

13) Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express  + TypeScript and demonstrate how you have tested the API.
 - I have used express to create an app object which you can attach paths to for your different endpoints and to start op a server. See readyForDay6/src/app.ts for example.
 - I have also used express router to specify what happens at each of my endpoints. See readyForDay6/src/routes/gameAPI.ts for example.
 - We use the testing framework Mocha to execute tests and log test results to the terminal. We use the assertion library Chai to verify our return values in our tests.
 - See readyForDay6/test/gameEndpointTest.ts for example.

14) Explain, using relevant examples, how to test JavaScript/Typescript Backend Code, relevant packages (Mocha, Chai etc.) and how to test asynchronous code.
 - We use the testing framework Mocha to execute tests and log test results to the terminal. We use the assertion library Chai to verify our return values in our tests.
 - To indicate that a test is Asynchronous in Mocha, you simply pass a callback as the first argument to the it() method.
 - See readyForDay6/test/gameFacadeTest.ts for example. 

# NoSQL and MongoDB 
1) Explain, generally, what is meant by a NoSQL database.
 - SQL databases are relational, NoSQL are non-relational.
 - SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
 - SQL databases are vertically scalable, NoSQL databases are horizontally scalable.
 - SQL databases are table based, while NoSQL databases are document, key-value, graph or wide-column stores.
 - SQL databases are better for multi-row transactions, NoSQL are better for unstructured data like documents or JSON.
 
2) Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
 - SQL databases are vertically scalable, NoSQL databases are horizontally scalable.
 - SQL databases are better for multi-row transactions, NoSQL are better for unstructured data like documents or JSON.

3) Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
 - Indexes support the efficient execution of queries in MongoDB.
 Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement.
 If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect.
 Indexes are special data structures that store a small portion of the collection’s data set in an easy to traverse form.
 The index stores the value of a specific field or set of fields, ordered by the value of the field. 
 The ordering of the index entries supports efficient equality matches and range-based query operations.
 In addition, MongoDB can return sorted results by using the ordering in the index.
 - Indexes are created by using the .createIndex method on a collection:
 ```
 collection.createIndex( { <key and index type specification> }, function(err, result) {
   console.log(result);
   callback(result);
}
```
 - See readyForDay6/src/utils/makeTestLocationData.ts for example.  

4) Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere and perhaps also the Unique Index.
 - The TTL (time to live) index is used to automate deletion of certain documents after a certain amount of time. 
 - See readyForDay6/src/makeTestLocationData where it is used on the "lastUpdated" field to ensure that it is deleted after 30 seconds.
  
 - A 2dsphere index supports queries that calculate geometries on an earth-like sphere. 
 2dsphere index supports all MongoDB geospatial queries: queries for inclusion, intersection and proximity.
 - It is set in readyForDay6/src/makeTestLocationData on the "location" field. It is used to enable the $near option when finding nearby players in readyForDay6/src/facades/gameFacade.ts

5) Demonstrate, using a REST-API designed by you, how to perform all CRUD operations on a MongoDB
 - See readyForDay6/src/facades/suerFacadeWithDB.ts for examples of create, read and delete. 
 - See readyForDay6/src/facades/gameFacade.ts for example of update (updating playing position when finding nearby players)

6) Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)
 - See readyForDay6 for example.

7) Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization
 - In my positions collection in readyForDay6 i have the fields userName and name from the user collection, which makes it denormalized.

# Geo-location and Geojson
1) Explain and demonstrate basic Geo-JSON, involving as a minimum, Points and Polygons
 - GeoJSON is a format for encoding a variety of geographic data structures.
 - Points are just a single x,y coordinate which is used to locate a thing on a 2d plane.
 - Polygons are a list of points with lines between each point. The first and last coordinates must be the same so the polygon is closed.

2) Explain and demonstrate ways to create Geo-JSON test data
 - See readyForDay6/src/utils/geoUtils.ts for example of creating points.

3) Explain the typical order of longitude and latitude used by Server-Side APIs and Client-Side APIs
 - The typical order is longitude, latitude because longitude coresponds to the x-axis and latitude coresponds to the y-axis. 
 - There is no fixed standard however, and many places use latitude, longitude.

4) Explain and demonstrate a REST API that implements geo-features, using a relevant geo-library and plain JavaScript
 - See geojson-start-demo for example.

5) Explain and demonstrate a REST API that implements geo-features, using Mongodb’s geospatial queries and indexes.
 - See readyForDay6 for example.

6) Explain and demonstrate how you have tested the gameFacade and gameAPI for the game-related parts of the period exercises
 - For the facade I set up a connection to the test DB and query it in different ways and use Chai to check if our results are what we expect.
 - See readyForDay6/src/test/gameFacadeTest.ts for example.
 
 - For the endpoints we set up a test server and post to it with different requests and use Chai to check if our results are what we expect.
 - See readyForDay6/src/test/gameEndpointTest.ts
