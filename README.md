# CartLift E-commerce API

CartLift is a production-style e-commerce backend API built with Node.js and Express.  
This project is being developed as a DevOps portfolio project with Docker, GitHub Actions, Terraform, and AWS deployment.

## Features
- Health check endpoint
- Product listing endpoint
- Single product lookup endpoint
- PostgreSQL integration

## Endpoints
- GET /health
- GET /products
- GET /products/:id
- POST /products

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Docker
- GitHub Actions
- Terraform
- AWS EC2

## Run locally
```bash
npm install
npm start

## Run with Docker compose
```bash
docker compose up --build

## Environment Variables 
Create a .env file using .env.example