import React from "react";
import { Container, List } from "semantic-ui-react";

function ContactDetails({ details }) {
  return (
    <Container>
      <List>
        <List.Item className="contact-details__list-item">
          <List.Icon
            name="address book"
            className="contact-details__list-item-icon "
          />
          <List.Content>{details.mobile}</List.Content>
        </List.Item>
        <List.Item className="contact-details__list-item">
          <List.Icon name="mail" className="contact-details__list-item-icon " />
          <List.Content>{details.mail}</List.Content>
        </List.Item>
        <List.Item className="contact-details__list-item">
          <List.Icon
            name="globe"
            className="contact-details__list-item-icon "
          />
          <List.Content>{details.web}</List.Content>
        </List.Item>
        <List.Item className="contact-details__list-item">
          <List.Icon
            name="marker"
            className="contact-details__list-item-icon "
          />
          <List.Content>{details.location}</List.Content>
        </List.Item>
      </List>
    </Container>
  );
}

export default ContactDetails;
