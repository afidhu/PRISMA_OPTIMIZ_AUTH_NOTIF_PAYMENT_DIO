// server.ts
import express from "express";
import "dotenv/config";
import fetch from "node-fetch"; // npm install node-fetch@2
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";



console.log("Loaded .env successfully!");

const app = express();
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("OneSignal notification server is running ✅");
});

// Send notification route
app.post("/send_notification", async (req, res) => {
  const { title, message,playerIds } = req.body;

//   if (!playerIds || playerIds.length === 0) {
//     return res.status(400).json({ error: "Please provide at least one player ID" });
//   }

  const bodyData = {
    // app_id: "bc7ed886-b96c-44f1-a003-255e1e21a974",
    app_id:"bc7ed886-b96c-44f1-a003-255e1e21a974",
    include_player_ids: [playerIds],
    //   include_player_ids: ["0c7ef7b4-3938-4e10-9362-193bdc5e1786"],
    //    include_player_ids: ["e63d1220-9779-4de4-aba5-c423ebeedebf"], 
    headings: { en: title },
    // headings: { en: title || "Test Notification" },
    contents:{en:message},
    // contents: { en: message || "Hello from Node.js + OneSignal!" },

//     //send for all player here
//     include_player_ids: [], 
// included_segments: ["All"]

  };

  try {

const response = await fetch("https://onesignal.com/api/v1/notifications", {
  method: "POST",
   headers: {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic " + "os_v2_app_xr7nrbvznrcpdiadevpb4injoqvb7lvz5dluw3uly7w5olhf4rvh665dujvgngoiymh7houpxiw4eitm4yvelr7dx4oadagmdoohpdy", // 👈 use REST API Key here
  },
  body: JSON.stringify(bodyData),  
});

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Error sending notification:", err);
    res.status(500).json({ success: false, error: err });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
