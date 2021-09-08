import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { FC } from "react";

export const getFullUrl = (shortenedUrl: string) => {
  const port = window.location.port ? `:${window.location.port}` : "";
  return `${window.location.protocol}//${window.location.hostname}${port}/${shortenedUrl}`;
};

interface ShortenedUrlBlockInterface {
  shortenedUrl: string;
}
const ShortenedUrlBlock: FC<ShortenedUrlBlockInterface> = ({
  shortenedUrl,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(getFullUrl(shortenedUrl));
  };
  return (
    <Text
      onClick={() => copyToClipboard()}
      cursor="pointer"
      _hover={{ textDecor: "underline" }}
    >
      {copied ? "copied to clipboard!!": shortenedUrl}
    </Text>
  );
};

export default ShortenedUrlBlock;
