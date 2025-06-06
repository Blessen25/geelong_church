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