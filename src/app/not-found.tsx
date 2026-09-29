import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="pb-16">
      <PageHeader title="Page not found">That page doesn&apos;t exist or has moved.</PageHeader>
      <Link href="/" className={cn(buttonVariants({ size: "lg" }), "mt-8")}>
        Back to home
      </Link>
    </div>
  );
}
