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

// Function to insert or update drive details
async function insertOrUpdateDrive(
  ssd_type,
  hdd_type,
  form_factor,
  capacity,
  new_quantity
) {
  const client = await pool.connect();
  try {
    // Determine the type of drive (SSD or HDD)
    const typeColumn = ssd_type ? "ssd_type" : "hdd_type";
    const typeValue = ssd_type || hdd_type;

    // Check if the entry already exists in the database
    const checkQuery = `
      SELECT "quantity"
      FROM public."drives"
      WHERE "${typeColumn}" = $1 AND "form_factor" = $2 AND "capacity" = $3
    `;
    const checkResult = await client.query(checkQuery, [
      typeValue,
      form_factor,
      capacity,
    ]);

    if (checkResult.rows.length > 0) {
      // Update the quantity if the entry exists
      const currentQuantity = checkResult.rows[0].quantity;
      const newTotalQuantity = currentQuantity + new_quantity;

      const updateQuery = `
        UPDATE public."drives"
        SET "quantity" = $1
        WHERE "${typeColumn}" = $2 AND "form_factor" = $3 AND "capacity" = $4
      `;
      await client.query(updateQuery, [
        newTotalQuantity,
        typeValue,
        form_factor,
        capacity,
      ]);
      return "Quantity updated successfully!";
    } else {
      // Insert a new entry if it does not exist
      const insertQuery = `
        INSERT INTO public."drives" ("ssd_type", "hdd_type", "form_factor", "capacity", "quantity")
        VALUES ($1, $2, $3, $4, $5)
      `;
      await client.query(insertQuery, [
        ssd_type,
        hdd_type,
        form_factor,
        capacity,
        new_quantity,
      ]);
      return "New row inserted successfully!";
    }
  } catch (error) {
    console.error("Error inserting or updating drive:", error);
    throw error;
  } finally {
    client.release();
  }
}

// Handle POST requests to add or update drive details
export async function POST(req) {
  try {
    const { ssdType, hddType, formFactor, capacity, quantity } =
      await req.json();

    console.log(
      "Received data:",
      "\nSSD Type:",
      ssdType || "NULL",
      "\nHDD Type:",
      hddType || "NULL",
      "\nForm Factor:",
      formFactor,
      "\nCapacity:",
      capacity,
      "\nQuantity:",
      quantity
    );

    const result = await insertOrUpdateDrive(
      ssdType || null,
      hddType || null,
      formFactor,
      capacity,
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
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process the request",
      },
      { status: 500 }
    );
  }
}
