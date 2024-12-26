import Link from "next/link";
import { Zap } from "lucide-react";

export default function UpgradeButton() {
  const CHECKOUT_URL =
    "https://inuldev.lemonsqueezy.com/buy/e76f5ef0-2b41-4420-8758-bd0163413cb4";

  return (
    <Link
      href={CHECKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}
