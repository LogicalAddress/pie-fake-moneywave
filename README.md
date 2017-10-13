## Environments
 `development`, `production` and `test`

## Dev Environment
 `npm run build && npm start`
 `npm run dev:seed:db`

## Prod Env
`npm start`
`export DATABASE_URL=mysql://xx:xx@yy.bb/yy`
`npm run seed:db`

## Get Card
`SELECT card_no, cvv, pin, CONCAT_WS('/', expiry_month, expiry_year) AS expiry, CONCAT_WS('',success_response, failure_response) AS response FROM cards`;

+---------------------+-----+--------+------+-------------------+
| card_no             | cvv | expiry | pin  | response          |
+---------------------+-----+--------+------+-------------------+
| 5555555555554444    | 100 | 11/21  | 9235 | Charge Successful |
| 4242424242424242    | 234 | 07/20  | 1239 | Charge Successful |
| 5105105105105100    | 455 | 07/21  | 1529 | Charge Failed     |
| 5061082001206937280 | 100 | 11/21  | 9235 | Charge Successful |
| 5200828282828210    | 234 | 08/21  | 1240 | Charge Failed     |
| 4000000400000008    | 100 | 12/22  | 2454 | Charge Failed     |
| 4000056655665556    | 454 | 06/20  | 1529 | Charge Successful |
+---------------------+-----+--------+------+-------------------+

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