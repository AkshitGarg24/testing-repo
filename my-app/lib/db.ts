// lib/db.ts

// A mock "Prisma Client" so you don't need a real DB connection for this test
export const db = {
  user: {
    findUnique: async ({ where }: { where: { email: string } }) => {
      // Simulate DB delay
      await new Promise((resolve) => setTimeout(resolve, 50));
      
      // Simulate that 'test@example.com' already exists
      if (where.email === 'exists@example.com') {
        return { id: 'existing-id', email: where.email };
      }
      return null;
    },
    
    create: async ({ data }: { data: any }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return {
        id: 'new-user-id-' + Math.random().toString(36).substr(2, 9),
        ...data,
      };
    }
  }
};