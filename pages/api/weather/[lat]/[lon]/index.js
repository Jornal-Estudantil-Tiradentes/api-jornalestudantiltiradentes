export default async function weather(req, res) {
  const OPENWEATHER_TOKEN = process.env.OPENWEATHER_TOKEN;

  let lat = req.query.lat;
  let lon = req.query.lon;
  let weatherData;

  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${OPENWEATHER_TOKEN}&units=metric`
  ).then(async (data) => {
    weatherData = await data.json();
  });

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  res.json(weatherData);
}
