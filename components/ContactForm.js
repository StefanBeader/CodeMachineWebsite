async function sendMessage(e) {
  e.preventDefault();
  // remove previous errors
  const requireds = document.getElementsByClassName('required');
  const inputs = [...requireds];
  removeErrors(inputs);

  // validate input
  const errors = validateInput();

  if (errors.length > 0) {
    showErrors(errors);
    return false;
  }
  // send request
  let response = await request();
  let messageContainer = document.getElementById('responseMessage');
  messageContainer.innerText = response;
  messageContainer.style.display = 'inline-block';
}

function validateInput() {
  const errors = [];
  if (document.getElementById('email').value === '') {
    errors.push({field: 'email', message: 'This field is required'})
  }

  if (document.getElementById('message').value === '') {
    errors.push({field: 'message', message: 'This field is required'})
  }

  if (!validateEmail(document.getElementById('email').value)) {
    errors.push({field: 'email', message: 'This is not valid email'})
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
  let response = await rawResponse.json();
  return response.message;
}

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form id="contact-message" action="#">
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
          <button type="button" onClick={sendMessage} id="sendMessage">Send</button>
          <span id="responseMessage" />
        </div>
      </form>
    </div>
  )
};

export default ContactForm;