import {
  AttachmentBuilder,
  ContainerBuilder,
  MediaGalleryBuilder,
  SectionBuilder,
} from "discord.js";
import { readFileSync } from "node:fs";

const section = new SectionBuilder();
const rulesImage = readFileSync("./assets/rules.png");
export const rulesAttachment = new AttachmentBuilder(rulesImage)
  .setName("rules.png")
  .setDescription("Rules Banner");
const mg = new MediaGalleryBuilder().addItems((g) =>
  g.setURL("attachment://rules.png")
);
export const rules = new ContainerBuilder()
  .addMediaGalleryComponents(mg)
  .addTextDisplayComponents((td) =>
    td.setContent(`
# <:yellow1:1424122811303198730> Be Kind & Respectful
> Treat everyone with respect, including our volunteers and fellow members.
> We're here to support one another, so keep interactions positive and constructive.
# <:yellow2:1424122808568385697> No Cheats, Hacks, or Illegal Activity
> This is **__NOT__** a cheat server, Nor do we support Black-Hat activities.
> Asking for, Buying, or Selling Cheats will result in an __immidiate ban__.
> NSFW (Not Safe for Work), Piracy, and Illegal Content is also not permitted here.
> •
> <:rules_warning:1424128278402433024> Discussions around Cyber Security and Exploits **Are** permitted.
# <:yellow3:1424122806903242782> No Hate Speech or Toxicity
> Racist, Misogynistic, Sexist, and Ableist language is strictly prohibited.
> Harassment, abuse, and Bullying will also not be tolerated. Any of this activity,
> including Racial, religious, or sexual slurs may result in an Immidiate ban.
# <:yellow4:1424122805611528453> No Spam
> Unapproved self-promotion, advertisements, or external links are **not** permitted. Please refrain from spamming Text, Emoji's, or Links.
> •
> ✅ Links to sites such as Github, NPM, Pypi, StackOverflow, etc, are Permitted!
# <:yellow5:1424122804114030612> Do not ping the Staff.
> Staff and Volunteers are here to assist you, but do **NOT** ping them unnecessarily. Use the appropriate channels for help.
> •
> <:rules_warning:1424128278402433024> If you Need to bring a problematic message or user to the staffs attention Urgently, you can React to a message with the <:REPORT:1424126703093026836> \`:REPORT:\` emoji, Or \`Right click -> Apps -> Report\` and staff will be notified immediately.
# <:yellow6:1424122801945575667> Do not DM users
> For coding help please utilize the designated channels. We encourage users to post and solve their issues in the public channels, so that others who may also encounter the same issue can get assistance.
> •
> <:rules_warning:1424128278402433024> If a spam/scam bot reaches out to you without permission, Report the message through Discord and create a https://discord.com/channels/793655668384727040/937181560464085022 so we can remove the compromised account. Never click sketchy links sent to you, or you **WILL** have your accounts stolen.
# <:yellow7:1424122799991292085> Privacy & Security
> No sharing personal information (doxxing, addresses, phone numbers, etc).
> No impersonating staff, bots, or other members.
> No malicious links or files. This includes IP grabbers, malware, phishing links.
`)
  );
