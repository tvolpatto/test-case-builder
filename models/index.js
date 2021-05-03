const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
  code: { type: String, required: true }
  name: { type: String, required: true }
});

const groupSchema = new Schema({
  name: { type: String, required: true },
  market_id: { type: Schema.Types.ObjectId, ref: "Market" } ,
});

const caseSchema = new Schema({
  description: { type: String, required: true },
  group_id: { type: Schema.Types.ObjectId, ref: "Group" },

});

const workflowSchema = new Schema({
  number: { type: String, required: true },
  group_id: { type: Schema.Types.ObjectId, ref: "Group" },

});

const testResultsSchema = new Schema({
  number: { type: String, required: true },
  workflow_id: { type: Schema.Types.ObjectId, ref: "Workflow" } ,
  case_id: { type: Schema.Types.ObjectId, ref: "Case" },
  result: { type: String},
  note: { type: String}
});


const Market = mongoose.model("Market", marketSchema);
const Group = mongoose.model("Group", mainSchema);
const Case = mongoose.model("Case", caseSchema);
const Workflow = mongoose.model("Workflow", caseSchema);
const TestResults = mongoose.model("TestResult", testResultsSchema);


module.exports = { Market, Group, Case, Workflow, TestResults };
