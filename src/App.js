import {LocalStorageWrapper, persistCache} from "apollo3-cache-persist";
import React, {useEffect}                               from "react";
import {rootCache}                         from "./graphql/rootCache";
import { useRoutes }                       from "./routes";

export const App = () => {
  const routes = useRoutes();

  useEffect(() => {
    /* CACHE PERSIST TO SAVE STORE IN LOCAL STORAGE EVEN AFTER PAGE RELOAD

    const persistLoad = async () => {
      try {
        await persistCache({
          cache: rootCache,
          storage: new LocalStorageWrapper(window.localStorage),
        })
      } catch (error) {
        console.error('Error restoring Apollo cache', error);
      }
    }
    persistLoad()*/
  }, []);


  return (
    <>
      {routes}
    </>
  );
};
