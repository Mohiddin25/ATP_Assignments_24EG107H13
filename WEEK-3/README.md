1. Generate package.json

2. create express server

3. Install mongoose and connect to MongoDB server

4. Build USER REST API
    -Create a user
    -Read all users
    -Read a user by ID
    -Update by id
    -delete by id

5. Create schema and model of the Resource(User)

6. Define user api and define routes

### User authentication(Login)
Submit credentials and get the token

    -Public routes (by anyone)
    -Protected routes (by authenticated users only)

XSS
csrf

-To access cookie property of request object we need cookie parser middleware.Otherwise req.cookie is undefined 