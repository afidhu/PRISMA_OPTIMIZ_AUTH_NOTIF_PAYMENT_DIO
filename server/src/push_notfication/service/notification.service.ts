import https from "https";
import { ONE_SIGNAL_CONFIG } from "../config/app.congfig.ts";
import "dotenv/config";

export const sendNotifications = async (data: any, callback: (error: any, result?: any) => void) => {
  try {
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic " + ONE_SIGNAL_CONFIG.API_KEY
    };

    const options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers,
      
    };

    const req = https.request(options, (resp) => {
      let body = "";
      resp.on("data", (chunk) => {
        body += chunk;
      });

      resp.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          return callback(null, parsed);
        } catch (err) {
          return callback(err);
        }
      });
    });

    req.on("error", (e) => {
      return callback(e);
    });

    req.write(JSON.stringify(data));
    req.end();
  } catch (error) {
    callback(error);
  }
};
