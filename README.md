### Demo : https://pokedex-sutthikiat.netlify.app

### 1. Base project (includes iPad layout screen, so cool!!)

### 2. Service API

- You can run service api by `yarn run api`
- The endpoint to get Pokémon list is `[GET]http://localhost:3030/api/cards`
- query
  - limit: default 20 item/
  - name: search monster by name
  - type: search monster by type
  - example: http://localhost:3030/api/cards?limit=30&name=picha&type=normal

### 3. How to calculate `HP level`, `Strength level`, `Weakness level` and `Happiness level`.

- HP level calculation
  - maximum is 100. if value is higher than 100 set it to 100, otherwise 0.
- Strength level calculation
  - use `attacks` length to multiply by 50, maximum is 100. e.g. if value is 1 set it to 50, 2 set it to 100, otherwise 0.
- Weakness level calculation
  - use `weaknesses` length multiply by 100, maximum is 100. e.g. if value is 1 set it to 100, otherwise 0.
- Damage calculation
  - use `damage` value without symbol of all attacks skill. e.g. 50+ set it to 50, 20\* set it to 20, otherwise 0.
- Happiness level calculation
  - ((HP / 10) + (Damage /10 ) + 10 - (Weakness)) / 5

### 4. Interactive MockUp (as a .gif file)

![Pokédex MockUp](screenshot/exam-crop.gif)
