import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    last_name:Yup.string().min(2).max(25).required("Please Enter Your Last Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    Country:Yup.string().required("Please Select Your Country"),
    Interested:Yup.string().required("Please Select Your Interested"),
    Massage:Yup.string().required("Please Give me Your Massage"),
})

export const mail =  Yup.object({
    email:Yup.string().email().required("Please Enter Your Email"),
})