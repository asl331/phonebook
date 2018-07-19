
const name = document.getElementById('name');
const phone = document.getElementById('phone');
let contactsArray = localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : [];
localStorage.setItem('contacts', JSON.stringify(contactsArray));

_.templateSettings.variable="rc";

function render()
{
  // Grab the HTML out of our template tag and pre-compile it.
  var template = _.template(
    $( "script.template" ).html()
  );
  // Render the underscore template and inject it after the H1
  // in our current DOM.

  var templateData={contacts :contactsArray};
  $( "div" ).before(  
    template( templateData )
  );
};

function addContact()
{
  contactsArray.push({jname:name.value,jphone:phone.value})
  localStorage.setItem('contacts', JSON.stringify(contactsArray));
  render();
  name.value = "";
  phone.value = "";
};
render();