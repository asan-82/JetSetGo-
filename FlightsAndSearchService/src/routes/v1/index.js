const express=require("express");
const {FlightMiddlewares}=require("../../middlewares/index");
const {CityController,FlightController,AirportController}=require("../../controllers/index");

const router=express.Router();

router.post("/city",CityController.create);
router.delete("/city/:id",CityController.destroy);
router.get("/city/:id",CityController.get);
router.get("/city/",CityController.getAll);
router.patch("/city/:id",CityController.update);

router.post("/flights",FlightMiddlewares.validateCreateFlight,FlightController.create);
router.get("/flights",FlightController.getAll);

router.post("/airports",AirportController.create);

module.exports=router;