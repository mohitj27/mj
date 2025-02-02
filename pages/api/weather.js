// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { format } from "date-fns";
export default async (req, res) => {
  const result = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=28.4089&lon=77.3&appid=3329f86611d894614c5a3de018ac0497`
  );

  const days = result.data.daily.splice(0, 5).map((day) => {
    return {
      icon: day.weather[0].main,
      desc: day.weather[0].description.replace(" intensity", ""),
      date: format(new Date(day.dt * 1000), "MM/dd"),
      date_full: format(new Date(day.dt * 1000), "MMMM dd, yyyy"),
      details: { humidity: day.humidity, rain: day.rain, wind: day.wind_speed },
      feels: {
        day: day.feels_like.day,
        night: day.feels_like.night,
        even: day.feels_like.eve,
        morn: day.feels_like.morn 
      },
      temp: {
        day: day.temp.day,
        night: day.temp.night,
        even: day.temp.eve,
        morn: day.temp.morn 
      },
    };
  });


  res.statusCode = 200;
  res.json({ days });
};
