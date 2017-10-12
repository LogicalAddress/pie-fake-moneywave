## Environments
 `development`, `production` and `test`

## API
## Authenticate
curl -d 'apiKey=ts_LieLieApiKey&secret=ts_LieLieApiSecret' localhost:8080/v1/merchant/verify

## Charge

### Failed Charge
curl -d 'apiKey=ts_LieLieApiKey&firstname=Retnan&lastname=Daser&phonenumber=%2b8161730129&naration=cardpayment&amount=2000&fee=75&recipient=wallet&card_no=123456789123&cvv=347&expiry_year=20&expiry_month=07' -v -H "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnQiOnsiYXBpS2V5IjoidHNfTGllTGllQXBpS2V5In0sImV4cCI6MTUwNzQ4NzE0MzIzNX0.HbiqUlJKSH5-aMG6BsAssxUlQxDPC5RBNMNVNje9TAk"  http://localhost:8080/v1/transfer
### Successful Charge
curl -d 'apiKey=ts_LieLieApiKey&firstname=Retnan&lastname=Daser&phonenumber=%2b8161730129&naration=cardpayment&amount=2000&fee=75&recipient=wallet&card_no=4092742971946134&cvv=454&expiry_year=20&expiry_month=06' -v -H "Authorization: :eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnQiOnsiYXBpS2V5IjoidHNfTGllTGllQXBpS2V5In0sImV4cCI6MTUwNzc4ODkyNzIyMX0._o6TiL02jHzCtDibNCe8RSLaWhHnb9bjH5dmLFNSwAA" https://fake-moneywave.herokuapp.com/v1/transfer

curl -d 'apiKey=ts_LieLieApiKey&firstname=Retnan&lastname=Daser&phonenumber=%2b8161730129&naration=cardpayment&amount=2000&fee=75&recipient=wallet&card_no=4092742971946134&cvv=454&expiry_year=20&expiry_month=06' -v -H "Authorization:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnQiOnsiYXBpS2V5IjoidHNfTGllTGllQXBpS2V5In0sImV4cCI6MTUwNzc4ODkyNzIyMX0._o6TiL02jHzCtDibNCe8RSLaWhHnb9bjH5dmLFNSwAA" https://fake-moneywave.herokuapp.com/v1/transfer

## Global Node Modules
 `npm install -g babel-cli`