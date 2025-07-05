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
        
        console.log("askhdasjhdhasjkd")
        document.getElementById('eventModalTitle').innerText = 'Add Event';
        document.getElementById('eventForm').action = "/events";
        document.getElementById('formMethod').value = 'POST';
        document.getElementById('eventName').value = '';
        document.getElementById('eventDate').value = '';
        document.getElementById('eventModalOverlay').style.display ='flex';
        
    }

    window.CloseEventModal = () => {

        document.getElementById('eventModalOverlay').style.display = 'none';
    }
})