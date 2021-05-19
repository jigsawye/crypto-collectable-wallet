# Crypto Collectable Wallet

A web application to show your crypto collectables.
### [Try it](https://crypto-collectable-wallet.jigsawye.com/)

## Tech Stack

- React.js
- Next.js
- [SWR](https://github.com/vercel/swr) - React Hooks library for remote data fetching
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - React implementation of the Intersection Observer API
- [Ant Design](https://github.com/ant-design/ant-design/) - A UI Design Language and React UI library
- web3.js

## Documentation

### Entry Point

The entry point is at `src/pages/_app.tsx`.

`AccountGuard` allows the user to select their account on Metamask extension. If no account has been selected or the extension hasn’t been installed, it will use the default account.

### List Page

The list page is at `src/pages/index.tsx`.

`useCollectables` hook is for data fetching. It is based on the SWR package that contains cache store and infinity loading features. In addition to the basic list, there are also loading states, empty states and error handling.

### Detail Page

The detail page is at `src/pages/[address]/[tokenId].tsx`.

The component will take `address` and `tokenId` from url to fetch detail data through `useCollectable` hook.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
