import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Who am I?",
      tab2 = "Technical Skills",
      tab3 = "Education & Certification",
      tab4 = "Experience";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>Passion</h6>I am a Full-Stack Software Engineer
                          driven by a passion for technology, learning, and
                          development. My enthusiasm for technology began early
                          in my life when I built my first PC at the age of 13,
                          and since then, I've been interested in coding and
                          databases.
                          <br />
                          However, it wasn't until recently that I decided to
                          turn my hobby into a career and pursue software
                          development more seriously.
                        </li>
                        <li>
                          <h6>Hobbies</h6>
                          I love working out, playing games and learning new
                          things.
                          <br />
                          I'm driven by a passion for technology, learning, and
                          development.
                          <br />I view every day as an opportunity to learn
                          something new and grow as a person.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>Languages</h6>
                          HTML
                          <br />
                          CSS: Bootstrap, Tailwind
                          <br />
                          JavaScript: React
                          <br />
                          TypeScript
                          <br />
                          Python: Django
                          <br />
                          C#
                          <br />
                          SQL
                          <br />
                        </li>
                        <li>
                          <h6>Databases</h6>
                          SQL: MySQL, SQLite
                          <br />
                          NoSQL: MongoDB
                          <br />
                        </li>
                        <li>
                          <h6>API</h6>
                          Django Rest Framework(DRF)
                          <br />
                          Express
                          <br />
                          Next.js
                          <br />
                          Insomnia
                          <br />
                        </li>
                        <li>
                          <h6>Full-Stack / Back-End</h6>
                          Django
                          <br />
                          Node.js
                          <br />
                          Next.jst
                          <br />
                        </li>
                        <li>
                          <h6>Various</h6>
                          Figma
                          <br />
                          GitHub
                          <br />
                          Visual Studio
                          <br />
                          Visual Studio Code
                          <br />
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>HarvardX</h6>
                          Computer Science for Artifical Intelligence
                        </li>
                        <li>
                          <h6>
                            Coursera
                          </h6>
                          <a href="https://www.credly.com/badges/f9a6f169-1eaf-49b3-a6a9-a05547c0c8c3">Meta Full-Stack Software Engineer Certificate </a>
                          <a href="https://www.credly.com/badges/1577eef6-d928-45d2-89f1-a74b41a24276">Meta Back-End Developer Profesional Certificate </a>
                          <a href="https://www.credly.com/badges/e9433593-6ccd-42e1-a152-1e540b39aead">Meta Front-End Developer Profesional Certificate</a>
                        </li>
                        <li>
                          <h6>
                            Udemy
                          </h6>
                          <a href="https://www.udemy.com/certificate/UC-b7fcbc1f-2d20-48c7-8c50-bc9ddc87454b/">Understanding TypeScript</a>
                          <a href="https://www.udemy.com/certificate/UC-9776cdd8-1203-42e3-93b6-d800d9e34c19/">Intermediate Classes, Interfaces and OOP</a>
                          <a href="https://www.udemy.com/certificate/UC-0275f880-c92e-47de-86ef-f6be318f4be8/">C# Basics for Beginners: Learn C# Fundamentals by Coding</a>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>
                            Upcoming
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
