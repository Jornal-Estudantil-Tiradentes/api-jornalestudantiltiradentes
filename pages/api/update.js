// import { buildClient } from '@datocms/cma-client-node';

// export default async function news(req, res) {
//   const DATOCMS_TOKEN = process.env.DATOCMS_TOKEN;
//   const client = buildClient({ apiToken: DATOCMS_TOKEN });

//   const token2 = '0e4f9fabe6030824e9e22106bd1b3b';
//   const client2 = buildClient({ apiToken: token2 });

//   const data = await client.items.list();

//   // const recordsJSON = JSON.stringify(records)

//   const record = await client2.items.update("112237633", {
//     version: "v1.0.0",
//     json: JSON.stringify([...data]),
//   });

//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate');
//   res.json(record);
// }