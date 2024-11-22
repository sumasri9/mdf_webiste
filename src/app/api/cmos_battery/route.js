import { NextResponse } from "next/server";
import { Pool } from "pg";

// PostgreSQL connection configuration
const pool = new Pool({
  user: "stockedit",
  host: "localhost",
  database: "stockinfo",
  password: "oru2ioFaPugheec7",
  port: 5433,
});

// Function to insert or update CMOS battery quantity
async function insertOrUpdateCMOSQuantity(newQuantity) {
  const client = await pool.connect();
  try {
    // Check if there is an existing quantity
    const checkQuery = `
      SELECT "cmos_quantity"
      FROM single_components
    `;
    const checkResult = await client.query(checkQuery);

    if (checkResult.rows.length > 0) {
      // Update the quantity if a record exists
      const currentQuantity = checkResult.rows[0].cmos_quantity || 0;
      const updatedQuantity = currentQuantity + newQuantity;

      const updateQuery = `
        UPDATE single_components
        SET cmos_quantity = $1
      `;
      await client.query(updateQuery, [updatedQuantity]);
      return "CMOS battery quantity updated successfully!";
    } else {
      // Insert a new entry if no record exists
      const insertQuery = `
        INSERT INTO single_components (cmos_quantity)
        VALUES ($1)
      `;
      await client.query(insertQuery, [newQuantity]);
      return "New CMOS battery quantity inserted successfully!";
    }
  } catch (error) {
    console.error("Error inserting or updating CMOS battery quantity:", error);
    throw error;
  } finally {
    client.release();
  }
}

// Handle POST requests for CMOS battery quantity
export async function POST(req) {
  try {
    const { quantity } = await req.json();

    console.log("Received CMOS battery quantity:", quantity);

    const result = await insertOrUpdateCMOSQuantity(parseInt(quantity));

    return NextResponse.json(
      {
        success: true,
        message: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error handling POST request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process the request",
      },
      { status: 500 }
    );
  }
}
