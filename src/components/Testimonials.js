import React from "react";
import { Container, Item } from "semantic-ui-react";
import ReadMoreReact from "read-more-react";

function Testimonial({ testimonial }) {
  const openLinkedin = () => {
    window.open(testimonial.linkedin, "_blank");
  };
  return (
    <Item>
      <Item.Content>
        <Item.Header onClick={openLinkedin} className="testimonial__user">
          {testimonial.name}
        </Item.Header>
        <Item.Meta onClick={openLinkedin} className="testimonial__user">
          <span className="price">
            {testimonial.role}, {testimonial.company}
          </span>
        </Item.Meta>
        <Item.Description>
          <ReadMoreReact
            text={testimonial.content}
            min={150}
            ideal={170}
            max={300}
            readMoreText="more ..."
          />
        </Item.Description>
      </Item.Content>
    </Item>
  );
}

function Testimonials({ testimonials }) {
  return (
    <Container>
      <Item.Group>
        {testimonials.map((testimonial, key) => {
          return <Testimonial testimonial={testimonial} key={key} />;
        })}
      </Item.Group>
    </Container>
  );
}

export default Testimonials;
