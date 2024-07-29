import { Router } from "express";

const router = Router();

// GET request for login page
router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login ",
    isLogin: true,
  });
});

// GET request for register page
router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register ",
    isRegister: true,
  });
});

// POST request for login
router.post("/login", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

// POST request for register
router.post("/register", async (req, res) => {
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  const User = await User.create(userData);
  console.log(user);
  res.redirect("/");
});

export default router;
