import { NextResponse } from "next/server";
import { Pool } from "pg";

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

async function checkDatabaseConnection() {
  const client = await pool.connect();
  try {
    console.log("Database connected successfully!");

    // Query to list all tables in the database
    const tablesQuery = `
      SELECT tablename 
      FROM pg_catalog.pg_tables 
      WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';
    `;
    const tablesResult = await client.query(tablesQuery);
    console.log("Tables in the database:", tablesResult.rows);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    client.release();
  }
}

async function insertOrUpdateRAMDIMMStick(
  RAM_type,
  RAM_generation,
  RAM_speed,
  RAM_capacity,
  new_quantity
) {
  const client = await pool.connect();
  try {
    const checkQuery = `
      SELECT "quantity" FROM "ram_dimm_sticks" 
      WHERE "ram_type" = $1 AND "ram_generation" = $2 AND "ram_speed" = $3 AND "ram_capacity" = $4
    `;
    const checkResult = await client.query(checkQuery, [
      RAM_type,
      RAM_generation,
      RAM_speed,
      RAM_capacity,
    ]);

    if (checkResult.rows.length > 0) {
      const currentQuantity = checkResult.rows[0].quantity;
      const newTotalQuantity = currentQuantity + new_quantity;

      const updateQuery = `
        UPDATE public."ram_dimm_sticks" 
        SET quantity = $1 
        WHERE "ram_type" = $2 AND "ram_generation" = $3 AND "ram_speed" = $4 AND "ram_capacity" = $5
      `;
      await client.query(updateQuery, [
        newTotalQuantity,
        RAM_type,
        RAM_generation,
        RAM_speed,
        RAM_capacity,
      ]);
      return "Quantity updated successfully!";
    } else {
      const insertQuery = `
        INSERT INTO public."ram_dimm_sticks" ("ram_type", "ram_generation", "ram_speed", "ram_capacity", quantity)
        VALUES ($1, $2, $3, $4, $5)
      `;
      await client.query(insertQuery, [
        RAM_type,
        RAM_generation,
        RAM_speed,
        RAM_capacity,
        new_quantity,
      ]);
      return "New row inserted successfully!";
    }
  } finally {
    client.release();
  }
}

export async function POST(req) {
  try {
    const { ramType, ramGeneration, ramSpeed, ramCapacity, quantity } =
      await req.json();
    console.log(
      "Ram Type: ",
      ramType,
      "\nGeneration: ",
      ramGeneration,
      "\nSpeed: ",
      ramSpeed,
      "\nCapacity: ",
      ramCapacity,
      "\nQuantity: ",
      quantity
    );

    const result = await insertOrUpdateRAMDIMMStick(
      ramType,
      ramGeneration,
      ramSpeed,
      ramCapacity,
      parseInt(quantity)
    );

    return NextResponse.json(
      {
        success: true,
        message: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting RAM DIMM Stick details:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit RAM DIMM Stick details",
      },
      { status: 500 }
    );
  }
}

checkDatabaseConnection();
