# pure-email-guesser

Guess a list of possible emails from the first name, the last name, the most common email patterns and the most important email providers.

For each email the syntax is checked, the validity of the domain and the existence of the email is tested by the module [email-deep-validator](https://github.com/getconversio/email-deep-validator).

An array of validated emails is returned.
  
## Usage
```sh
$ npm install pure-email-guesser
```
```javascript
var guessEmail = require('pure-email-guesser');

guessEmail('James', 'Bond').then(res => {
    console.log(res)
})
```
```sh
['jbond@gmail.com', 'james-bond@yahoo.com']
```