import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema configuration for the convex application. Define tables, fields, and indexes here. Provides end-to-end type safety.

export default defineSchema(
  {

    // Tables go here
    // do not define createdAt or updatedAt fields
  },
  {
    schemaValidation: false
  }
);
