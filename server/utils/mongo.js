const { MongoClient } = require("mongodb");
const {
  SuccessActionResult,
  ErrorActionResult,
  isErrorResult,
} = require("./common");

const databaseURI = process.env.databaseURI;
const databaseName = process.env.databaseName;

let connected = null;
class Mongo {
  constructor() {
    this.client = new MongoClient(databaseURI);
    this.db = null;
  }

  async connect() {
    if (this.client && connected) {
      return SuccessActionResult(this.client);
    }

    try {
      await this.client.connect();
      connected = true;
      return SuccessActionResult(this.client);
    } catch (er) {
      return ErrorActionResult(er);
    }
  }

  async getDB() {
    const connectResult = await this.connect();
    if (isErrorResult(connectResult)) {
      return ErrorActionResult(connectResult.error);
    }

    const client = connectResult.result;
    return SuccessActionResult(client.db());
  }

  async getCollection(name) {
    const driver = this.client.db(databaseName).collection(name);
    return driver;
  }
}

module.exports = new Mongo();
