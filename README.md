## Welcome to my portfolio
- This page is made with React

### Develop environment
- View library : React
- Languages : Typescript, HTML, CSS
- State management : Zustand
- Bundler : Vite

### routes
- hash router was used for github page setting.
1. https://devmemory.github.io 
  - Main is 3d earth test with three js
  - You can search country. Then it will move to that country
  - You can set departure, transfer, destination. Then it'll move when destination is set
  - You can check the map location through leaflet

2. https://devmemory.github.io/#/question
  - This page is to check if our goal is matched or no. Or just routing to other page

3. https://devmemory.github.io/#/portfolio
  - This page is my cv. You can check if you want to hire me or no

4. https://devmemory.github.io/#/editor
  - This page is code editor like jsfiddle, condesandbox, etc

### React project folder structure
#### public
- assets : jsonData, font, icon, img

#### src
- components
- hooks
- locale
- model
- routes(view)
- service
- store
- utils

### library
- @babel/standalone : to conver react code to js
- @react-pdf/renderer : to generate pdf
- @react-three/fiber : three wrapper
- axios : to get date from specific url
- file-saver : to save pdf
- leaflet : map library
- prismjs : to highlight code editor
- three : 3d renderer
- zustand : state management