import { useState } from 'react';
import { sanitize } from '../utils/miscellaneous';
import Loading from './loading';

const NewsletterForm = ( { status, message, onValidated }) => {

const [ error, setError ] = useState(null);
const [ email, setEmail ] = useState(null);

/**
 * Handle form submit.
 *
 * @return {{value}|*|boolean|null}
 */
const handleFormSubmit = () => {
    setError(null);
  
    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }
  
    // Call the onValidated function with the email value
    const isFormValidated = onValidated(email);
  
    // On success return true
    return email && email.indexOf('@') > -1 && isFormValidated;
  };

/**
* Handle Input Key Event.
*
* @param event
*/
const handleInputKeyEvent = ( event ) => {
setError(null);
// Number 13 is the "Enter" key on the keyboard
if (event.keyCode === 13) {
// Cancel the default action, if needed
event.preventDefault();
// Trigger the button element with a click
handleFormSubmit();
}
}

/**
* Extract message from string.
*
* @param {String} message
* @return {null|*}
*/
const getMessage = (message) => {
if ( !message ) {
return null;
}
const result = message?.split('-') ?? null;
if ( "0" !== result?.[0]?.trim() ) {
return sanitize(message);
}
const formattedMessage = result?.[1]?.trim() ?? null;
return formattedMessage ? sanitize( formattedMessage ) : null;
}

return (
<>
<div className="mt-0 md:mt-2 flex ">
<input
onChange={(event) => setEmail(event?.target?.value ?? '')}
type="email"
placeholder="Your email"
className="border border-white rounded-l px-4 py-2 focus:outline-none"        
onKeyUp={(event) => handleInputKeyEvent(event)}
/>
<button onClick={handleFormSubmit} className=" bg-amber-500 text-amber-950  px-4 py-2 hover:bg-gray-300 transition duration-300">
Subscribe
</button>
</div>
<div className="min-h-42px absolute bottom-10 right-10 bg-slate-400 p-10 mx-auto">
{ 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
{'error' === status || error ? (
<div
className="text-red-700 pt-2"
dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
/>
) : null }
{'success' === status && 'error' !== status && !error && (
<div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
)}
</div>
</>
);
}

export default NewsletterForm