import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phoneNumber: v.string(),
  })
    .index("by_name", ["name"])
    .index("by_email", ["email"])
    .index("by_phone", ["phoneNumber"]),
}, {
  schemaValidation: false
});
