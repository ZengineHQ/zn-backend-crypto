# Backend Crypto

Helper module for working with encryption and decryption in Zengine backend plugins. Primarily a simple wrapper of [cryptr](https://www.npmjs.com/package/cryptr).

**Not to be used for password hashing.**

## Installation

```bash
npm i @zenginehq/backend-crypto
```

## Usage

```js
const znCrypto = require('@zenginehq/backend-crypto');

const encrypted = znCrypto.encrypt(config.cipherKey, 'my secret phrase');

const decrypted = znCrypto.decrypt(config.cipherKey, encrypted);

```