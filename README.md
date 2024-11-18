![Code Pop logo](https://github.com/owu-uy-community/codepop-2025/blob/main/public/logo.png?raw=true)

# CODE Pop 2025

The official website for the CODE Pop 2025.

# Dockerize

## 1 Create the container manually

Navigate to the root project folder and execute the following commands:

1. Create the images:

```bash
docker build -t code-pop-img .
```

2. Run a container:

```bash
docker -d \
 -it \
 -p 5173:5173 \
 --rm \
 --name \
 code-pop \
 code-pop-img
```

## 2 Using docker-compose

To run the container automatically, navigate to the root project and execute the following command:

```bash
docker-compose up -d
```

# Run the application

Open a browser and navigate to

```bash
http://localhost:5173
```
