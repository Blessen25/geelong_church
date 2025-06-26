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
})