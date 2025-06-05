function showDeleteModal(eventId) {

    console.log("Show")
    const form = document.getElementById('deleteForm');
    form.action = 'event/delete/${eventId}/';
    document.getElementById('deleteModal').style.display = 'block'; 
    document.getElementById('deleteModalOverlay').style.display = 'block';
}

function closeDeleteModal() {

    document.getElementById('deleteModal').style.display = 'none'; 
    document.getElementById('deleteModalOverlay').style.display = 'none';
}