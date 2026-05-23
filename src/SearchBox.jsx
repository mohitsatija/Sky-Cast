import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (eve) => {
    setCity(eve.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      setError(false);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
  id="city"
  placeholder="🌍 Search city..."
  variant="outlined"
  required
  value={city}
  onChange={handleChange}
  size="small"
  sx={{
    width: "100%",
    "& .MuiOutlinedInput-root": {
      color: "#f3f4f6",
      backgroundColor: "rgba(15, 23, 42, 0.8)",
      borderRadius: "10px",
      transition: "all 0.3s ease",
      "& fieldset": {
        borderColor: "#06b6d4",
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: "#06b6d4",
        boxShadow: "0 0 15px rgba(6, 182, 212, 0.5)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#06b6d4",
        boxShadow: "0 0 25px rgba(6, 182, 212, 0.8), inset 0 0 10px rgba(6, 182, 212, 0.2)",
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#06b6d4",
      opacity: 0.8,
    },
  }}
/>
        <Button
          variant="contained"
          type="submit"
          size="small"
          sx={{
            background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            padding: "8px 30px",
            fontSize: "0.95rem",
            fontWeight: "600",
            textTransform: "none",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            "&:hover": {
              background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
              boxShadow:
                "0 0 30px rgba(59, 130, 246, 0.6), 0 0 50px rgba(6, 182, 212, 0.4)",
              transform: "translateY(-2px)",
            },
            "&:active": {
              transform: "translateY(0)",
            },
          }}
        >
          Search
        </Button>
        {error && <p>No such place exists</p>}
      </form>
    </div>
  );
}
