import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    let y = Date.now();
    const result = await prisma.snippet.create({
      data: {
        id: data.uuid,
        lang: data.lang,
        code: data.code,
        creationTime: new Date(y),
        expiry: new Date(data.expiry ? y + data.expiry : 0),
      },
    });
    res.status(200).json({ message: "Snippet received", result: result });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
