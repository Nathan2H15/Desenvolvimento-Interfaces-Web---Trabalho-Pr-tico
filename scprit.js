    async function getProfileData(){
        const response = await fetch('https://api.github.com/users/Nathan2h15') 
        const data = await response.json()

        console.log(data)
        const profileDIV=document.getElementById('profile-info')
        profileDIV.innerHTML=`  <h1>${data[0].login}</h1>
        <h4>Objetivos: </h4>
        <p>Trago comigo um atitude motivada em adquirir dia após dia o conhecimento necessário para aperfeiçoar
            minhas habilidades.</p>
        <p>Busco alicerçar todo príncipio adquirido e executar com excelência e celeridade.</p>
        
     
        <h4>Redes Sociais</h4>
         
        <a href="http://www.instagram.com/nathantaciano/">Instagram</a>
        <a href="http://www.facebook.com">Facebook</a>
        <a href="http://www.linkedin.com/feed/">LinkedIn</a>`
    
    }

    getProfileData()