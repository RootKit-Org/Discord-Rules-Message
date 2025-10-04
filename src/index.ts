import "dotenv/config";
import { MessageFlags, WebhookClient } from "discord.js";
import { rules, rulesAttachment } from "./embeds/rules";

if (process.env.WEBHOOK_URL == null)
  throw new Error("Missing WEBHOOK_URL in .env");

const client = new WebhookClient({ url: process.env.WEBHOOK_URL });

client.send({
  components: [rules],
  flags: [MessageFlags.IsComponentsV2],
  files: [rulesAttachment],
  withComponents: true,
});
