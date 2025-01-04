<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Execute in develop

  1. Clone the repository
  2. Execute
  ```
  yanr install
  ```
  3. Have Nest Cli installed
  ```
  npm i -g @nestjs/cli
  ```
  4. Start the database
  ```
  docker-compose up -d
  ```
  5. Clone the file ```.env.template``` and rename the copy to ```.env```

  6. Fill the environment variables into ```.env```

  7. Execute the application 
  ```
  yarn start:dev
  ```

  5. Load seed data on database
  ```
  http://localhost:3000/seed
  ```
  ## Used Stack
    * MongoDB
    * NestJs 