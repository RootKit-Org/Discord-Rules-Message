# Discord Rules Message

Our Rules screen in Discord

## Want to run this yourself?

### Pre-Requisites

Download NodeJS from https://nodejs.org/en/download

### Setup

Clone the Repository

```bash
git clone https://github.com/RootKit-Org/Discord-Rules-Message.git
```

Navigate into the newly created folder

Enable Yarn

```bash
// Preferred
corepack enable yarn

// This also works
npm i -g yarn
```

Install all dependencies

```bash
yarn install
```

Make a copy of `.env.config` named `.env`

```bash
cp .env.config .env
```

Go to discord and create a Webhook under `Edit Channel -> Integrations`. Configure the webhook to look the way you want.

Copy the WEBHOOK_URL into the created `.env` file

Add your rules information to `/src/embeds/rules.ts`

Publish to the configured webhook by running `yarn post`.
