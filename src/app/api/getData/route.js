import { Pool } from "pg";

// Set up your PostgreSQL connection
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "ondemand",
//   password: "9599",
//   port: 5432,
// });

const pool = new Pool({
  user: "stockedit",
  host: "localhost",
  database: "stockinfo",
  password: "oru2ioFaPugheec7",
  port: 5433,
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

    const totalQuantityResult = await pool.query(totalQuantityQuery);
    const ramCapacityResult = await pool.query(ramCapacityQuery);

    const totalQuantity = totalQuantityResult.rows[0].total_quantity;
    const ramCapacities = ramCapacityResult.rows;

    return new Response(JSON.stringify({ totalQuantity, ramCapacities }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
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