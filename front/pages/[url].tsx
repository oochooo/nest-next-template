import { Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { getFullUrl } from "../components/ShortenedUrlBlock/ShortenedUrlBlock";
import { shortenedUrlObject } from "../components/ShortenerForm/ShortenerForm";

const ShortenedUrlPage: NextPage = () => {
  const [theresAnError, setTheresAnError] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [ogUrl, setOgUrl] = useState("");
  const router = useRouter();
  const { url } = router.query;

  const getOgUrl = async (shortenedUrl: string) => {
    try {
      const resp = await fetch(
        `http://localhost:3001/shortener/${shortenedUrl}`
      );
      if (resp.ok) {
        setFetched(true);
        const jsonedResp: shortenedUrlObject = await resp.json();

        setOgUrl(jsonedResp.ogUrl);
        window.open(jsonedResp.ogUrl, "_blank");
      } else {
        throw new Error("some error occured");
      }
    } catch (err) {
      setFetched(true);
      console.error(err);
      setTheresAnError(true);
    }
  };

  useEffect(() => {
    const shortenedUrl = typeof url === "string" ? url : null;

    !fetched && shortenedUrl && getOgUrl(shortenedUrl);
  });
  return (
    <>
      {ogUrl && (
        <Text>
          we have redirected you to{" "}
          <Link target="_blank" href={ogUrl}>
            {ogUrl}
          </Link>
        </Text>
      )}
      {theresAnError && <Text color="red.300">SOME ERROR OCCURED</Text>}
    </>
  );
};

export default ShortenedUrlPage;
