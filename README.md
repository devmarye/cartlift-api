# CartLift E-commerce API

CartLift is a production-style e-commerce backend API built with Node.js and Express.  
This project is being developed as a DevOps portfolio project with Docker, GitHub Actions, Terraform, and AWS deployment.

## Features
- Health check endpoint
- Product listing endpoint
- Single product lookup endpoint

## Endpoints
- GET /health
- GET /products
- GET /products/:id

## Run locally
```bash
npm install
npm start

## Run with Docker
```bash
docker build -t cartlift-api .
docker run -p 3000:3000 cartlift-api