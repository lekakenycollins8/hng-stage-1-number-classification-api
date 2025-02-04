# Number Classification API

The Number Classification API is a Node.js-based service that provides interesting mathematical properties and fun facts about a given number. It classifies numbers based on properties such as prime, perfect, Armstrong, parity (even/odd), and digit sum, along with a fun fact fetched from the Numbers API.

## Features

- **Number Classification**: Determines if a number is prime, perfect, or an Armstrong number.
- **Parity Check**: Identifies if the number is even or odd.
- **Digit Sum Calculation**: Computes the sum of the digits of the number.
- **Fun Fact Integration**: Fetches a fun fact about the number from the Numbers API.
- **Error Handling**: Provides appropriate error responses for invalid inputs.
- **CORS Support**: Enables cross-origin requests for seamless integration with front-end applications.

## API Endpoint

### GET /api/classify-number

#### Request

**Query Parameter:**

- `number`: The number to classify (e.g., 371).

#### Example Request

```http
GET /api/classify-number?number=371
```

#### Response (200 OK)

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### Response (400 Bad Request)

```json
{
    "number": "alphabet",
    "error": true
}
```

## Technology Stack

- **Backend**: Node.js with Express.js
- **External API**: Numbers API for fun facts

### Dependencies

- `express`: For creating the API server
- `axios`: For making HTTP requests to the Numbers API
- `cors`: For enabling Cross-Origin Resource Sharing (CORS)

## Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Steps

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/lekakenycollins8/hng-stage-1-number-classification-api.git
    cd hng-stage-1-number-classification-api
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Server:**

    ```bash
    npm start
    ```

    The server will start on [http://localhost:5000](http://localhost:5000).

4. **Test the API:**

    Use tools like Postman or curl to test the API:

    ```bash
    curl "http://localhost:5000/api/classify-number?number=371"
    ```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch for your feature or bugfix:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Commit your changes:**

    ```bash
    git commit -m "Add your message here"
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Open a pull request and describe your changes.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Numbers API for providing fun facts about numbers.
- Express.js for simplifying API development.
- Axios for making HTTP requests.

## Deployment
This API is deployed on [https://hng-stage-1-number-classification-api.onrender.com]