import express from 'express';
import router from express.Router();
import indexController from "../controllers/home";

router.get("/", indexController.home)

module.exports = router