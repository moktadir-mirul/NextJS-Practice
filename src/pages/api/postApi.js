export default async function handler(req, res) {
    try {
        await res.revalidate("/Posts")
        return res.json({ revalidated: true, message: "our Message" })
      } catch (err) {
        return res.status(500).send('Error revalidating')
      }
}