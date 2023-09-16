import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  // Define the onValidated function to handle form validation
  const handleFormSubmission = (formData) => {
    // Your form validation logic here
    // For example, you can check if the email is valid and other validations
    // If validation passes, you can then call the subscribe function
    if (formData.EMAIL && formData.EMAIL.indexOf('@') !== -1) {
      subscribe(formData);
    } else {
      // Handle validation errors
      console.error('Form validation failed');
    }
  };

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};

        // Check if subscribe and onValidated are functions
        if (typeof subscribe === 'function' && typeof onValidated === 'function') {
          return (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={handleFormSubmission} // Pass the validation function
            />
          );
        } else {
          // Handle the case where subscribe or onValidated is not a function
          return <div>Error: Invalid function</div>;
        }
      }}
    />
  );
};

export default NewsletterSubscribe;
