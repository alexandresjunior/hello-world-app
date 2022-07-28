# Hello, World!
Create a simple web app project using Java Spring Boot and React JS.

## Requirements
* Java JDK +11
* Node JS v14+
* Visual Studio Code (or any other IDE of your preference)
* Postman (optional)

## Architecture Overview
* This `hello-world-app` project contains two modules: a **backend** service created using Java Spring Boot service and a **frontend** module using React JS framework. 
* The integration between those two modules is via **API REST**, as illustrated below.

[IMAGE]

## Create Spring Boot service
* Go to [Spring Initializr](https://start.spring.io/) and create a **Maven** project and fill in the fields as shown in the image below. Make sure to select the required dependencies as well.

[IMAGE #2]

* Click on `Generate` button and a `.zip` file containing your Spring Boot project will be downloaded.
* Extract the `hello-world` folder inside it and add it to a new folder called `hello-world-app`.
* Define the database connection attributes in the `application.properties` file, as the following listing shows:
```
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/database-name
spring.datasource.username=username
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
#spring.jpa.show-sql: true
```
* Make sure to set up the `database-name`, `username` and `password` fields according to your work environment.
* For further details about those properties and how to define **entities** in your database, check [this link](https://spring.io/guides/gs/accessing-data-mysql/).
* Then, include a `/hello` endpoint under your application class and the `@RestController` annotation to make it available over the web. For more details, check [this link](https://spring.io/quickstart). The `HelloWorldApplication` class should look like this:

```

package com.hello.world;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
              
@SpringBootApplication
@RestController
public class HelloWorldApplication {                
                  
    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }
    
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

}            
```
* Also include `@CrossOrigin` annotation to make sure frontend module will be able to call your backend service. For more details about **CORS Policy**, check [this link](https://cloud.google.com/apigee/docs/api-platform/reference/policies/cors-policy).
* Start your application by running `./mvnw spring-boot:run` (for MacOS/Linux users) or `mvnw spring-boot:run` (for Windows users) in your terminal under the `/hello-world` directory.
* In your browser or via Postman, make a request to `http://localhost:8080/hello` and you should get a **Hello, World!** message. If you include the **name** parameter in your URL, as `http://localhost:8080/hello?name=YourName`, you should get **Hello, YourName!** message.

## Create React JS module
* Under `hello-world-app` folder, run `npx create-react-app hello-world-js` to create the React JS module.
* Add `axios` dependency in the `package.json` file and run `npm install` to install it. This is be used to define the **API integration** with the backend service.
* Define the initial states for `name` and `greetings` properties using `useState` hook. For more details about it, check [this link](https://reactjs.org/docs/hooks-state.html).
* Via **HTML** tags, add an **input** field for the `name` attribute and a **button** that will call the `handleName` function when clicked. Custom styles for those fields can be applied using **CSS**.
* Start your React JS application by running `npm start` under `hello-world-js` directory. Make sure that **both modules are running** so they can communicate with each other.

## Demonstation
[IMAGE #3]