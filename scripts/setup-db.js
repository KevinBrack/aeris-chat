const fs = require("fs");
const path = require("path");

// Verify required Postgres environment variables
const requiredEnvVars = [
    "POSTGRES_URL",
    "POSTGRES_PRISMA_URL",
    "POSTGRES_URL_NON_POOLING",
    "POSTGRES_USER",
];

const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
if (missingVars.length > 0) {
    console.error(
        "Error: Missing required environment variables:",
        missingVars.join(", ")
    );
    console.error("Please ensure you have run: vercel env pull .env.local");
    process.exit(1);
}

console.log("Database environment verified!");
