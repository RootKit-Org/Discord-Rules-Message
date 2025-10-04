import "dotenv/config";
import { MessageFlags, WebhookClient } from "discord.js";
import { rules } from "./embeds/rules";
import { welcome } from "./embeds/welcome";

if (process.env.WEBHOOK_URL == null)
  throw new Error("Missing WEBHOOK_URL in .env");

const client = new WebhookClient({ url: process.env.WEBHOOK_URL });

client.send({
  components: [rules],
  flags: [MessageFlags.IsComponentsV2],
  withComponents: true,
});

// client.send({
//   components: [welcome],
//   flags: [MessageFlags.IsComponentsV2],
// });
