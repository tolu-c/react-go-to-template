import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { queryConfig } from "~/lib/react-query";
import { Button } from "./components/ui/button";

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                There was an error!{" "}
                <Button onClick={() => resetErrorBoundary()}>Try again</Button>
                <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
              </div>
            )}
          >
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Suspense>
  );
};
