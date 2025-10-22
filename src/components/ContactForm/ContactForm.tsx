import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
    const form = useRef(new HTMLFormElement());

    const sendEmail = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.EMAIL_JS_SERVICE_ID,
                import.meta.env.EMAIL_JS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: "YOUR_PUBLIC_KEY",
                }
            )
            .then(
                (res) => {
                    console.log("SUCCESS!", res.status);
                    console.log(res.text);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    //TODO: Add validation and error handling
    //TODO: add form handle data function

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};
