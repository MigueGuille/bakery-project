import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: 'josemmr311@gmail.com', //cambiar a proccess.env.GMAILUSER
        pass: 'ltyn hfkh yfpv ndah'
    }
})

transporter.verify().then(() => console.log('ready for send email'))