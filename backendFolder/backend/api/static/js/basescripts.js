function showDeleteModal(eventId) {

    const form = document.getElementById('deleteForm');
    form.action = '/delete/${eventId}/';
    document.getElementById('deleteModal').style.display = 'block'; 
    document.getElementById('deleteModalOverlay').style.display = 'block';
}

function closeDeleteModal() {

    document.getElementById('deleteModal').style.display = 'none'; 
    document.getElementById('deleteModalOverlay').style.display = 'none';
}