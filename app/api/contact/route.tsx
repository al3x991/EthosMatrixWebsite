import { NextResponse } from "next/server";

export async function POST (req : Request) {
    
    require('dotenv').config();
    const nodemailer = require ('nodemailer')

    const user = process.env.user;
    const body = await req.json();
    console.log(body);

    //send email to admin with contact form data
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.pass,
        },
    })

    const mailOptions = {
        from: body.email,
        to: 'ostrategic@gmail.com',
        subject: `You've got mail from ${body.name}`,
        text: 'Name: ' + body.name + '\nEmail: ' + body.email + '\nMessage: ' + body.message

}

transporter.sendMail(mailOptions, function(error :any , info : any){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
})

    return NextResponse.json ({message: 'Email sent successfully'})

}