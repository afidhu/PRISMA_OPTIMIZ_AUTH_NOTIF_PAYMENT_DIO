import type { Request, Response, NextFunction } from "express";
import { sendNotifications } from "../service/notification.service.ts";
import { ONE_SIGNAL_CONFIG } from "../config/app.congfig.ts";

export const sendNotificationController = async (req: Request,resp: Response,next: NextFunction) => {
  try {
    const { devices, messageText } = req.body;

    const message: any = {
      app_id: ONE_SIGNAL_CONFIG.APP_ID,
      contents: { en: messageText || "Test notification" },
      small_icon: "ic_notification_icon",
      
      content_available: true,
      data: { pushTitle: "Customer Notification" }
    };

    // ✅ FIXED: Correct field name
    if (devices && devices.length > 0) {
      message.include_player_ids = devices;  // 👈 Correct place ("here")
    } else {
      message.included_segments = ["All"];   // or "include_segments" (for older SDK)
    }

    sendNotifications(message, (error, results) => {
      if (error) return next(error);

      return resp.status(200).send({
        message: "Notification sent successfully",
        data: results
      });
    });
  } catch (error) {
    next(error);
  }
};
