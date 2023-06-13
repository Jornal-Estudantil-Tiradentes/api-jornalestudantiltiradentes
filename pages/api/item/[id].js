import { buildClient } from "@datocms/cma-client-node";

export default async function news(req, res) {
  const DATOCMS_TOKEN = process.env.DATOCMS_TOKEN;
  const client = buildClient({ apiToken: DATOCMS_TOKEN });

  const id = req.query.id;

  let records = [];

  for await (const record of client.items.listPagedIterator({
    filter: {
      id: id,
    },
  }))
    records.push(record);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  res.json(records);
}
