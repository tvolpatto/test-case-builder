const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
  name: { type: String, required: true }
});

const mainSchema = new Schema({
  name: { type: String, required: true },
  market_id: { type: Schema.Types.ObjectId, ref: "Market" } 
});

const caseSchema = new Schema({
  description: { type: String, required: true },
  main_id: { type: Schema.Types.ObjectId, ref: "Main" },

});

const workflowSchema = new Schema({
  number: { type: String, required: true },
  market_id: { type: Schema.Types.ObjectId, ref: "Market" } ,

});

const testResultsSchema = new Schema({
  number: { type: String, required: true },
  workflow_id: { type: Schema.Types.ObjectId, ref: "Workflow" } ,

});


const Market = mongoose.model("Market", marketSchema);
const Main = mongoose.model("Main", mainSchema);
const Case = mongoose.model("Case", caseSchema);
const Workflow = mongoose.model("Workflow", caseSchema);
const TestResults = mongoose.model("TestResult", testResultsSchema);


module.exports = { Market, Main, Case, Workflow, TestResults };
