import Divider from "@/common/Divider";

const Footer = () => {
  return (
    <div className="bg-grey-100">
      <div className="max-w-[1050px] m-auto py-10 text-white">
        <div className="text-[18px] mb-8 font-bold">MUG-SPACE</div>
        <div className="flex text-dark-1 gap-3">
          <div>머그스페이스</div>
          <div>|</div>
          <div>김기선</div>
        </div>
        <Divider className="mb-1" />
        <div className="flex text-dark-1 gap-3">
          <div>경기도 안양시 동안구 갈산로 15</div>
          <div>|</div>
          <div>전화번호: 010-9688-2866</div>
        </div>
        <Divider className="mb-1" />
        <div className="flex text-dark-1 gap-3">
          <div>사업자등록번호: 546-69-00463</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
