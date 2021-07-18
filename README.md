# signer
Script to test request signer


# Example

`node ./sign.js --key=EJpM8m0eetf4nPRT --secret=5prUnLEyh0GvJCgYv2nud4mh8ibBl8vY`

# On local machine

`node ./sign.js --baseUrl='http://localhost:3000' --key=EJpM8m0eetf4nPRT --secret=5prUnLEyh0GvJCgYv2nud4mh8ibBl8vY`

# Against Cloud dev environment

`node ./sign.js --baseUrl='https://cloud-dev-api.wavysys.com' --key=5bVqCcJYs6FP9EHR --secret=q06fSdTGYskTPjCjLTgJ1R6EJaKHmEp5`

Example response:
```
key: 5bVqCcJYs6FP9EHR
secret: q06fSdTGYskTPjCjLTgJ1R6EJaKHmEp5
base url: https://cloud-dev-api.wavysys.com
Token start
Token { token_type: 'bearer',
  access_token:
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJiOTRkZWEzYy1iYjFkLTRlNTYtYjBmNC1lNWJiMDY3MzU1NzIiLCJhY2Nlc3Nfa2V5IjoiNWJWcUNjSllzNkZQOUVIUiIsInJlbW90ZV9hZGRyZXNzIjoiOTUuOTEuMjExLjMyIiwiZXhwIjoxNjI2Njg0NTg1LCJpYXQiOjE2MjY2MzQ1ODUsImlzcyI6IldhdnlzeXNBZ2VuY3lBUEkifQ.Rj7LAE-riBoboOaa3-9AfCynUjNTHiK4CLO_8n3046c',
  expires_in: 50000 }
```
