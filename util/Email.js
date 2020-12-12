const nodemailer = require('nodemailer');

const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" });

const websiteLink = process.env.NODE_ENV === "development" ? process.env.FRONTEND_PORT : process.env.WEBSITE_URL 

/* HTML AREA******************************************/
const html_style = `
    <head>
        <style>
            table{
                margin: auto;
                max-width: 600px;
                min-height: 200px;
            }
            td{
                padding: 1rem 0.5rem;
            }
            .header{
                text-align: center;
            }
            .header a {
                font-size: 45px;
                text-decoration: none;
                color: #555555
            }
            .footer td{
                border-top: 4px solid #555555
            }
            .message td{
                padding-bottom: 15rem
            }
            .links a {
                text-decoration: none;
                color: black
            }
            .links a:hover {
                color: #7f0fff;
            }
        </style>
    </head>
`

const html_body = (message, link2, message2) => { return `
<body>
    <table>
        <tr class="header">
            <td><a href="${websiteLink}">My.Portfolio</a></td>
        </tr>
        <tr class="links">
            <td>
                <a href=${link2}>${message2}</a>
            </td>
        </tr>
        <tr class="message">
            <td>${message}</td>
        </tr>
        <tr><td></td></tr>
        <tr class="footer">
            <td>
            	&#169; My.Portfolio. Your own crypto portfolio tracker.
            </td>
        </tr>
    </table>
</body>
`}

/* HTML AREA******************************************/

const Email = () => nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_,
        pass: process.env.EMAIL_PASSWORD,
    }
})

exports.sendForgotPasswordEmail = async options => {
    //1) create transporter
    const transporter = Email()

    //2) Define The email options
    const mailOptions = {
        from: 'My.Portfolio <myportfolio.real@gmail.com>',
        to: options.email,
        subject: options.subject,
        html: `
            <html>
                ${html_style}
                ${html_body("Do not reply to this email. Thank you.", options.url, "Click me to reset your password")}
            </html>
        `
    }
    //3) Send email
    await transporter.sendMail(mailOptions)
}