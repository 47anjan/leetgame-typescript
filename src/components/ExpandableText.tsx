import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.toString().length <= limit) return <Text>{children}</Text>;

  const summary = expanded
    ? children
    : children.toString().substring(0, limit) + "...";

  return (
    <article>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          size={"xs"}
          fontWeight={"bold"}
          colorScheme="yellow"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read Less" : "Read More"}
        </Button>
      </Text>
    </article>
  );
};
export default ExpandableText;
