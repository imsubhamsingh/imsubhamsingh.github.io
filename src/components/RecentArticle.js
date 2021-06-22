import React from "react";
import { Container, Image, Header, Button } from "semantic-ui-react";

function RecentArticle({ article }) {
  const readMore = () => {
    window.open(article.url, "_blank");
  };
  return (
    <Container className="recent_article">
      <Image src={article.image} centered className="recent_article__image" />
      <Header as="h3" disabled content={article.title} />
      <p>{article.description}</p>
      <Button basic color="black" size="tiny" onClick={readMore}>
        Read More
      </Button>
    </Container>
  );
}

export default RecentArticle;
