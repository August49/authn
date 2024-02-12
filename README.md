# Web authentication APIs

This server-side application implements the basics of different web authentication mechanisms including web authn, Federated Login(Google-based), and classic password auth.

## Features

- User registration and login
- Google login
- WebAuthn registration and login


## Getting Started

1. Clone the repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Create a `.env` file in the root directory and set the following environment variables:
    - `RP_ID`: The Relying Party Identifier (default is "localhost").
    - `PROTOCOL`: The protocol used (default is "http").
    - `PORT`: The port the server will listen on (default is 5050).
4. Run `npm start` to start the server.

## Endpoints

- `POST /auth/login`: Login with email and password.
- `POST /auth/login-google`: Login with Google.
- `POST /auth/register`: Register a new user.
- `POST /auth/auth-options`: Get authentication options for a user.
- `POST /auth/webauth-registration-options`: Get WebAuthn registration options for a user.
- `POST /auth/webauth-registration-verification`: Verify WebAuthn registration.
- `POST /auth/webauth-login-options`: Get WebAuthn login options for a user.
- `POST /auth/webauth-login-verification`: Verify WebAuthn login.
