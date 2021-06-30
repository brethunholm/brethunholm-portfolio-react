

const data = {
    outstandingly: {
        projectTitle: `Outstandingly`,
        projectLink: `https://outstandingly.netlify.app/`,
        projectSubtitle: `Concept to Deployment Gatsby Site`,
        projectUrl: `Outstandingly.netlify.app`,
        headerParagraph: `
        The goal of this project was to create a dynamic and mobile-responsive landing page for a tech start-up based in San Diego, California. Throughout this project, I worked as lead developer among a three-person team to develop the website from concept to launch. In the early stages of development of this project I utilized Figma to create wireframes and mockup the site. Our team utilized Agile and Scrum methodology for our development. As the lead developer I lead daily standup meetings via zoom with the other team members, assigned tasks and performed weekly code reviews.
        `,
        bottomParagraph: `
        This project was coded on Visual Studio Code. I built the project with Gatsby and React and utilized Graphql for image rendering. With future use and scaling in mind I built reusable components that accepted props to render content. I created a custom drop down accordion style FAQ component that accepts props to render the content allowing additional content to be easily added or removed.  Additionally, I researched and utilized well supported NPM packages when necessary including Aos for scroll animations and Formik for form management as well as several other Gatsby required packages for image rendering. Throughout the development of this site our team utilized GitHub for version control, the final product is hosted using Netlify.
        
        I really enjoyed working on this project and having the opportunity to take on a leadership role. I learned a lot about GatsbyJS and how it works with React to make sites even faster and render images more efficiently. 
        
        `,
        src: `https://www.youtube.com/embed/YSayHfJMZQc`,
        img: 'images/outstandingly.jpg'
    },
   wedding: {
        projectTitle: `Wedding Information Landing Page`,
        projectUrl: `Save-The-Date-Rae.netlify.app`,
        projectLink: `https://save-the-date-rae.netlify.app/`,
        projectSubtitle: `Custom designed wedding information, rsvp and gallery `,
        headerParagraph: `This site was a freelance contract for a newly engaged couple. The goal of this project was to create a custom designed and mobile responsive landing page that provided event details for the upcoming wedding, registry information and a photo gallery. I created this website from concept to launch using Figma for initial design mockups and coded on Visual Studio Code. I built the site using React and created reusable components with future use in mind. Keeping in mind that the site would likely be accessed on mobile devices by wedding guests, the website was designed using mobile first design philosophy. I implemented CSS grid, grid template areas and custom media queries to adjust the layout of the content for optimal user experience on mobile devices.`,
        bottomParagraph: `

        I created a custom image gallery slider that loops through the couples engagement photos. The gallery is set to auto play but is also interactive and can be navigated through using the side arrows. Additional custom features include a countdown clock to the event, and an RSVP form created using formik and styled with custom styled components. 

        I really enjoyed the design process of this project. I utilized CSS grid and custom media queries to ensure that the layout was completely responsive .On desktop the “story” section has a horizontal layout with a crisscross layout design for the images and captions, when the site is accessed on mobile devices I utilized grid template areas to change the layout of this section to be vertical for a better user experience. 
        
        
        `,
        src: `https://www.youtube.com/embed/Mg1N2nXB8tk`,
        img: 'images/wedding.jpg'
    },
    meditation: {
        projectTitle: `Nama-go-Mediate`,
        projectUrl: `Nama-go-Meditate.com`,
        projectLink: `https://namagomeditate.com/`,
        projectSubtitle: `A self guided meditation application built using ReactJS`,
        headerParagraph: `Nama-go-Mediate is a personal project, it is a web application for self guided meditation with four different meditation mantra themes to select from. This application was built using React using mobile first design mythology. The site has a dropdown hamburger menu with a fixed position that enables the user to select alternative mediation themes and navigate throughout the site. 
        `,
        bottomParagraph: ` The main content of the site is a full screen slider with randomized images and custom mantras for the user to read as the slider continues automatically. Additionally, the user can navigate the meditation manually using side arrows and by clicking the progress indicators at the bottom of the slide. This project was coded on Visual Code Studio and is hosted on Netlify. `,
        src: `https://www.youtube.com/embed/80KV6ZF1Alo`,
        img: 'images/meditation.jpg'
    }
}
export default data