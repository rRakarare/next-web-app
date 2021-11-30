import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const data = await prisma.project.findMany({
    include: {
      analyzer: {
        include: {
          analyzer: true,
        },
      },
    },
  });
  res.json(data);
}
