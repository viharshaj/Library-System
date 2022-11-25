import app from './Core/Application.js';
import cors from 'cors';
import bodyParser from "body-parser";
import session from 'express-session';
import cookieParser from 'cookie-parser';
import libraryRoute from "../backend/routes/library_route.js";
import Authenticate from "../backend/routes/Authenticate.js";


app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials: true
}));
app.use('/library', libraryRoute);
app.use('', Authenticate);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60*60*24
        }
    }
))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server Started on Port " + PORT);
})
