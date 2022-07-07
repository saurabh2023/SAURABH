
# BookMyShow 

API's used to get new user register and movies data within city.


## Steps to run project

1. git clone https://github.com/saurabh2023/SAURABH
2. After the repo gets clone successfully.
3. npm install(so the package.json gets install with all dependencies)
4. After successfully installing.
5. Run 'node index.js' 



## Deployment

To deploy this project on Heruko

```bash
1.Create Heroku account
2.Login in 
3.Follow steps given in below link :
https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app
```


## API Reference

Get movies list from database with city as parameter.

```http
https://quiet-springs-03208.herokuapp.com/bms/movies/get_movie/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `City` | `string` | To get list of movies in city|

Its just to check whether the user session is maintained after logging.
```http
  https://quiet-springs-03208.herokuapp.com/bms/users/check_session/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id to check user session |

New user registration

```http
https://quiet-springs-03208.herokuapp.com/bms/users/signup/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Name` | `string` | username |
| `MobileNo` | `string` | user mobileno |
| `email` | `string` | user email |
| `password` | `string` | user password |

Login used by only register user
```http
https://quiet-springs-03208.herokuapp.com/bms/users/login/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | user email |
| `password` | `string` | user password |

To push latest or upgrade time in database
```http
https://quiet-springs-03208.herokuapp.com/bms/movies/add_movie/
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | movie name |
| `rating` | `string` | ratings |
| `city` | `string` | city name |
| `showing` | `string` | list of theatre names |