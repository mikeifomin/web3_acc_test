const ETH_URL = process.env.ETH_URL 
const masterPrivateKey = process.env.COINBASE_KEY_PRIVATE

const Web3 = require('web3/packages/web3');
const w = new Web3(new Web3.providers.HttpProvider(ETH_URL));
const acc = w.eth.accounts;

const masterAccount = acc.privateKeyToAccount(masterPrivateKey);
const masterAddress = masterAccount.address;

const newAccount = acc.create();
acc.wallet.add(masterAccount.privateKey);
acc.wallet.add(newAccount.privateKey);

const transaction = {
  from: masterAccount.address,
  to: newAccount.address,
  value: 1000000,
  gas: 1000
};

w.eth.sendTransaction(transaction).then(function(d) {
  console.log(d);
  return console.log(w.eth.getBalance(address));
});

