const pool = require("./pool");

async function getAllWarriors() {
  const { rows } = await pool.query("SELECT * FROM warriors");
  return rows;
}

async function getSearchWarrior(keyword) {
  const { rows } = await pool.query(`SELECT * FROM warriors WHERE name ILIKE $1`,[`%${keyword}%`]);
  return rows;
}

async function createWarrior(warrior) {
  console.log(warrior);
  await pool.query("INSERT INTO warriors (name,sex,weapon,pet,rarity,creator) VALUES ($1,$2,$3,$4,$5,$6)", warrior);
}

async function getCatagoryWarrior(rarity) {
  const {rows} = await pool.query('SELECT * FROM warriors WHERE LOWER(rarity) = LOWER($1);',[rarity]);
  return rows;
}

module.exports = {
  getAllWarriors,
  getSearchWarrior,
  createWarrior,
  getCatagoryWarrior
};
