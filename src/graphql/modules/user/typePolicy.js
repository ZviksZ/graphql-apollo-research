import {postsStateVar} from "../posts/variables";
import {themeVar}      from "./variables";

export const userQueryTypePolicy = {
   userTheme: {
      read() {
         return themeVar();
      }
   },
}

