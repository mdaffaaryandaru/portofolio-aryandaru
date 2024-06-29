require('dotenv').config() // Memuat variabel lingkungan
const express = require('express')
const router = express.Router() // Perbaikan kesalahan ketik
const cors = require('cors') // Perbaikan kesalahan ketik
const nodemailer = require('nodemailer')

// Server used to send emails
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(5000, () => console.log('Server Running'))
console.log(process.env.EMAIL_USER)
console.log(process.env.EMAIL_PASSWORD)

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Ready to Send')
    }
})

router.post('/contact', (req, res) => {
    const name = req.body.firstName
    const email = req.body.email
    const message = req.body.message
    const phone = req.body.phone
    const mail = {
        from: name,
        to: 'recipient@example.com', // Tentukan alamat email tujuan
        subject: 'Contact Form Submission',
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: 'ERROR' })
        } else {
            res.json({ status: 'Message Sent' })
        }
    })
})
