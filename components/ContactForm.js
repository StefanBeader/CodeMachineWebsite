async function sendMessage(e) {
  e.preventDefault();
  let form = e.target;
  clearResponseMessage();
  // remove previous errors
  const requireds = document.getElementsByClassName('required');
  const inputs = [...requireds];
  removeErrors(inputs);

  // validate input
  const errors = validateInput();
  if (errors.length > 0) {
    showErrors(errors);
    responseMessage(errors[errors.length - 1].message, 'error');
    return false;
  }
  // send request
  let response = await request().catch(() => {
    responseMessage('Error occurred. Please try again later.', 'error');
  });
  if (response !== undefined) {
    responseMessage(response.message, response.responseClass);
    if (response.responseClass === 'success') {
      form.reset();
    }
  }
}

function clearResponseMessage() {
  let messageContainer = document.getElementById('responseMessage');
  messageContainer.innerText = '';
  messageContainer.className = '';
}

function responseMessage(message, messageClass) {
  let messageContainer = document.getElementById('responseMessage');
  messageContainer.innerText = message;
  messageContainer.classList.add(messageClass);
  messageContainer.classList.add('show');
}

function validateInput() {
  const errors = [];
  if (document.getElementById('email').value === '') {
    errors.push({field: 'email', message: 'Email field is required'})
  }

  if (document.getElementById('message').value === '') {
    errors.push({field: 'message', message: 'Message field is required'})
  }

  if (!validateEmail(document.getElementById('email').value)) {
    errors.push({field: 'email', message: 'Invalid email'})
  }
  return errors;
}

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showErrors(inputs) {
  inputs.forEach(input => document.getElementById(input.field).classList.add('error'));
}

function removeErrors(inputs) {
  inputs.forEach(input => input.classList.remove('error'));
}

async function request() {

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  let rawResponse = await fetch('http://localhost:5000/sendMessage', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await rawResponse.json();
}

const ContactForm = () => {
  return (
    <div className="contact-form  animation fade-from-bottom">
      <form id="contact-message" onSubmit={sendMessage} action="#">
        <div className="cm-form-group">
          <input type="text" id="name" name="name" placeholder="Name" className="cm-form-control"/>
        </div>
        <div className="cm-form-group">
          <input type="email" id="email" name="email" placeholder="E-mail *"
                 className="cm-form-control required"/>
        </div>
        <div className="cm-form-group">
          <textarea name="message" id="message" placeholder="Message *" className="cm-form-control required" />
        </div>
        <div className="cm-form-group flex">
          <button type="submit" id="sendMessage">Send</button>
          <span id="responseMessage" />
        </div>
      </form>
    </div>
  )
};

export default ContactForm;