import { query, mutation, internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { faker } from "@faker-js/faker";

/**
 * Create a new contact
 */
export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phoneNumber: v.string(),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      phoneNumber: args.phoneNumber,
    });
    return contactId;
  },
});

/**
 * Search contacts by any field
 */
export const search = query({
  args: {
    searchTerm: v.string(),
  },
  handler: async (ctx, args) => {
    const { searchTerm } = args;
    
    if (!searchTerm) {
      return await ctx.db.query("contacts").collect();
    }
    
    // Search across all indexes
    const byName = await ctx.db
      .query("contacts")
      .withIndex("by_name")
      .filter((q) => q.eq(q.field("name"), searchTerm))
      .collect();
      
    const byEmail = await ctx.db
      .query("contacts")
      .withIndex("by_email")
      .filter((q) => q.eq(q.field("email"), searchTerm))
      .collect();
      
    const byPhone = await ctx.db
      .query("contacts")
      .withIndex("by_phone")
      .filter((q) => q.eq(q.field("phoneNumber"), searchTerm))
      .collect();

    // Combine and deduplicate results
    const allResults = [...byName, ...byEmail, ...byPhone];
    const uniqueResults = Array.from(new Set(allResults.map(r => r._id.toString())))
      .map(id => allResults.find(r => r._id.toString() === id))
      .filter((r): r is NonNullable<typeof r> => r !== undefined);

    return uniqueResults;
  },
});

/**
 * Generate fake contacts for testing
 */
export const createFake = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Initialize Faker
    faker.seed();

    // Create 50 fake contacts
    for (let i = 0; i < 50; i++) {
      await ctx.db.insert("contacts", {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
      });
    }
  },
});

/**
 * List all contacts
 */
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("contacts").collect();
  },
});
