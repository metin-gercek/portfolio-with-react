import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <div>
      <div class="p-4 p-md-5 mb-4 text-bg-dark text-center backgroundPurple" id="contact">
        <div class=" px-0">
          <h1 class="display-4 fst-italic">Contact</h1>
        </div>
      </div>

      <div class="d-flex justify-content-center">
          <div class="card m-2" style={{ width: "18rem" }}>
            <div class="card-body">
              <FontAwesomeIcon icon={faGithub} class="card-img-top" />
              <a href="https://github.com/metin-gercek" class="text-decoration-none">
                  <h4 class="card-text text-center ">Github</h4>
              </a>
            </div>
          </div>
          <div class="card m-2" style={{ width: "18rem" }}>
            <div class="card-body">
              <FontAwesomeIcon icon={faTwitter} class="card-img-top" />
              <a href="https://twitter.com/metingercek" class="text-decoration-none">
                  <h4 class="card-text text-center ">Twitter</h4>
              </a>
            </div>
          </div>
          <div class="card m-2" style={{ width: "18rem" }}>
            <div class="card-body">
              <FontAwesomeIcon icon={faEnvelope} class="card-img-top" />
              <a href="mailto:metingercek@gmail.com" class="text-decoration-none">
                  <h4 class="card-text text-center ">Email</h4>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};
