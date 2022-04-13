import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Head from "next/head";
import "../index.css";



function SiliconSlopesDashboard({ Component, pageProps }) {
 
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 900,
          },
        },
      })
  );

  return (
    <>
      <Head>
        <title>{Component.title}</title>
        <meta
          name="description"
          content={
            Component.description ||
            "Silicon Slopes is a 501(c)(3) nonprofit organization empowering Utah’s startup and tech community to learn, connect and serve."
          }
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
   
     
       
                <Component {...pageProps} />
      
       
       
    
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );

  //   return (
  //     <>
  //       <Head>
  //         <title>{Component.title}</title>
  //         <meta
  //           name="description"
  //           content={
  //             Component.description ||
  //             "Silicon Slopes is a 501(c)(3) nonprofit organization empowering Utah’s startup and tech community to learn, connect and serve."
  //           }
  //         />
  //       </Head>
  //       <QueryClientProvider client={queryClient}>
  //         <Hydrate state={pageProps.dehydratedState}>
  //           <Component {...pageProps} />
  //         </Hydrate>
  //         <ReactQueryDevtools />
  //       </QueryClientProvider>
  //     </>
  //   );
}

export default SiliconSlopesDashboard;
