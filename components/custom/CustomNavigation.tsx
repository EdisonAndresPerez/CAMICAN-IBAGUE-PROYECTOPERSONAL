"use client";

import { Shield } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import CustomPhoneButton from "./CustomPhoneButton";

const CustomNavigation = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
      <div className="flex items-center gap-2">
        <Shield className="h-8 w-8 text-cyan-400" />
        <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
      </div>
      <div className="flex items-center gap-4">
        <CustomPhoneButton />
      </div>
    </nav>
  );
};

export default CustomNavigation;
