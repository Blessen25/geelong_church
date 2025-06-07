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

