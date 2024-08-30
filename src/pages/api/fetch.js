import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.id;

    try {
      let result = await prisma.snippet.findUnique({
        where: {
          id: id,
        },
      });

      if (
        result !== null &&
        result.creationTime !== result.expiry &&
        Date.now() > Date.parse(result.expiry)
      ) {
        await prisma.snippet.delete({
          where: {
            id: id,
          },
        });
        result = null;
      }
      if (result === null) throw Error;
      res.status(200).json({ message: "Snippet fetched", result: result });
    } catch (_) {
      res
        .status(404)
        .json({ message: "Snippet not found or expired", result: null });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
