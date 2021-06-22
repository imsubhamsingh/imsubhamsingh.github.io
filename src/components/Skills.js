import React from "react";
import { Container, Header, Progress } from "semantic-ui-react";

function Skills({ skills }) {
  return (
    <Container>
      {skills.map((skill, key) => {
        return (
          <div className="skill_container" key={key}>
            <Header as="h5">{skill.name}</Header>
            <Progress
              percent={skill.percent}
              color="black"
              active
              size="small"
            ></Progress>
          </div>
        );
      })}
    </Container>
  );
}

export default Skills;
