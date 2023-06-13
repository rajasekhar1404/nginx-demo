# NGINX configuration

### Installation
- For windows download the latest stable version from here: http://nginx.org/en/download.html
- For linux: sudo apt install nginx
- Go to nginx directory and execute nginx to start the nginx server.
- If everthing goes well you can see the nginx home page at localhost:80

### Commands
- `nginx` : start the server
- `nginx -v` : check the version
- `nginx -s -stop` : stop the server
- `nginx -s quit` : quit the server
- `nginx -s reload` : reload the server

### Keywords
_exmple:_
```
server {
    listen 8080;
}
```
- `Directive` : a pair of key values is directive (listen 8080;)
- `Contact` : a block of Directives is a contact (server {...})

### Configuration
- Open the nginx.conf file from the conf directory.
- Create contacts http and events.
- In the http contact create server contact, which will contain the main configuration details.
- Provide the port number where your application has to listen. `listen 8080;`
- Create a location block for each route with directive of your project root.
```
        location / {
            root c:/User/Projects/tutorial;
        }
```
- In the above example, It will open the index.html file available in tutorial directory.
- If you don't have a index.html file in your directory, you can use try_files.
```
        location /signup {
            root c:/User/Projects/tutorial;
            try_files /signup/signup.html /index.html =404;
        }
```
- If you want to give an alias for a endpoint
```
        location /signin {
            alias c:/User/Projects/tutorial/login;
        }
```
- To setup the load balancing create a contact in http as upstream following the name of it including all your servers.
```
    upstream backend {
        server 127.0.0.1:1111;
        server 127.0.0.1:2222;
        server 127.0.0.1:3333;
        server 127.0.0.1:4444;
    }
```
- Once the servers are provided, create the location contacts with proxy_pass
```
        location / {
            proxy_pass http://backend
        }
```