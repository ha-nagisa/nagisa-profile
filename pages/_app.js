import "../styles/globals.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faBorderAll, faList, faSortNumericDown, faSortNumericUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp, faArrowUp);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "highlight.js/styles/hybrid.css";
import { FormspreeProvider } from "@formspree/react";

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1703813663527272168">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp;
