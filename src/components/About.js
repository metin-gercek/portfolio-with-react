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
            <div class="featurette-heading">
              
              <h2 class="featurette-heading">My name is Metin Gercek</h2>
              <p class="lead ml-3">I am a versatile professional with expertise as a UX designer, Scrum Master, and frontend-focused full-stack developer. In UX design, I prioritize user needs, employing design thinking and usability testing. As a Scrum Master, I excel in agile project management, facilitating ceremonies and fostering team collaboration. As a full-stack developer, I bring hands-on technical proficiency in HTML, CSS, and JavaScript, contributing to both frontend and backend components. My ability to seamlessly navigate between roles enables me to bridge the gap between design and development, ensuring the creation of user-centric and efficiently delivered projects.</p></div>
            
           
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
