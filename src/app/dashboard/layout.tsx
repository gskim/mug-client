"use client";

import Divider from "@/common/Divider";
import { LayoutTransition } from "@/components/Transition";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();

  return (
    <div className="flex">
      <div className="min-w-[300px] h-[100vh] pl-20 pt-[200px] sticky top-0">
        <h4 className="text-[22px]">현재 포인트: 0</h4>
        <Divider isBorder className="border-yellow border-2 my-5" />
        <div className="flex flex-col gap-8">
          <Link href={"/dashboard/timestamp"}>
            <h3 className="text-[20px] font-semibold cursor-pointer">
              <span
                className={
                  path?.indexOf("timestamp") !== -1 ? "text-primary-400" : ""
                }
              >
                타임스탬프 생성
              </span>
            </h3>
          </Link>
          <Link href={"/dashboard/payment"}>
            <h3 className="text-[20px] font-semibold cursor-pointer">
              <span
                className={
                  path?.indexOf("payment") !== -1 ? "text-primary-400" : ""
                }
              >
                결제내역
              </span>
            </h3>
          </Link>
        </div>
      </div>
      <LayoutTransition>{children}</LayoutTransition>
    </div>
  );
};

export default DashboardLayout;
