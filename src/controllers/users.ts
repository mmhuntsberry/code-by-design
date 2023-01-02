import pool from "../sql/connection";
import { v4 as uuidv4 } from "uuid";
import type { Request, Response } from "express";

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

export const list = (req: Request, res: Response) => {
  pool.query("SELECT * FROM users", (err, rows, fields) => {
    console.log(rows);
    res.json(rows);
    // try {
    // } catch {
    //   throw new Error(err);
    // }
  });
};

export const show = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.json(user);
};

export const create = (req: Request, res: Response) => {
  const { name, password } = req.body;

  users.push({
    id: uuidv4(),
    name,
    password,
  });
  console.log(users);
  res.json(users);
};

export const update = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  const userIndex = users.findIndex((user) => user.id === id);

  const newUser = {
    ...user,
    ...req.body,
  };
  users.splice(userIndex, 1, newUser);
  res.json(newUser);
};

export const remove = (req: Request, res: Response) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === id);

  users.splice(userIndex, 1);
  res.json({ message: `Removed user ${id}` });
};
