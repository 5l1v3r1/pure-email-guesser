const EmailValidator = require('email-deep-validator')
const emailValidator = new EmailValidator()

module.exports = (firstname, lastname) => {
    return new Promise((resolve, reject) => {

        const domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com'] // Top email providers
        const firstn = firstname.toLowerCase()
        const firsti = firstn[0]
        const lastn = lastname.toLowerCase()
        const lasti = lastn[0]
        
        const emails = []
        domains.forEach(domain => { // Top email patterns
            emails.push(`${firstn}@${domain}`)
            emails.push(`${firsti}${lastn}@${domain}`)
            emails.push(`${firstn}.${lastn}@${domain}`)
            emails.push(`${firstn}${lastn}@${domain}`)
            emails.push(`${firstn}${lasti}@${domain}`)
            emails.push(`${firsti}${lasti}@${domain}`)
            emails.push(`${lastn}@${domain}`)
            emails.push(`${firsti}.${lastn}@${domain}`)
            emails.push(`${firstn}${lasti}@${domain}`)
            emails.push(`${firstn}-${lastn}@${domain}`)
            emails.push(`${lastn}.${firstn}@${domain}`)
        })
        
        // console.log(`${firstn} ${lastn} : ${emails.length} possibilities`)
        
        const validated = []
        const promises = emails.map(async email => {
            const { wellFormed, validDomain, validMailbox } = await emailValidator.verify(email)
            if (wellFormed && validDomain && validMailbox) validated.push(email)
        })

        Promise.all(promises)
        .then(results => resolve(validated))
        .catch(error => reject(error))
        
    })
}
