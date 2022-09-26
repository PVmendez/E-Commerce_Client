import { Link } from "react-router-dom";

export const Card = (props) => (
  <>
    <div className="col-12 col-xl-4 mb-3">
      <div className="card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front imgBox">
            {props.image === "Sofia" ? (
              <img
                src={`https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/${props.image}.jpg`}
                alt={props.image}
              />
            ) : (
              <img
                src={`https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/${props.image}.jpeg`}
                alt={props.image}
              />
            )}

            <div className="content">
              <h3>
                {props.name}{" "}
                {props.lastname}
              </h3>
              <div className="textIcon">
                <p className="titleText">Full Stack Developer Jr.</p>
                <p className="flipText">Dame la vuelta y conoceme más <i className="fa-solid fa-repeat"></i></p>
              </div>
              
            </div>
          </div>
          <div className="flip-card-back">
            <div className="code-body">
              <div className="line-numbers d-none">
                <div id="1">1</div>
                <div id="2">2</div>
                <div id="3">3</div>
                <div id="4">4</div>
                <div id="5">5</div>
                <div id="6">6</div>
                <div id="7">7</div>
                <div id="8">8</div>
              </div>
              <code>
                <span className="first-line">
                  <span className="variable">const </span>
                  <span className="function">aboutMe </span>
                  <span className="operator">=</span>
                  <span> {"{"}</span>
                  <div className="indent">
                    <span className="property">name</span>
                    <span className="operator">:</span>
                    <span className="string">
                      "{props.name}
                      {props.lastname}"
                    </span>
                    <span>,</span>
                  </div>
                  <div className="indent">
                    <span className="property">title</span>
                    <span className="operator">:</span>
                    <span className="string">"Jr. Full Stack Developer"</span>
                    <span>,</span>
                  </div>
                  <div className="indent">
                    <span className="property">contact</span>
                    <span className="operator">:</span>
                    <span>
                      {" "}
                      {"{"}
                      <div className="indent">
                        <span className="property">email</span>
                        <span className="operator">:</span>
                        <span className="string string-mail">
                          "{props.email}"
                        </span>
                        <span>,</span>
                      </div>
                      <div className="indent">
                        <span className="property">phone</span>
                        <span className="operator">:</span>
                        <span className="string"> {props.phone}</span>
                        <span>,</span>
                      </div>
                    </span>
                    <span> {"}"}</span>
                    <span>,</span>
                    <div className="indent">
                      <span className="property">likes</span>
                      <span className="operator">:</span>
                      <span>
                        {" "}
                        {"["}
                        <div className="indent">
                          <span className="string">"{props.likes[0]}"</span>
                          <span>,</span>
                        </div>
                        <div className="indent">
                          <span className="string">"{props.likes[1]}"</span>
                          <span>,</span>
                        </div>
                        <div className="indent">
                          <span className="string">"{props.likes[2]}"</span>
                          <span>,</span>
                        </div>
                      </span>
                      <span> {"]"}</span>
                    </div>
                  </div>
                  <div className="first-line mb-3">
                    <span> {"}"}</span>
                  </div>
                  <span className="first-line">
                    <span className="variable">const </span>
                    <span className="function">Linkedin </span>
                    <span className="operator">{"="}</span>
                    <span className="variable">{" ()"}</span>
                    <span className="operator">{" =>"}</span>
                    <Link
                      className="mt-3 mx-2"
                      to={`//www.linkedin.com/in/${props.linkedin}/`}
                      target="_blank" 
                    >
                      <i className="fa-brands fa-linkedin fa-xl icon"></i>
                    </Link>
                  </span>
                  {props.github ? (
                    <div className="mt-2">
                      <span className="first-line">
                        <span className="variable">const </span>
                        <span className="function">Github </span>
                        <span className="operator">{"="}</span>
                        <span className="variable">{" ()"}</span>
                        <span className="operator">{" =>"}</span>
                        <Link
                          className="mt-3 mx-2"
                          to={`//github.com/${props.github}`}
                          target="_blank"
                        >
                          <i class="fa-brands fa-github fa-xl icon-git"></i>
                        </Link>
                      </span>
                    </div>
                  ) : null}
                </span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
