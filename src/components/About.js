import profile from "../images/profile.jpeg";



export const About = () => {
  return (
    <div>
      <div>
        <div class="p-4 p-md-5 mb-4 text-bg-dark text-center" id="aboutme">
          <div class=" px-0">
            <h1 class="display-4 fst-italic">About me</h1>
          </div>
        </div>
        <div class="row featurette">
          <div class="col-md-7">
            
            <p class="lead">
              I am getting Full-stack training with the following technologies: JavaScript, TypeScript, React.js, Redux, REST API, Node.js, Express.js, MongoDB, PostgreSQL, Jest, Bash scripting, Docker containers, GitHub Actions, and Amazon Web Services at Integrify and I am also currently studying Full Stack Web Developer program (Html,
              Css, Javascript, Angular, Java and Spring boot) at Business
              College to improve my software knowledge. 
              <br></br> I'm a graphic designer since 2016. I develop further
              my skills in graphic design, UI & UX design field. I have been
              living in Finland for 5 years. I can learn easily, and I have an
              analytical mind, because I am a mathematician. Before moving to
              Finland, I worked for 15 years as a math teacher and school
              principal.
            </p>
            
          </div>
          <div class="col-md-5">
            <div>
              <figure><img src={profile} alt="profile"></img></figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
