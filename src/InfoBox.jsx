import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Cloud, Droplets, Thermometer, Wind } from "lucide-react";

export default function InfoBox({ info }) {
  // Map weather conditions to images and colors
  const weatherImages = {
    sunny:
      "https://images.unsplash.com/photo-1495567720989-cebaa4532fe5?w=900&auto=format&fit=crop&q=60",
    cloudy:
      "https://images.unsplash.com/photo-1504681869696-d977e16e1884?w=900&auto=format&fit=crop&q=60",
    rainy:
      "https://images.unsplash.com/photo-1534274988757-a28bf1ad0e1f?w=900&auto=format&fit=crop&q=60",
    haze: "https://images.unsplash.com/photo-1560977501-7cb367eccebe?w=900&auto=format&fit=crop&q=60",
  };

  const weatherColors = {
    sunny: "#FFD700",
    cloudy: "#A9A9A9",
    rainy: "#4169E1",
    haze: "#D3D3D3",
  };

  const getWeatherImage = () => {
    const weather = info.weather?.toLowerCase() || "haze";
    for (let key in weatherImages) {
      if (weather.includes(key)) return weatherImages[key];
    }
    return weatherImages.haze;
  };

  const getWeatherColor = () => {
    const weather = info.weather?.toLowerCase() || "haze";
    for (let key in weatherColors) {
      if (weather.includes(key)) return weatherColors[key];
    }
    return weatherColors.haze;
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card
          className="weatherCard"
          sx={{
            maxWidth: 350,
            borderRadius: "16px",
            overflow: "hidden",
            transition: "all 0.3s ease",
            background: "rgba(30, 41, 59, 0.4)",
            backdropFilter: "blur(10px)",
            border: "1.5px solid rgba(59, 130, 246, 0.3)",
            boxShadow:
              "0 8px 32px rgba(59, 130, 246, 0.1), inset 0 0 20px rgba(59, 130, 246, 0.05)",
            "&:hover": {
              transform: "translateY(-8px)",
              border: "1.5px solid rgba(6, 182, 212, 0.6)",
              boxShadow:
                "0 15px 50px rgba(59, 130, 246, 0.3), 0 0 40px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(59, 130, 246, 0.1)",
            },
          }}
        >
          <CardMedia
            sx={{ height: 150 }}
            image={getWeatherImage()}
            title={info.weather}
          />
          <CardContent
            sx={{
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)",
              backdropFilter: "blur(10px)",
              borderTop: "2px solid rgba(96, 165, 250, 0.4)",
              color: "white",
              padding: "20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "700", marginBottom: "10px" }}
            >
              {info.city}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                marginBottom: "25px",
                opacity: 0.9,
                textTransform: "capitalize",
              }}
            >
              {info.weather}
            </Typography>

            <div className="metricsGrid">
              <div className="metricBox">
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Current
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  {info.temp}°C
                </Typography>
              </div>

              <div className="metricBox">
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Humidity
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  {info.humidity}%
                </Typography>
              </div>

              <div className="metricBox">
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Feels Like
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  {info.feelsLike}°C
                </Typography>
              </div>
            </div>

            <div className="tempRange">
              <Typography variant="body2">
                <strong>Min:</strong> {info.tempMin}°C | <strong>Max:</strong>{" "}
                {info.tempMax}°C
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
