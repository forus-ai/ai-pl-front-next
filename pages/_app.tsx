import React from 'react';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'styles/styles.css';
import { useRootContext, withRootContext } from 'context/root';
import { ERROR_MESSAGE } from 'constants/error-message';
import { withChakraProvider } from 'styles/provider';

declare global {
  interface Window {
    ChannelIO: any;
  }
}

// Create a client

function MyApp({ Component, pageProps }: AppProps) {
  const {
    handler: { openToast },
  } = useRootContext();
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            onError: (error) => {
              const { status } = error as any;
              const errorMessage =
                ERROR_MESSAGE.STATUS_CODE[
                  status as keyof typeof ERROR_MESSAGE.STATUS_CODE
                ] || '알수없는 오류입니다.';
              openToast({ status: 'error', description: errorMessage });
            },
          },
        },
      }),
  );

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default withChakraProvider(withRootContext(MyApp));
