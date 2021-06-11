import "../styles/globals.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faBorderAll, faList, faSortNumericDown, faSortNumericUp } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp);

import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
