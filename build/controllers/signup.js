"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
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
const create = (req, res) => {
    const { name, password } = req.body;
    users.push({
        id: (0, uuid_1.v4)(),
        name,
        password,
    });
    res.json(users);
};
exports.create = create;
