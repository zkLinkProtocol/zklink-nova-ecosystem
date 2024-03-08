
# zk.link Nova Ecosystem 🚀



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## How to Contribute

### Opening a Pull Request

#### First step

You can add an .svg file for the logo of the ecosystem you want to add in the `/src/assets/logo` directory. This file should be smaller than 1MB.

#### Second step

You can add a .jpeg or .png file for the banner of the ecosystem you want to add in the `/src/assets/banner` directory. The image should be sized at 1500px*500px; deviations from this size may affect the final display.

#### Third step

You can add a .json file as the main body for the ecosystem you want to add in the `/src/jsonList` directory. The file configuration is as follows (using Arbitrum as an example):

```bash
{
    "name": "Arbitrum",
    "description": "Designed with you in mind, Arbitrum is the leading Layer 2 technology that empowers you to explore and build in the largest Layer 1 ecosystem, Ethereum.",
    "logo": "Arbitrum.svg",
    "bannerImg": "Arbitrum.jpeg",
    "type": "Network",
    "url": "https://arbitrum.io/",
    "tiwwerUrl": "https://twitter.com/arbitrum",
    "discordUrl": "https://discord.com/invite/arbitrum"
}
```

name: 

Please provide the name of the ecosystem that will be displayed in the center of the card.

description:

Please provide the description of the ecosystem that will be displayed below the name, and its length should not exceed 150 characters.

logo: 

Please provide the filename, including the file extension, that you added to `/src/assets/logo` in the first step. For example, "Arbitrum.svg".

bannerImg:

Please provide the filename, including the file extension, that you add to `/src/assets/banner` in the second step. For example, "Arbitrum.jpeg". If you don't fill in the information, we will display the default image.

type:

Please provide the type of ecosystem falls into one of the following options: `Wallet Network Yield Defi Infra Social Liquidity Tools`. Please choose one from these options and refrain from adding any content outside of these options, as it may result in the inability to display the ecosystem you add.

url:

Please provide the official website of the ecosystem or other recognized addresses. These will be used for page redirection.

tiwwerUrl:

Please provide the Twitter address for the ecosystem. If left blank, the Twitter icon will not be displayed. the address will be used for page redirection.

discordUrl:

Please provide the Discord address for the ecosystem. If left blank, the Discord icon will not be displayed. the address will be used for page redirection.