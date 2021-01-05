Frederik Elbo Thorup

**Team finder app:**

repo: https://github.com/Frederiket1912/FullstackJS/tree/master/Periode3/team_finder_app

manifest: https://exp.host/@frederiket/team_finder_app/index.exp?sdkVersion=39.0.0


deployed: https://expo.io/@frederiket/team_finder_app  
(kan logge ind med username: t1 og password: secret, sæt distance til forholdsvis meget hvis man vil se de to andre teams, de er i nordsjælland)

**Backend:**

repo: https://github.com/Frederiket1912/gameapi

deployed: https://4semester.frederiket.dk/

**Læringsmål**  
  1) Explain Pros & Cons with React Native + Expo used to implement a Mobile App for Android and IOS, compared to using the Native Tools/languages for the two platforms.  
    **Pros:**
   - Faster to Build  
   - One Framework, Multiple Platforms  
   - Large developer community  
   **Cons:**  
   - Still some compatibility and debugging issues (it's still a new technology)  
   - Lack of Some Custom Modules (although unlikely, you might still end up with multiple code bases for differenct platforms if native doesn't have the module you need, you have to make it from scratch for each platform)  
   
  2) What is meant by the React Native Paradigm "Learn once, write anywhere" compared to for example the original (now dead) idea with Java "Write Once, run everywhere".  
  - "While any developer would love it if their code just ran anywhere, this is a difficult problem to solve. It is somewhat of a workaround solution to the actual underlying    issue: Most developers want to be able to carry over their skill sets from environment to environment, and don’t want to learn everything from scratch, just to target another platform.
While still a difficult problem — and perhaps not as ideal as simply having one code base run anywhere — this is a tractable problem to solve. With React Native, the new paradigm is “learn once, write anywhere.” With this approach, an experienced web React developer can get up and running, and write Android or iOS apps at a much faster pace.  
Currently, there is a little to no code sharing possible between React apps on the web, Android, and iOS React apps."

  3) In React Native, which parts of your code gets compiled to Native Code (Widgets) and which parts do NOT?
  - "In react native app after compiled - all the UI(Buttons,Text...) going to get compiled to native code(Java or Objective C) and the JavaScript part is going to stay JavaScript."  
  4) Explain the basic building block in a React Native Application and the difference(s) between a React Application and a React Native App.
  - React Native is built on Native components, instead of HTML elements
  - Reactjs can be described as a base derivative of React DOM, for the web platform while React Native is a base derivative in itself, which means that the syntax and workflow remain the same, but components alter.  
  - Reactjs, eventually, is a JavaScript library, which enables the programmer to create an engaging and high performing UI Layer while React Native is an entire framework for building cross-platform apps, be it web, iOS or Android.   
  - In Reactjs, virtual DOM is used to render browser code in Reactjs while in React Native, native APIs are used to render components in mobile.  
  - The apps developed with Reactjs renders HTML in UI while React Native uses JSX for rendering UI, which is nothing but javascript.   
  - CSS is used for creating styling in Reactjs while a stylesheet is used for styling in React Native.  
  - In Reactjs, the animation is possible, using CSS, just like web development while in React Native, an animated API is used for inducing animation across different components of the React Native application.  
  - If the need is to build a high performing, dynamic, and responsive UI for web interfaces, then Reactjs is the best option while if the need is to give mobile apps a truly native feeling, then React Native is the best option.  
  5) Explain and demonstrate ways to handle User Input in a React Native Application
  - We can handle user input with the TextInput component 
  - See LoginInput.js in the team_finder_app for example  
  6) Explain and demonstrate how to handle state in a React Native Application  
  - In the TextInput component we pass a method to onChangeText to be run every time the text changes. The method we pass saves the text in the state and each change in the state causes the component to rerender and the inputfield is always updated to show what is saved in the state.  
  - See See LoginInput.js in the team_finder_app for example  
  7) Explain and demonstrate how to communicate with external servers, in a React Native Application  
  - We use fetch and useEffect to communicate with our backend server.
  - See App.js in team_finder_app for example.
  8) Explain and Demonstrate ways to debug a React Native Application  
  - Read error messages.
  - Use console.log().
  - Chrome DeBugger.
  9) Explain and demonstrate how to use Native Device Features in a React Native/Expo app. 
  - We use the native device feature MapView in our app which is used to show a map with markers on it, to show the location of the person using the app aswel as other nearby players.  
  10) Explain and demonstrate a React Native Client that uses geo-components (Location, MapView, etc.)
  - In the team_finder_app we use Location to get our current lat and lon when we open the app and we use markers to show our location on the MapView aswell as other nearby players location when we log in.
  11) Demonstrate both server and client-side, of the geo-related parts of your implementation of the ongoing semester case.  

