const nodemailer=require("nodemailer");
const dotenv=require("dotenv");
const sendMail=async(email,message)=>{
    try{
        //Create a transporter
        const transporter=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS,
            },
        });
        const mailOptions={
            from:process.env.EMAIL,
            to:email,
            subject:"Message from Placement Hub",
            text:`${message}`,
        };
        transporter.sendMail(mailOptions,(error)=>{
            if(error){
                console.log("Error occured while sending mail",error.message);
            }else{
                console.log("email sent");
                res.status(200).json({ message: "Email sent successfully from atoms" });
            }
        })
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong" });
      }

};
module.exports={sendMail};