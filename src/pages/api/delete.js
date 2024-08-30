import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.id;

    try {
      const result = await prisma.snippet.findUnique({
        where: {
          id: id,
        },
      });

      if (result === null) throw Error;

      await prisma.snippet.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "Snippet deleted!" });
    } catch (_) {
      res.status(404).json({ message: "Snippet not found" });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
