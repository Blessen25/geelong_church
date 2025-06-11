/* OPENING SIDEBAR RESP */

function openSidebar() {
    const sidebarOverlay = document.getElementById('sidebaroverlayid');
    const sidebarIcon = document.querySelector('.fa-align-left'); // Use querySelector for single element
    const sidebarDiv = document.getElementById('respsidebardivid');

    if (sidebarOverlay) {
        sidebarOverlay.style.display = 'block';
    }
    if (sidebarIcon) {
        sidebarIcon.style.color = '#3c79b0';
    }
    if (sidebarDiv) {
        sidebarDiv.style.display = 'flex'; // Use flex directly, no need for block
    }
}

/* DELETE JS */
function showDeleteModal(eventId) {

    const form = document.getElementById('deleteForm');
    form.action =  `/api/event/delete/${eventId}/`;
    document.getElementById('deleteModal').style.display = 'block'; 
    document.getElementById('deleteModalOverlay').style.display = 'block';
}

function closeDeleteModal() {

    document.getElementById('deleteModal').style.display = 'none'; 
    document.getElementById('deleteModalOverlay').style.display = 'none';
}

/* Conversion of date */

function converttoDDMMYYYY(dateString){
    
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth() + 1).padStart(2,'0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`
}


/* EDIT JS */

function showEditModal(Id,name, date){

    document.getElementById('editEventId').value=Id;
    document.getElementById('editEventName').value=name;
    document.getElementById('editEventDate').value=converttoDDMMYYYY(date);
    document.getElementById('EditModel').style.display = 'block'; 
    document.getElementById('EditModalOverlay').style.display = 'block';
}

function closeEditModal(){

    document.getElementById('EditModel').style.display='none';
    document.getElementById('EditModalOverlay').style.display='none';
}

document.getElementById('editEventForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const eventId = document.getElementById('editEventId').value;
    const eventName = document.getElementById('editEventName').value;
    const eventDate = document.getElementById('editEventDate').value;
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    console.log(eventId, eventName, eventDate, csrfToken);

    fetch(`/api/event/edit/${eventId}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({
            event_name: eventName,
            event_date: eventDate
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Event updated successfully!");
            location.reload(); // or update UI dynamically
        } else {
            alert("Failed to update event.");
        }
    });
});


/* ADD FUCNTIONALITY */

function showAddModal() {

    document.getElementById('AddModel').style.display = 'block';
    document.getElementById('AddModalOverlay').style.display = 'block';
}

function closeAddModal() {

    document.getElementById('AddModel').style.display = 'none';
    document.getElementById('AddModalOverlay').style.display = 'none';
}

document.getElementById('NewSaveBtn').addEventListener('click',function(e){

    e.preventDefault();

    const eventName = document.getElementById('newEventName').value;
    const eventDate = document.getElementById('newEventDate').value;

    console.log(eventName, eventDate);
    if(!eventName || !eventDate){

        alert("Please fill all the fields");
        return;
    }

    fetch('/api/event/',{

        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') 
            },
            body: JSON.stringify({
            event_name: eventName,
            event_date: eventDate
            })
        })
        .then(response => {
            if (response.ok) {
            alert('Event added successfully!');
            location.reload();  
            } else {
            alert('Failed to add event.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error adding event.');
        });
});


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}