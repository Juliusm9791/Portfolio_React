const images = [
    {
        name: 'Simple_Work_Day_Scheduler',
        link: 'https://repository-images.githubusercontent.com/408978716/2e4f1044-f4fd-4102-a5e2-39bd50eb9df4'
    },
    {
        name: 'Pet_Adopt',
        link: 'https://repository-images.githubusercontent.com/431668354/11c4c572-fb10-4804-b2c0-773035f2d3bf'
    },
    {
        name: 'Weather_Dashboard',
        link: 'https://repository-images.githubusercontent.com/411104618/6dc854e5-647f-47b6-8365-5e2c91b0048c'
    },
    {
        name: 'whats_for_dinner',
        link: 'https://repository-images.githubusercontent.com/413541670/5f7708b0-964b-473c-b0a9-8f501d25d3f9'
    },
    {
        name: 'Password_Generator',
        link: 'https://repository-images.githubusercontent.com/402895988/adcdea08-b3ff-47a4-9bf5-c109d3dc409a'
    },
    {
        name: 'Code_Quiz',
        link: 'https://repository-images.githubusercontent.com/405237582/d44bf092-f066-40cb-a0c4-cd5ecb7f8e12'
    },
    {
        name: 'Rock_Paper_Scissors',
        link: 'https://repository-images.githubusercontent.com/402804908/107e8ac8-096a-4945-af65-197834b2d7de'
    },
    {
        name: 'Mini_Project',
        link: 'https://repository-images.githubusercontent.com/401732011/d0445271-3ef7-4b04-83b5-794fa3f436f4'
    },
    {
        name: 'Developers_Tech_Blog',
        link: 'https://repository-images.githubusercontent.com/430529132/a54158b0-a483-4bff-ac96-d97d7d550a57'
    },

]
function returnLink(repo) {
    for (let i = 0; i < images.length; i++) {
        if (repo === images[i].name) {
            return images[i].link

        }
    }
}


export default returnLink 