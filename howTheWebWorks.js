//* How The Web Works

/*
    Browser renders a file according to defined rules
        - W3C (Word Wide Web Consortium) is the organization that sets these rules.

    HTTP protocol that governs transmission of data across the web
        - HyperText Transfer Protocol
        - "Request" sent from client to locate code as a file ("reply" from servers)
        - Created early 90s
    HTTP METHODS
        - client/server communication 
            * GET: get the data (no body)
            * POST: adds data (has body)
            * PUT: replaces data (has body)
            * PATCH: partial changes to existing resource (has body)
            * DELETE: deletes data (no body) 
    DNS (Domain Name Service)
        - Standardized method for knowing "where" website is
        - IP address to IP address
        - "resolves" web address to IP address
    HTTP requests require TCP connection, "handshake"

    *HTTP REQUEST/RESPONSE LIFE CYCLE
        *Endpoint (URI/L) - uniform response identifier/locator
        *Headers - metadata of info about request/response
        *Method - (Get, Post, Put, Delete) stipulates request rules
            - GET request can stipulate extra information
        *Body (sometimes) - holds our info in JSON format
        *Status Code - handles health of response
            (404 not found is a status code for something that doesn't exist)
            "ttl" = 'time to live' before connection is dropped
    OSI Model - How networks work
        - "Open Systems Interconnection"
        - 7 layers, including Network
            - Network is where web development happens
    HTTP Coding languages: CSS, HTML, JavaScript
        - need client (browser) to outline how file will render
        - e.g. it won't just run a webpage in Terminal

*HTML 
coding language of tags (elements) that are used to build web pages.
    
            */
