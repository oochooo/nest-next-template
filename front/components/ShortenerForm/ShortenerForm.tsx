import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";

export interface ShortenerFormInterface {
  setShortenedUrl: Dispatch<SetStateAction<string>>;
}

export interface shortenedUrlObject {
  ogUrl: string;
  shortenedUrl: string;
  id: number;
}

const ShortenerForm: FC<ShortenerFormInterface> = ({ setShortenedUrl }) => {
  const [isValid, setIsValid] = useState(false);
  const [ogUrl, setOgUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const prelimUrlEval = (url: string) => {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  };

  const isValidUrl = (url: string) => {
    const isHttp = url.substring(0, 4) === "http";
    const isHttps = url.substring(0, 5) === "https";
    return prelimUrlEval(url) && (isHttp || isHttps);
  };

  const handleUrlChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsValid(isValidUrl(e.currentTarget.value));
    setOgUrl(e.currentTarget.value);
  };

  const submit = () => {
    const sendToGetShorten = async () => {
      try {
        const resp = await fetch("http://localhost:3001/shortener", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ ogUrl: ogUrl }),
        });

        if (resp.ok) {
          setIsSubmitting(false);
          const jsonedResp: shortenedUrlObject = await resp.json();
          setShortenedUrl(jsonedResp.shortenedUrl);
        } else {
          throw "some error occured";
        }
      } catch (err) {
        setIsSubmitting(false);
        console.error(err);
      }
    };
    setIsSubmitting(true);
    sendToGetShorten();
  };
  return (
    <FormControl id="url">
      <FormLabel>og url</FormLabel>
      <HStack spacing={3}>
        <Input type="url" onChange={handleUrlChange} />
        <Button onClick={submit} isLoading={isSubmitting} disabled={!isValid}>
          shorten
        </Button>
      </HStack>
      <FormHelperText color={isValid ? "inherit" : "red.400"}>
        {isValid ? "shorten your url !" : "invalid url"}
      </FormHelperText>
    </FormControl>
  );
};

export default ShortenerForm;
