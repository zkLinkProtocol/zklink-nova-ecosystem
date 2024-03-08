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

You can add a .svg file in the `/src/assets/logo`  directory as the logo of the ecosystem you want to add. This file should be less than 1M.

#### Second step

You can add a .jpeg file or a .png file in the `/src/assets/banner`  directory as the banner of the ecosystem you want to add. The size of the picture should be 1500*500, if not correct may affect the final display effect.

#### Third step

You can add a .json file in the `/src/jsonList`  directory as the main body of the ecosystem you want to add. File configuration is as follows (we use Arbitrum as an example)：

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

The name of the ecosystem, will be displayed in the middle of the card.

description:

The description of the ecosystem, will be displayed below the name and should not exceed 150 in length.

logo: 

The name of the file you added to `/src/assets/logo` in the first step, carries the file extension,like "Arbitrum.svg"

bannerImg:

The name of the file you added to `/src/assets/banner` in the second step, carries the file extension,like "Arbitrum.jpeg". If you do not fill it in, we will display the default options

type:

the type of the ecosystem, we have options `Wallet Network Yield Defi Infra Social Liquidity Tools`, please select one of them, please do not add content other than these options, otherwise the ecosystem may not be displayed.

url:

The official website of the ecosystem or other address recognized by the ecosystem, will be used for page redirection.

tiwwerUrl:

The Twitter address of the ecosystem, if not filled, will not display the Twitter icon, will be used for page redirection.

discordUrl:


The Discord address of the ecosystem, if not filled, will not display the Discord icon, will be used for page redirection.