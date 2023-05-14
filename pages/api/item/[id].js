import { buildClient } from '@datocms/cma-client-node';

export default async function news(req, res) {
  const DATOCMS_TOKEN = process.env.DATOCMS_TOKEN;
  const client = buildClient({ apiToken: DATOCMS_TOKEN });

  const id = req.query.id;

  const records = await client.items.list({
    filter: {
      id: id,
    },
  });

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate');
  res.json(records);
}