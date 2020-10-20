// Created: Alfredo Vieira Neto
// Student Number: 301106786
// Subject: COMP229 - Web Application Development
// Date: 10/01/2020
// Institution: Centennial College
// Component: Database

// Loads MongoDB
var MongoClient = require("mongodb").MongoClient;
// Instanciates the ObjectID converter for ids
var ObjectID = require("mongodb").ObjectID;

// Saves the connection url to the MongoDB database on the cloud
const uri =
  "mongodb+srv://portfolio:qwerty@1234@cluster0.70zvn.mongodb.net/PULKIT?retryWrites=true&w=majority";

// Exports GET DELETE UPDATE functions
module.exports = {
  FindinCol1: function () {
    return MongoClient.connect(uri)
      .then(function (db) {
        var collection = db.db("PULKIT").collection("customer");

        return collection
          .find({ name: { $exists: true } })
          .sort({ name: 1 })
          .toArray();
      })
      .then(function (items) {
        return items;
      });
  },
  deleteById: function (id) {
    return MongoClient.connect(uri)
      .then(function (db) {
        var collection = db.db("PULKIT").collection("customer");
        return collection.deleteOne({ _id: id });
      })
      .then(function (err, result) {
        return err;
      });
  },
  updateById: function (id, data) {
    return MongoClient.connect(uri)
      .then(function (db) {
        var collection = db.db("PULKIT").collection("customer");
        return collection.updateOne({ _id: id }, { $set: data });
      })
      .then(function (resp) {
        console.log(resp);
      });
  },
};
