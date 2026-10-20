import prisma from "@/lib/prisma";

async function seed() {
  // Seed your database with initial data
  await prisma.user.create({
    data: {
      name: "John Doe",
      email: "",
      password: "password123",
    },
  });
}
