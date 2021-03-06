var gateway = require('ripple-gateway'),
    config = require('./config/nconf'),
    blockchain = require('./lib/blockchain_listener'),
    hotWallet = require('./lib/poll_hot_wallet_balance');

blockchain.listen(function(btc){

    var deposit = new Object(btc);
    deposit.external_account_id = config.get('USER_ID');

    gateway.api.recordDeposit(deposit, console.log);

});

hotWallet.listen();

gateway.api.startGateway({
    processes: ['deposits', 'outgoing']
});