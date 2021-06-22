import React from "react";
import { Container, List, Rating } from "semantic-ui-react";

function Language({ language }) {
  return (
    <List.Item>
      <List.Content>
        <List.Header as="h5">{language.name}</List.Header>
        <List.Description className="languages__rating">
          <Rating
            maxRating={5}
            defaultRating={language.rating}
            size="small"
            disabled
          />
        </List.Description>
      </List.Content>
    </List.Item>
  );
}

function Languages({ languages }) {
  return (
    <Container>
      <List>
        {languages.map((language, key) => {
          return <Language language={language} />;
        })}
      </List>
    </Container>
  );
}

export default Languages;
