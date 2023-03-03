```mermaid
sequenceDiagram
    participant browser
    participant server

    note right of browser: user enters text and hits submit
    
    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: receives spa.html
    deactivate server

    note right of browser: browser processes html and sees  link tag for css

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: main.css

    deactivate server
    
    note right of browser: browser processes html and sees script tag 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: spa.js
    deactivate server

    note right of browser: browser processes js file and sees code for xhttp request of data.json 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: data.json
    deactivate server
    
    ```
