const router = require("express").Router();
import { authenticate } from "passport";
import { sign } from "jsonwebtoken";

// Example secret key, ensure you use a secure key
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Generate JWT token for authenticated users
const generateToken = (user) => {
    return sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
};

router.get("/login/success", (req, res) => {
    if (req.user) {
        const authToken = generateToken(req.user);
		console.log("Rishi");
		console.log(authToken);
		 // Generate token
        // Redirect to the frontend with the token and email in the query params
        res.redirect(`${process.env.CLIENT_URL}?authToken=${authToken}&email=${req.user.email}`);
    } else {
        console.log("Issue log in failed");
        res.status(403).json({ error: true, message: "Not Authorized" });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure",
    });
});

router.get('/google', authenticate('google', {
    scope: ['profile', 'email'] // Add scopes here
}));

router.get(
    "/google/callback",
    authenticate("google", {
        failureRedirect: "/login/failed",
    }),
    (req, res) => {
        // If authentication is successful, the user will be redirected to /login/success
        // res.redirect('/login/success');
		const authToken = generateToken(req.user);
		res.redirect(`${process.env.CLIENT_URL}?authToken=${authToken}&email=${req.user.email}`);

    }
);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

export default router;
