import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState:{errors} } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_4TGTHHKtNAvtMnFvvKowK";

    const onSubmit = (data, r) => {
        sendEmail(serviceID, templateID, 
        {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
        },
        userID)
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccessMessage("Sent Successfully! I'll contact you as soon as possible");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }


    return (
        <div id="contact" className="contact">
            <div className="text-center"> 
            <h1>Contact Me</h1>
            <p>Please fill out the form, and I will contact you as soon as possible.</p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/*Name*/}
                        <input
                        id="name"
                        type="text" 
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("name", {
                          required: "Please enter your name",
                          maxLength: {
                            value: 20,
                            message:
                              "Please enter your name",
                          }
                        })}
                        />
                        <div className="line"></div>
                         <span className="error-message">
                             {errors.name && errors.name.message}
                         </span>
                         {/*Phone*/}
                         <input 
                         id="phone"
                        type="text" 
                        className="form-control"
                        placeholder="Phone"
                        name="phone"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("phone", {
                          required: "Please enter your phone number",
                          message: "Please enter your phone number"
                        })}
                        />
                        <div className="line"></div>
                        <span className="error-message">
                             {errors.phone && errors.phone.message}
                         </span>
                         {/*Email*/}
                         <input 
                         id="email"
                         type="text" 
                         className="form-control"
                         placeholder="Email"
                         name="email"
                         aria-invalid={errors.name ? "true" : "false"}
                        {...register("email", {
                          required: "Please enter your email",
                          
                          pattern:{
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,}$/i,
                              message: "Enter an actual email address"
                          }
                        })}
                          />
                          
                          <div className="line"></div>
                          <span className="error-message">
                             {errors.email && errors.email.message}
                         </span>
                          {/*Subject*/}
                        <input 
                        id="subject"
                        type="text" 
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("subject", {
                          required: "You literally didn't enter a subject",
                          message: "Please enter a subject"
                        })}
                        />
                        <div className="line"></div>
                        <span className="error-message">
                             {errors.subject && errors.subject.message}
                         </span>
                    </div>

                    {/*Column 2*/}

                    <div className="col-md-6 col-xs-12">
                         {/*Description*/}
                         <textarea 
                        id="description"
                        className="form-control"
                        placeholder="Ask or tell me anything..."
                        name="description"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("description", {
                          required: "You didn't enter a subject, how will I know what you want?",
                          message: "You didn't enter a subject, how will I know what you want?"
                        })}
                        ></textarea>
                        <div className="line"></div>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        <span className="error-message">
                             {errors.description && errors.description.message}
                         </span>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
