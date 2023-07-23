import { SWRConfig } from "swr";
import "../global.css";
import "../body.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      <SWRConfig
        value={{
          fetcher: (url: string) =>
            fetch(url).then((response) => response.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </RecoilRoot>
  );
}
