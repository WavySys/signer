const request = require('request')
const OAuth = require('oauth-1.0a')
const crypto = require('crypto') // depenency package for OAuth-1.0a
const flags = require('flags');
const { exit } = require('process')

// Token request function
function generateToken(baseUrl, key, secret) {
    // #1 Initialize OAuth with your Wavysy OAuth credentials
    const oauth = OAuth({
        consumer: {
            key: key, //Access key
            secret: secret, //Secret key
        },
        signature_method: 'HMAC-SHA256',
        hash_function(base_string, key) {
            return crypto
                .createHmac('sha256', key)
                .update(base_string)
                .digest('base64')
        },
    });
    // #2 Building the request object.
    const request_data = {
        url: `${baseUrl}/oauth2/token`,
        method: 'POST',
        data: { grant_type: 'client_credentials', expires_in: 50000 },
    };
    // #3 Sending the request to get the access token
    request(
        {
            url: request_data.url,
            method: request_data.method,
            form: request_data.data,
            headers: oauth.toHeader(oauth.authorize(request_data)),
        },
        function (error, response, body) {
            if (response) {
                if (response.statusCode == 200) {
                    result = JSON.parse(response.body);
                    console.log('Token', result);
                } else {
                    console.log('response : ', response);
                }
            } else {
                console.log('error : ', error);
            }
        }
    );
}

flags.defineString('key')
    .setDescription('access key')
flags.defineString('secret')
    .setDescription('access key secret')
flags.defineString('baseUrl')
    .setDefault('https://cloud-dev-api.wavysys.com')
    .setDescription('base url')

flags.parse();

console.log("key:", flags.get('key'))
console.log("secret:", flags.get('secret'))
console.log("base url:", flags.get('baseUrl'))


if (flags.get('key') == undefined || flags.get('secret') == undefined) {
    console.log("error: access key and secret must be set.")
    exit(1)
}

console.log('Token start');
generateToken(flags.get('baseUrl'), flags.get('key'), flags.get('secret'));



