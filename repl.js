const repl = require("repl");
const { default: Kettle } = require("./out/Kettle");
const { default: User } = require("./out/Models/User");
const { default: Repository } = require("./out/Models/Repository");

AdminClient = new Kettle("http://localhost:3000","409d7b787cadcb281ed38ce4385dd8a40ce72578");
UserClient = new Kettle("http://localhost:3000", "5e0ef8de53839d3807cc04d12fc6f21732f46d9d");

repl.start("> ");