/* DELETE JS */
function showDeleteModal(eventId) {

    console.log("Show")
    const form = document.getElementById('deleteForm');
    form.action =  `/api/event/delete/${eventId}/`;
    console.log(form.action);
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

document.getElementById('editSaveBtn').addEventListener('click', function(e) {
  e.preventDefault();

  const id = document.getElementById('editEventId').value;
  const name = document.getElementById('editEventName').value;
  const date = document.getElementById('editEventDate').value;

  // Validate inputs (optional)
  if (!name || !date) {
    alert('Please fill all fields');
    return;
  }

  // Example: Send update request to your backend
  fetch(`/events/edit/${id}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken') // CSRF token function for Django
    },
    body: JSON.stringify({ event_name: name, event_date: date })
  })
  .then(response => {
    if(response.ok) {
      alert('Event updated successfully!');
      location.reload(); // reload page or update UI dynamically
    } else {
      alert('Failed to update event.');
    }
  })
  .catch(err => {
    alert('Error updating event.');
    console.error(err);
  });

  closeEditModal();
});

function getCookie(name) {

    let cookieValue = null;
    if (document.cookie && document.cookie !== ''){

        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++){

            let cookie = cookies[i].trim();
            if(cookie.substring(0, name.length + 1) === (name + '-')){

                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }

    return cookieValue;
}