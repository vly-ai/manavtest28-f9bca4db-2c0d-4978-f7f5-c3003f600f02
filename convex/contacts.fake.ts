import { internalMutation } from "./_generated/server";
import { faker } from "@faker-js/faker";

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
