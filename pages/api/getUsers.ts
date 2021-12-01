import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const data = await prisma.user.findMany();
  res.json(data);
}
