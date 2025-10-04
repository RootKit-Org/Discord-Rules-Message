import { ButtonStyle, ContainerBuilder, SectionBuilder } from "discord.js";

const section = new SectionBuilder()
  .addTextDisplayComponents(
    (textDisplay) => textDisplay.setContent("row1"),
    (textDisplay) => textDisplay.setContent("row2"),
    (textDisplay) => textDisplay.setContent("row3")
  )
  .setButtonAccessory((b) =>
    b
      .setStyle(ButtonStyle.Link)
      .setLabel("this is a button")
      .setURL("https://rootkit.org")
  );
export const rules = new ContainerBuilder().addSectionComponents(section);
