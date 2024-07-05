"use client";

import Divider from "@/common/Divider";
import Header from "@/components/Header";
import { useScroll, useTransform, motion, transform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-[1050px] m-auto mt-[60px] pb-[300px]">
        <Title />
        <Divider className="h-[80px]" />
        <Content />
        <Divider className="h-[80px]" />
        <Detail />
      </div>
    </main>
  );
}

const Title = () => {
  return (
    <div>
      <div className="border-l-3 border-orange pl-2 text-dark-2 mb-4 font-Cookie">
        쉽고, 빠르고, 편하게
      </div>
      <h1 className="text-[40px] font-Cookie">
        간편하게 유튜브 <br />
        <span className="text-red relative font-Cookie">
          <div className="border-[10px] absolute bottom-0 w-[175px] opacity-40 z-1" />
          타임스탬프
        </span>
        를 만들어서, <br />
        시청자들이{" "}
        <span className="text-blue relative font-Cookie">
          <div className="border-[10px] absolute bottom-0 left-[0px] w-[180px] opacity-40 z-1" />
          원하는 순간
        </span>
        을 <br />
        바로 찾아보세요!
      </h1>
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex justify-between gap-5">
      <Card
        title={"간편한 생성"}
        content={"유튜브 링크로 간편하고 빠르게 생성이 가능합니다."}
        bg={"bg-grey-200"}
      />
      <Card
        title={"저렴한 가격"}
        content={"합리적인 가격으로 타임스탬프를 만들어보세요."}
        bg={"bg-green"}
      />
      <Card
        title={"검색 순위 향상"}
        content={"유튜브 설명란에 타임스탬프를 넣어 검색어 순위를 높여보세요."}
        bg={"bg-red"}
      />
    </div>
  );
};

const Card = ({
  title,
  content,
  bg,
}: {
  title: string;
  content: string;
  bg: string;
}) => {
  return (
    <div className={`w-full p-6 rounded-md ${bg}`}>
      <h4 className="text-[20px] font-bold">{title}</h4>{" "}
      <Divider className="h-4 border-0" />
      <p className="text-dark-1">{content}</p>
    </div>
  );
};

const Detail = () => {
  const y = transform([0, 100], [0, 0]);

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
        offscreen: {
          y: 100,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
          opacity: 1,
        },
      }}
    >
      <div className="flex gap-4">
        <div className="flex-1">
          <h4 className="text-[24px] text-yellow mb-2">
            동영상 주소로 간편하게 생성가능!
          </h4>
          <div className="text-[20px] text-dark-2">
            생성하고자 하는 유튜브 동영상의 주소(URL)을 붙여넣으면
            <br />
            간편하고 빠르게 타임스탬프를 생성하실 수 있습니다.
          </div>
        </div>
        <div className="flex-1 border-1"></div>
      </div>
    </motion.section>
  );
};
