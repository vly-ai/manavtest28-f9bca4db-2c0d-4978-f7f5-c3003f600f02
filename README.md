Built on top of [vly.ai (YC F24)](https://vly.ai/). Backed by [Y Combinator](https://www.ycombinator.com/)

## Technical Stack Overview

### Frontend
- Next.js 15.1.3 with React 19
- TypeScript for type safety
- Tailwind CSS for styling
- Shadcn/UI for component library
  - Uses Radix UI primitives
  - Customized with Tailwind
- React Hook Form for form management
- Zod for schema validation

### Backend & Data
- Convex for backend and real-time data [Convex](https://convex.dev/)
- There is no authentication in this project

### Why convex?

Convex is a type-safe, real-time database for building serverless apps. It is fast, secure, and easy to use.

Having realtime capabilities is critical for building reactive frontends (makes frontend MUCH easier).

This application is also ready to scale to millions of users.


## Get started

```
pnpm install
pnpm run dev
```

Set the correct environment variables in `.env.local`.

## Learn more

To learn more about developing your project with Convex, check out:

- The [Tour of Convex](https://docs.convex.dev/get-started) for a thorough introduction to Convex principles.
- The rest of [Convex docs](https://docs.convex.dev/) to learn about all Convex features.
- [Stack](https://stack.convex.dev/) for in-depth articles on advanced topics.

