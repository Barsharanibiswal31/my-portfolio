const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_znhvuvb';
   const templateID = 'template_ezoy3zh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('message sent successfully');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});