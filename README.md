

Installs  concat fs-extra
````
npm install --save-dev concat fs-extra
````

Build
```` 
npm run-script build:elements
````

https://rneto.es/blog/introduccion-angular-elements-web-components/

```` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My calendar</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel='stylesheet' href='elements/0.0.0/my-calendar.css'>

    <script>
      function initCalendar() {
        // How to: select my-calendar
        const myCalendar1 = document.querySelector('#calendario1');

        // How to: bind a event
        myCalendar1.addEventListener('dateChanged', (event) => {
          console.log(event);
        });

         // How to: select my-calendar
         const myCalendar2 = document.querySelector('#calendario2');

        // How to: bind a event
        myCalendar2.addEventListener('dateChanged', (event) => {
            console.log(event);
        });

      }
    </script>
  </head>
  <body>
    <my-calendar date="2022-02-02" id="calendario1" >
      <span>My custom calendar content</span>
    </my-calendar>
    <br>
    <my-calendar date="2025-02-02" id="calendario2" dateChanged="alert('Esta es prueba');" >
        <span>Este es otro </span>
    </my-calendar>

    <script
      src="elements/0.0.0/my-calendar.js"
      defer onload="initCalendar();"
    ></script>
  </body>
</html>
````
