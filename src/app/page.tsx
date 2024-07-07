"use client";

import Divider from "@/common/Divider";
import Header from "@/components/Header";
import { IMAGES } from "@/icons/assets";
import { motion, transform, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-[1050px] m-auto mt-[100px] pb-[300px]">
        <Title />
        <Divider className="h-[120px]" />
        <Content />
        <Divider className="h-[150px]" />
        <Detail1 />
        <Divider className="h-[120px]" />
        <Detail2 />
        <Divider className="h-[120px]" />
        <Detail3 />
      </div>
    </main>
  );
}

const Title = () => {
  return (
    <div className="flex gap-10 w-full relative">
      <div className="z-10">
        <div className="border-l-3 border-yellow pl-2 mb-4 font-Cookie text-yellow">
          쉽고, 빠르고, 편하게
        </div>
        <h1 className="text-[40px] font-Cookie">
          간편하게 유튜브 <br />
          <span className="text-red relative font-Cookie">
            <span className="text-red">[</span>타임스탬프
            <span className="text-red">]</span>
          </span>
          를 만들어서, <br />
          시청자들이{" "}
          <span className="text-blue relative font-Cookie">
            <span className="text-blue">[</span>원하는 순간
            <span className="text-blue">]</span>
          </span>
          을 <br />
          바로 찾아보세요!
        </h1>
      </div>
      <div className="w-[600px] right-0 h-[283px] absolute rounded-md overflow-hidden z-0">
        <Image
          fill
          src={IMAGES.thumbnail}
          alt="thumbnail"
          className="object-contain"
        />
      </div>
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
        src={IMAGES.link}
        width={25}
      />
      <Card
        title={"저렴한 가격"}
        content={"합리적인 가격으로 타임스탬프를 만들어보세요."}
        bg={"bg-blue"}
        src={IMAGES.won}
        width={35}
      />
      <Card
        title={"검색 순위 향상"}
        content={"유튜브 설명란에 타임스탬프를 넣어 검색어 순위를 높여보세요."}
        bg={"bg-red"}
        src={IMAGES.first}
        width={15}
      />
    </div>
  );
};

const Card = ({
  title,
  content,
  bg,
  src,
  width,
}: {
  title: string;
  content: string;
  bg: string;
  src: string;
  width: number;
}) => {
  return (
    <div className={`w-full p-6 rounded-md ${bg}`}>
      <div className="mb-3 h-[35px]">
        <Image
          className="text-white"
          src={src}
          width={width}
          height={0}
          alt="link"
        />
      </div>
      <h4 className="text-[20px] font-bold">{title}</h4>{" "}
      <Divider className="h-4 border-0" />
      <p className="text-dark-1">{content}</p>
    </div>
  );
};

const Detail1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const text = "https://www.youtube.com/watch?v=abcdefg".split("");

  return (
    <motion.section
      ref={ref}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
        offscreen: {
          x: -50,
          opacity: 0,
        },
        onscreen: {
          x: 0,
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
            링크만 있으면 끝! 간편하게 타임스탬프 생성
          </h4>
          <div className="text-[20px] text-dark-2">
            복잡한 설정 없이 유튜브 URL만 입력하면 자동으로 타임스탬프를
            생성해드립니다. 몇 번의 클릭으로 시청자들이 원하는 부분을 쉽게 찾을
            수 있게 도와주세요!
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center">
          {isInView && (
            <div className="border-1 p-4 rounded-l-md flex">
              {text.map((el, i) => (
                <motion.div
                  className="text-dark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: i / 30,
                  }}
                  key={i}
                >
                  {el}
                </motion.div>
              ))}
            </div>
          )}
          <div className="bg-white h-[58px] flex items-center px-5 text-dark-3 rounded-r-md">
            생성하기
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Detail2 = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
        offscreen: {
          x: 50,
          opacity: 0,
        },
        onscreen: {
          x: 0,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
          opacity: 1,
        },
      }}
    >
      <div className="flex gap-4">
        <div className="flex flex-1 gap-4 justify-start items-center">
          <div className="text-[56px] text-orange pr-2">200원</div>
          <div className="text-[30px] text-grey-500 mt-2">/</div>
          <div className="text-[32px] text-grey-500 mt-2">10분</div>
        </div>
        <div className="flex-1 text-end">
          <h4 className="text-[24px] text-yellow mb-2">
            가격은 낮추고, 효율은 높이고!
          </h4>
          <div className="text-[20px] text-dark-2">
            저렴한 가격에 AI 기반 타임스탬프 생성 서비스를 제공합니다. 경제적인
            비용으로 영상의 접근성과 시청 시간을 극대화하세요. 비용 부담 없이
            전문적인 퀄리티를 경험해보세요.
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Detail3 = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
        offscreen: {
          x: -50,
          opacity: 0,
        },
        onscreen: {
          x: 0,
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
            타임스탬프 하나로 조회수 UP, 순위 UP!
          </h4>
          <div className="text-[20px] text-dark-2">
            타임스탬프를 사용하면 시청자들이 원하는 콘텐츠를 빠르게 찾을 수 있어
            시청 시간이 증가합니다. 이는 유튜브 알고리즘에 긍정적인 영향을 미쳐
            채널의 순위 상승으로 이어집니다. 시청자 만족도와 채널 성장을 동시에
            잡으세요!
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center"></div>
      </div>
    </motion.section>
  );
};
