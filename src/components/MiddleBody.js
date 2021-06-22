import React from "react";
import { Grid, Segment, Container, Label } from "semantic-ui-react";

import RecentArticle from "./RecentArticle";
import Experiences from "./Experiences";
import Contributions from "./Contributions";
import ContactDetails from "./ContactDetails";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Institutions from "./Institutions";
import Languages from "./Languages";

function MiddleContainer({ data }) {
  return (
    <Grid columns={2} className="homepage">
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={11}>
          <Segment raised>
            <Label as="a" color={data.color} ribbon>
              About
            </Label>
            <Container>
              <p>{data.user.about}</p>
            </Container>
          </Segment>
          <Segment raised>
            <Label as="a" color={data.color} ribbon>
              Experiences
            </Label>
            <Experiences experiences={data.experiences} />
          </Segment>
          <Segment raised>
            <Label as="a" color={data.color} ribbon>
              Latest
            </Label>
            <RecentArticle
              article={data.recent_article}
              articles_url={data.user.articles_url}
            />
          </Segment>
          <Segment raised>
            <Label as="a" color={data.color} ribbon>
              Contributions
            </Label>
            <Contributions github_username={data.user.github_username} />
          </Segment>
        </Grid.Column>
        <Grid.Column
          mobile={16}
          tablet={8}
          computer={5}
          className="middlebody__second-column"
        >
          <Segment raised>
            <Label as="a" color={data.color} ribbon>
              Contact
            </Label>
            <ContactDetails details={data.contact_details} />
          </Segment>
          <Segment raised>
            <Label as="a" color={data.color} ribbon>
              Skills
            </Label>
            <Skills skills={data.skills} />
          </Segment>
          <Segment raised>
            <Label as="a" color={data.color} ribbon>
              Testimonials
            </Label>
            <Testimonials testimonials={data.testimonials} />
          </Segment>
          <Segment raised>
            <Label as="a" color={data.color} ribbon>
              Institutions
            </Label>
            <Institutions institutions={data.institutions} />
          </Segment>
          <Segment raised>
            <Label as="a" color={data.color} ribbon>
              Languages
            </Label>
            <Languages languages={data.languages} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default MiddleContainer;
