import React from 'react';
import book from '../Images/books.avif';
import language from '../Images/languages.avif';
import skill from '../Images/skills.avif';

const SkillsSection = () => {
  return (
    <section id="Section_two">
      <div className="education">
        <div>
          <h2>Education</h2>
          <p><b>Bachelor of Computer Application</b> <br />
            Alvas Degree College <br />
            Vidyagiri, Moodbidri <br />
            2022 - 2024 <br />
            CGPA - 9.5 (As of October 2023) <br />
          </p>
        </div>
        <img src={book} alt="" />
      </div>

      <div className="skills">
        <img src={skill} alt="" />
        <div className="skilldiv">
          <h2>Skills</h2>
          <table cellSpacing="10" cellPadding="10px">
            <tr>
              <td>Creativity</td>
              <td>Meeting Deadlines</td>
              <td>Teamwork</td>
            </tr>
            <tr>
              <td>Adaptability</td>
              <td>Time Management</td>
              <td>Problem Solving</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>Technical skills</th>
            </tr>
            <tr>
              <td>Python</td>
              <td>SQL</td>
            </tr>
            <tr>
              <td>Reactjs</td>
              <td>HTML</td>
              <td>CSS</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="languages">
        <div>
          <h2>Languages</h2>
          <p>Kannada <br />
            English <br />
            Hindi <br />
          </p>
        </div>
        <img src={language} alt="" />
      </div>
    </section>
  );
};

export default SkillsSection;
