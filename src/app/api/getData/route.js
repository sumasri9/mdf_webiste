import { Pool } from "pg";

// Set up your PostgreSQL connection
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "ondemand",
//   password: "9599",
//   port: 5432,
// });

// const pool = new Pool({
//   user: "stockedit",
//   host: "localhost",
//   database: "stockinfo",
//   password: "oru2ioFaPugheec7",
//   port: 5433,
// });

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Named export for the `GET` method
export async function GET(req) {
  try {
    const totalQuantityQuery =
      "SELECT SUM(quantity) AS total_quantity FROM RAM_DIMM_sticks;";
    const ramCapacityQuery = `
      SELECT RAM_capacity, SUM(quantity) AS count 
      FROM RAM_DIMM_sticks 
      GROUP BY RAM_capacity;
    `;

    // Query to get CMOS battery quantity
    const cmosQuantityQuery = "SELECT cmos_quantity FROM single_components;";

    const totalQuantityResult = await pool.query(totalQuantityQuery);
    const ramCapacityResult = await pool.query(ramCapacityQuery);
    const cmosQuantityResult = await pool.query(cmosQuantityQuery);

    const totalQuantity = totalQuantityResult.rows[0].total_quantity;
    const ramCapacities = ramCapacityResult.rows;
    const cmosQuantity =
      cmosQuantityResult.rows.length > 0
        ? cmosQuantityResult.rows[0].cmos_quantity
        : 0;

    return new Response(
      JSON.stringify({ totalQuantity, ramCapacities, cmosQuantity }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching RAM data:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching RAM data", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
