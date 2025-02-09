# BACK END

```bash
docker build -t backend-dev/platform-elarning:1.0.0 -f Dockerfile.dev .
docker run -d -p 3000:3000 backend-dev/platform-elearning:1.0.0
```