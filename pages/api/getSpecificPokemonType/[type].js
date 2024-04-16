export default async function handler(req, res) {
    try {
        if (req.method !== 'GET') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { type } = req.query;
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        if (response.ok) {
            const data = await response.json();
            res.status(200).json(data.pokemon);
        } else {
            res.status(response.status).json({ error: 'Failed to fetch data from PokeAPI' });
        }
    } catch(error) {
        console.error('Error fetching data from PokeAPI:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}