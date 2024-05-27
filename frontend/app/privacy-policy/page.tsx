import classes from './PrivacyPolicy.module.css';


export default function PrivacyPolicy() {

  return (
    <div className={classes.wrapper}>
        <h2 className={classes.h2}>Privacy Policy</h2>

        <p className={classes.p}><strong>1. General Information</strong></p>
        <p className={classes.p}>Welcome to the website <a href="https://furniro.jeli.pl">furniro.jeli.pl</a>. This privacy policy outlines how we collect, process, and protect statistical data from user visits and user-provided data through the contact form.</p>

        <p className={classes.p}><strong>2. Types of Collected Data</strong></p>
        <p className={classes.p}>While using our website, we collect statistical data such as the number of visits, time spent on the site, and traffic source. User-provided data through the contact form includes name and email address.</p>

        <p className={classes.p}><strong>3. Purpose of Data Collection</strong></p>
        <p className={classes.p}>We collect statistical data to analyze website traffic and improve the quality of content and functionality. User-provided data through the contact form is used to respond to inquiries or comments.</p>

        <p className={classes.p}><strong>4. Cookies</strong></p>
        <p className={classes.p}>Our website uses only functional cookies to customize language and color theme. No data is permanently stored.</p>

        <p className={classes.p}><strong>5. Sharing Personal Data</strong></p>
        <p className={classes.p}>Statistical data is anonymous. User-provided data through the contact form is not shared with third parties and is only used to provide responses.</p>

        <p className={classes.p}><strong>6. Data Storage</strong></p>
        <p className={classes.p}>No data is permanently stored on our website. All statistical data is analyzed anonymously.</p>

        <p className={classes.p}><strong>7. Contact</strong></p>
        <p className={classes.p}>If you have questions about our privacy policy or the operation of the website, please contact us at <a href="mailto:admin@jeli.pl">admin@jeli.pl</a>.</p>

        <p className={classes.p}><strong>8. Changes to the Privacy Policy</strong></p>
        <p className={classes.p}>We reserve the right to update our privacy policy due to any changes in the law or our services.</p>

        <h2 className={classes.h2}>Cookies</h2>

        <p className={classes.p}><strong>1. What Are Cookies?</strong></p>
        <p className={classes.p}>Our website uses only functional cookies to customize language and color theme. No data is permanently stored.</p>

        <p className={classes.p}><strong>2. Managing Cookies</strong></p>
        <p className={classes.p}>There is no need to manage cookies as they are used only for functional purposes.</p>

    </div>
  );
}