import emailjs from "@emailjs/browser";

emailjs.init({
    publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
});
