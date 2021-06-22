import React from "react";
import { Container } from "semantic-ui-react";

function BottomFooter({ data }) {
  return (
    <Container textAlign="center" className="bottomfooter">
      © {new Date().getFullYear()} {data.user.name} - Powered by Semantic UI
    </Container>
  );
}

export default BottomFooter;
