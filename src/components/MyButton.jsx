import { Button } from "@chakra-ui/react";

function MyButton({ link }) {
  if (Array.isArray(link)) {
    return link.map((item, idx) => {
      const key = Object.keys(item);
      return (
        <Button key={idx} as="a" href={item[key]} target="_blank">
          {key}
        </Button>
      );
    });
  }
  const key = Object.keys(link);
  return (
    <Button as="a" href={link[key]} target="_blank">
      {key}
    </Button>
  );
}

export default MyButton;
