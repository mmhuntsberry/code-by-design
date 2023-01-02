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

export const create = (req: Request, res: Response) => {
  const { name, password } = req.body;

  users.push({
    id: uuidv4(),
    name,
    password,
  });
  res.json(users);
};
