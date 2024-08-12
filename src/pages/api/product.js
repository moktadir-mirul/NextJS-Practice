
export default async function handler(req, res) {
    try {
        await res.revalidate("/");
        return res.json({revalidate: true, message: "Shop Products Updating"})
    } catch(err) {
        return res.status(500).send('Error revalidating')
    }
}