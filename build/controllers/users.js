"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.show = exports.list = void 0;
const connection_1 = __importDefault(require("../sql/connection"));
const uuid_1 = require("uuid");
const users = [
    {
        id: "1",
        name: "test",
        password: "test123",
    },
    {
        id: "2",
        name: "link",
        password: "test123",
    },
];
const list = (req, res) => {
    connection_1.default.query("SELECT * FROM users", (err, rows, fields) => {
        console.log(rows);
        res.json(rows);
        // try {
        // } catch {
        //   throw new Error(err);
        // }
    });
};
exports.list = list;
const show = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    res.json(user);
};
exports.show = show;
const create = (req, res) => {
    const { name, password } = req.body;
    users.push({
        id: (0, uuid_1.v4)(),
        name,
        password,
    });
    console.log(users);
    res.json(users);
};
exports.create = create;
const update = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    const userIndex = users.findIndex((user) => user.id === id);
    const newUser = Object.assign(Object.assign({}, user), req.body);
    users.splice(userIndex, 1, newUser);
    res.json(newUser);
};
exports.update = update;
const remove = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === id);
    users.splice(userIndex, 1);
    res.json({ message: `Removed user ${id}` });
};
exports.remove = remove;
