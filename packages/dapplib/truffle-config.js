require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture hill fresh skull drift release pitch method good another army gentle'; 
let testAccounts = [
"0x0bf7baf3e626be97351d27fb3e000f77dedf03a9a39ad7daf3230079139adfc0",
"0x52a0dd85d8b4b53977ade7c9fbedb1bce4efba79d387c1169dd52487055c8b28",
"0x517a35f34e5d68cc208512aa1d56e0eeb119f5172a2690350fbdce9632a29ed5",
"0xe2a75553c4b95fc1e1e60c3ab8b002f1f5911263372c58fea574ce0695fdba18",
"0x4cdbc1aa4399d2e286ca169c4ad47c9f34564be5a4671988e071bb06f7cbdf24",
"0xa7a1ffe55f332fb2eaa2bd00792c11459fe3e5bcbe724817620d76a91e5311a9",
"0x808a1af440e9ef1a0f451c72e254b5b23d38ea087beed317b0ee94af3e392f1e",
"0x205fa4f56b540d30315b3c3c863320ba96a7d1467cbb95f3733bf221329558d6",
"0xcd1d3b9883dc113de5ddae306ee9b24b25b39c9f77fd345adeb2d63213471656",
"0xfbcaf128731ff21cbaab6530afd9ff18566c59fe41f0dd6c85593c7f9927409a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


