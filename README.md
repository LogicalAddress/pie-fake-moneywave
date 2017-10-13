## Environments
 `development`, `production` and `test`

## Dev Environment
 `npm run build && npm start`
 `npm run dev:seed:db`
## API
## Authenticate
curl -d 'apiKey=ts_LieLieApiKey&secret=ts_LieLieApiSecret' localhost:8080/v1/merchant/verify

## Charge
## Succesful Charge
curl -d 'apiKey=ts_LieLieApiKey&firstname=Retnan&lastname=Daser&phonenumber=%2b8161730129&naration=cardpayment&amount=2000&fee=75&recipient=wallet&card_no=4000056655665556&cvv=454&expiry_year=20&expiry_month=06' -v -H "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnQiOnsiYXBpS2V5IjoidHNfTGllTGllQXBpS2V5In0sImV4cCI6MTUwNzg4MDM1Nzk3Nn0.mdBK7kKb11QX587YBzQL_NPJn5B80zUjWmD682hgKX8" http://localhost:8080/v1/transfer

flutterChargeReference: FakeMWSR4x0vPkQl

curl -d "transactionRef=FakeMWSR4x0vPkQl" http://localhost:8080/v1/transfer/charge/auth/card
### Failed Charge

### Successful Charge


## Global Node Modules
 `npm install -g babel-cli`