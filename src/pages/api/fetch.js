import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.id;
    console.log(id);

    const result = await prisma.snippet.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Snippet fetched", result: result });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
