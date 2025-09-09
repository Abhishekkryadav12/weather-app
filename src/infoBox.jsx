import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
    const INIT_URL =
    "https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = 
    "https://images.unsplash.com/photo-1572339152622-ce5e57956129?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL =
     "https://plus.unsplash.com/premium_photo-1694475677370-7f6f9bc5a163?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL =
     "https://images.unsplash.com/photo-1704883038327-e9cd4c164455?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='card-container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 
                            ? RAIN_URL :
                             info.temp > 15
                              ? HOT_URL : 
                              COLD_URL }
                        title="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 
                            ? < ThunderstormIcon/> :
                             info.temp > 15
                              ? <WbSunnyIcon/> : 
                              <AcUnitIcon/> }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;c</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;c</p>
                            <p>Max Temp = {info.tempMax}&deg;c</p>
                            <p>The weather feels like {info.feelsLike}&deg;c</p>
                            <p>Condition = {info.weather}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
