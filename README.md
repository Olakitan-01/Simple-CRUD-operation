A simple crud operation with secure user authentication.

🚀 FeaturesUser Authentication: 

Secure Sign-up and Login using JWT (JSON Web Tokens).

Password Security: Industry-standard password hashing using bcryptjs.

CRUD Operations: Full ability to Create, Read, Update, and Delete inventory items.

Database: Cloud-based storage using MongoDB Atlas.

API Testing: Fully compatible with Postman or Insomnia.
🛠️ Tech StackRuntime: Node.jsFramework: Express.jsDatabase: MongoDB (via Mongoose)Security: JWT & Bcrypt
⚙️ Setup Instructions
    1. Clone the repositoryBashgit clone <your-repository-link>
    cd Inventory
    2. Install dependencies Bash (npm install)
    4. Run the applicationBash# For development (using nodemon)
    npm run dev

# For production
npm start
📡 API EndpointsAuthenticationMethodEndpointDescription
    POST/api/auth/register (Register a new user)

    POST/api/auth/login (Login and receive a JWTInventory (Protected Routes))

MethodEndpointDescription
    GET/api/products (all items)

    POST/api/product (a new item)

    PUT/api/product/:id (Update an item)

    DELETE/api/products/:id (Remove an item)