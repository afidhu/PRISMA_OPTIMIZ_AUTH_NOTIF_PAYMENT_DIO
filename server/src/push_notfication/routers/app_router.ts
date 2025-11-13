import { Router } from "express";
import { sendNotificationController } from "../controller/pushController.ts";

const routerApp = Router();

// Send notification: GET → All users (optional), POST → specific devices
routerApp.get("/send_notification", sendNotificationController);
routerApp.post("/send_notification_to_device", sendNotificationController);

export default routerApp;
