import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => {
  res.render("index", {
    title: "Boom shop ",
  }); // Рендерим шаблон main.handlebars
});

router.get("/products", (_req, res) => {
  res.render("products", {
    title: "products ",
    isProducts: true,
  });
});
router.get("/add", (_req, res) => {
  res.render("add", {
    title: "add ",
    isAdd: true,
  });
});
export default router;
