"use client";

import Divider from "@/common/Divider";
import { SendIcon } from "@/icons/SendIcon";
import { YoutubeIcon } from "@/icons/YoutubeIcon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const Timestamp = () => {
  const [link, setLink] = useState("");

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "350",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <Input
        label="유튜브 링크를 넣어주세요"
        labelPlacement="outside"
        classNames={{
          label: "!text-dark-1",
          inputWrapper: "border-1",
          input: "!text-white",
        }}
        className="min-w-[300px]"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        size="lg"
        endContent={
          <Button size="sm" className="mr-[-15px]">
            <SendIcon />
          </Button>
        }
      />
      <Divider className="mb-5" />
      <div className="border-1 rounded-[1rem] overflow-hidden">
        {link ? (
          <YouTube videoId="" opts={opts} onReady={onPlayerReady} />
        ) : (
          <YoutubeIcon />
        )}
      </div>
    </>
  );
};

export default Timestamp;
