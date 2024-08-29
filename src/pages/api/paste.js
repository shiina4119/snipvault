export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    console.log(data);
    res.status(200).json({ message: "Snippet received" });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
