### To Run React Program

`npm start`

### To Install React in A Blank Folder

`npx create-react-app "directory"`

### To Install React in a Preexisting Folder

`npm install react react-dom`

### Installing Bootstrap 5 to React

```
npm install bootstrap
npm install jquery popper.js

```

<p>Add the following to the src/index.js:</p>

```
    import "bootstrap/dist/css/bootstrap.min.css"
    import $ from 'jquery';
    import Popper from 'popper.js';

```

### To Install Router Package for Route/Links

`npm install react-router-dom@5`

### Turning Markdown Emmet on VSC

<ol>
<li>CTRL + SHIFT + P</li>
<li>Click "User settings.json"</li>
<li>Add the following code:</li>

```
"emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "markdown": "html"
  },
  "emmet.excludeLanguages": [
],
"emmet.triggerExpansionOnTab": true,
```

</ol>

##### Installing Awesome Font Icons

```

npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-

```

```

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
     <FontAwesomeIcon icon={faEnvelope}/>

```
