import router from "./index.js";
import {passport} from "../Authentication/AuthPassport.js";

router.get("/", (req, res) => {
    res.send(req.user);
});

    
router.get("/login", (req, res) => {
    res.send("Login Page");
});

router.post("/login", passport.authenticate('local', {
    failureRedirect: "/login",
}), (req, res) => {
    res.send(req.user)
});

export default router;