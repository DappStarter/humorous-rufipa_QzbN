require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind exchange grid entire blue gauge'; 
let testAccounts = [
"0x426377fb478be1b4c960d720f049db2ae0193ceac08d5a4bf6bff636657e4ef7",
"0x00d9a39d033deef3e9bf7448f7b5ca6550dec173fed2e8222bc623ab6961fc50",
"0x55a989db1207d489cb40c081996edf1dcbad577643b497b6bb58e7de6682735f",
"0x6306597dfe2b72ca33c40601f51d5f43e32bef54be9d1be9562e81e5c90c56b5",
"0x30ea6d80a3b535ad5472cb998e7c6c776a004f7fa1c8804804318eaf73438803",
"0x0ddeaf6b1094b47dee42aa9398afc26552acf57931dc78d67adc90d9a429a503",
"0x8d3e8a75c662fc3032958c51fa4ab7f0d667f166442a465d1d5d61f063e1f788",
"0x7aa71e10fa7e1449c9ad3b533532a46b777d889ac907e01388a9b0f7ccb32cdf",
"0x6a5a8fa9c01481bf2f764b4a801ac5113ad7f329e1d8c76532f0019c41d9fbdd",
"0xb617b31a00987afa47dab1f2b7812256536de6b8e34224fffb1d3a63f954ec97"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

