#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS warriors (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  sex VARCHAR ( 255 ),
  weapon VARCHAR ( 255 ),
  pet VARCHAR ( 255 ),
  rarity VARCHAR ( 255 ),
  creator VARCHAR ( 255 )
);

INSERT INTO warriors (name,sex,weapon,pet,rarity,creator)
VALUES
  ('Rengoku','Male','Sword','Crow','Legendary','Admin'),
  ('Erza','Female','Hammer','Dragon','Epic','Admin')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized:false}
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
