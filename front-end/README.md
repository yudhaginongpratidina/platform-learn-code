# FRONT END

```bash
docker build -t react-dev/platform-elarning:1.0.0 -f Dockerfile.dev .
docker run -d -p 3000:3000 react-dev/platform-elearning:1.0.0
```

```bash
docker build -t react-stg/platform-elarning:1.0.0 -f Dockerfile.stg .
docker run -d -p 3001:3001 react-stg/platform-elearning:1.0.0
```