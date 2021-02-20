<h2 align="center">XXXXXXXXXXXXXX - API Guide</h2>

### :bookmark_tabs: Content Index

- [Setup](#zap-setup)

- [Commands](#zap-commands)

- [Technologies](#zap-technologies)

:house: [Return to Main Folder](https://github.com/lipex360x/XXXXXXXXXXXXXXXXXXXXXXXX)

---

### :zap: Setup

Clone the main repository, then enter this folder and run `npm i` or `yarn` to install all dependencies.

After that, move a copy of `.env.example` to `.env` and `ormconfig.js.example` to `ormconfig.js` and enter all the data.

📌 Tips: If you decide to use Postgres with docker, this project provides a docker-compose file.

Execute the migrations with `npm run orm:run` or `yarn orm:run`

After, execute the seeds with `npm run seed:run` or `yarn seed:run`

Then, execute the project with `npm run dev:server` or `yarn dev:server`

Check more executable scripts in the `package.json` file and more details of this project in the front-end folder

📌 Tips: for easier navigation by gihub, consider installing the [Octotree](https://chrome.google.com/webstore/detail/octotree-github-code-tree/bkhaagjahfmjljalopjnoealnfndnagc) Plugin

---

### :zap: Commands

* Execute Development and Production Build

- `dev:server`: runs your application on `localhost:3333`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code

* TypeORM CLI 

- `orm`: execute default TypeORM CLI
- `orm:create MIGRATION_NAME`: create one migration
- `orm:run`: execute migrations
- `orm:revert`: revert migration (one to one)
- `orm:show`: displays migrations performed
- `seed:run`: execute seeds

* Jest Test CLI

- `test`: execute all tests
- `test:v TEST_PATH`: execute one specific Test
- `test:c`: Clear Test Cache

---

### :zap: Technologies

```json
  Express
  Typescript
  TypeORM
  TDD with JEST
  DDD with SOLID
  Validation with Celebrate
```

:point_up_2: [Go to Content Index](#bookmark_tabs-content-index)

---
