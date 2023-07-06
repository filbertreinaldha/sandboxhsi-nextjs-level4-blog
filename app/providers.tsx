"use client";

import LoadingSVG from "@/components/LoadingSVG";
import React, { ReactNode, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingSVG />}>{children}</Suspense>
    </QueryClientProvider>
  );
}
