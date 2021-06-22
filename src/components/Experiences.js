import React from "react";
import { Container, Item, List } from "semantic-ui-react";

function Experiences({ experiences }) {
  return (
    <Container>
      <Item.Group>
        {experiences.map((experience, key) => {
          return (
            <Item>
              <Item.Content key={key}>
                <Item.Header>{experience.role}</Item.Header>
                <Item.Meta>
                  <span className="price">
                    {experience.employeer} ({experience.year})
                  </span>
                </Item.Meta>
                <Item.Description>{experience.description}</Item.Description>
                <Item.Description className="experiences__contributions">
                  <List bulleted>
                    {experience.contributions &&
                      experience.contributions.map((item, key) => {
                        return (
                          <List.Item
                            key={key}
                            className="experiences__contribution"
                          >
                            {item}
                          </List.Item>
                        );
                      })}
                    {experience.contributions && (
                      <span className="experiences__contributiondots">...</span>
                    )}
                  </List>
                </Item.Description>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </Container>
  );
}

export default Experiences;
