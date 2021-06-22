import React from "react";
import { Container, Header } from "semantic-ui-react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import GithubPinned from "./GithubPinned";

const gitHubCalendarTheme = {
  background: "transparent",
  text: "#000",
  grade4: "hsl(0, 0%, 30%)",
  grade3: "hsl(0, 0%, 44%)",
  grade2: "hsl(0, 0%, 58%)",
  grade1: "hsl(0, 0%, 72%)",
  grade0: "#eee",
};

function Contributions({ github_username }) {
  return (
    <Container>
      <GitHubCalendar
        username={github_username}
        blockSize={15}
        blockMargin={8}
        theme={gitHubCalendarTheme}
      >
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
      <Header as="h3" content="Projects" />
      <GithubPinned username={github_username} />
    </Container>
  );
}

export default Contributions;
