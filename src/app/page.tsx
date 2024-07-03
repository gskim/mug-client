import Divider from "@/common/Divider";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-[1050px] m-auto mt-[60px]">
        <Title />
        <Divider className="h-[60px] border-0" />
        <Content />
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
          <div className="border-[10px] absolute bottom-0 w-[175px] opacity-40" />
          타임스탬프
        </span>
        를 만들어서, <br />
        시청자들이{" "}
        <span className="text-blue relative font-Cookie">
          <div className="border-[10px] absolute bottom-0 left-[0px] w-[180px] opacity-40" />
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
