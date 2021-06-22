import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Card, Icon, Placeholder } from "semantic-ui-react";

function GithubPinnedItem({ title, description, stars, language, url }) {
  const openRepo = () => {
    window.open(url, "_blank");
  };
  return (
    <Card onClick={openRepo}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="circle" />
          {language}
        </span>
        <span className="githubpinned__item-star">
          <Icon name="star" />
          {stars}
        </span>
      </Card.Content>
    </Card>
  );
}

function GithubPinned({ username }) {
  const [pinnedRepos, setPinnedRepos] = useState([]);
  let itemsInRow = 3;

  useEffect(() => {
    fetch(`https://gh-pinned-repos.egoist.sh/?username=${username}`)
      .then((response) => response.json())
      .then((data) => setPinnedRepos(data));
  }, [username]);

  if (isMobile) {
    // if the device is mobile set item per row to 1
    itemsInRow = 1;
  }

  if (pinnedRepos.length > 0) {
    return (
      <Card.Group itemsPerRow={itemsInRow}>
        {pinnedRepos.map((repo, key) => {
          return (
            <GithubPinnedItem
              title={repo.repo}
              description={repo.description}
              stars={repo.stars}
              language={repo.language}
              url={`https://github.com/${repo.owner}/${repo.repo}/`}
              key={key}
            />
          );
        })}
      </Card.Group>
    );
  } else {
    return (
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
      </Placeholder>
    );
  }
}

export default GithubPinned;
