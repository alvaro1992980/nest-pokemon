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
  8. Load seed data on database
  ```
  http://localhost:3000/seed
  ```

  # Production Build
  1. Create the file ```.env.prod ```
  2. Fill the production environment variables
  3. Create the new image
  ```
  docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
  ```
  ## Used Stack
    * MongoDB
    * NestJs 