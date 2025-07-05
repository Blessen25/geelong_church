document.addEventListener("DOMContentLoaded",()=>{

    const openBtn = document.getElementById('OpenSideBar');
    const closeBtn = document.getElementById('CloseSideBar');
    const overlay = document.getElementById('outlayidman');
    const sidebar = document.getElementById('sidebaridmain');

    if( openBtn && closeBtn && overlay && sidebar){

        openBtn.addEventListener('click',()=>{

            overlay.style.display = 'block';
            sidebar.style.display = 'flex';
        })

        closeBtn.addEventListener('click',()=>{

            overlay.style.display = 'none';
            sidebar.style.display = 'none';
        })
    }

    window.openAddModal = () => {
        
        document.getElementById('eventModalTitle').innerText = 'Add Event';
        document.getElementById('eventForm').action = "/admin/events";
        document.getElementById('formMethod').value = 'POST';
        document.getElementById('eventName').value = '';
        document.getElementById('eventDate').value = '';
        document.getElementById('eventModalOverlay').style.display ='flex';
        
    }

    window.CloseEventModal = () => {

        document.getElementById('eventModalOverlay').style.display = 'none';
    }

    window.openEditModal= (id, name, date) => {

        document.getElementById('eventModalTitle').innerText = 'Edit Event';
        document.getElementById('eventForm').action=`/admin/events/${id}`;
        document.getElementById('formMethod').value = 'PUT';
        document.getElementById('eventName').value = name;
        document.getElementById('eventDate').value = date;
        document.getElementById('eventModalOverlay').style.display = 'flex';
    }

    window.openDeleteModal = (id) => {

        document.getElementById('deleteForm').action = `/admin/events/${id}`;
        document.getElementById('deleteModalOverlay').style.display = 'flex';
    }

    window.CloseEventModaldelete = () => {

        document.getElementById('deleteModalOverlay').style.display = 'none';
    }
})