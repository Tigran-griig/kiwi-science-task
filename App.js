import React, {useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyPage from "./pages";
import Context from "./context";
export default function App() {
    const navigationRef = useRef();
    const routeNameRef = useRef();

  console.log(routeNameRef.current,4584558754)
  return (
<>
    <Context>
      <NavigationContainer
          ref={navigationRef}
          onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
          onStateChange={() => {
              const previousRouteName = routeNameRef.current;
              const currentRouteName = navigationRef.current.getCurrentRoute().name
              if (previousRouteName !== currentRouteName) {
                  console.log(`The route changed to ${currentRouteName}`);
              }
              routeNameRef.current = currentRouteName;
          }}
      >
            <MyPage />
      </NavigationContainer>
    </Context>
</>
  );
}
