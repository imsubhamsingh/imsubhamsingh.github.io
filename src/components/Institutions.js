import React from "react";
import { Container, List } from "semantic-ui-react";

function Institution({ institution }) {
  return (
    <List.Item className="institutions__list-item">
      <List.Icon name="graduation cap" />
      <List.Content>
        <List.Header as="h5">{institution.name}</List.Header>
        <List.Description>
          {institution.degree} ({institution.year})
        </List.Description>
      </List.Content>
    </List.Item>
  );
}

function Institutions({ institutions }) {
  return (
    <Container>
      <List>
        {institutions.map((institution, key) => {
          return <Institution institution={institution} key={key} />;
        })}
      </List>
    </Container>
  );
}

export default Institutions;
