### JMad Project Development Guide

#### 🏗️ How to start the project locally with Docker

To work on the project without installing local dependencies like Deno or Lume, use Docker:

1. **Build the image**:
   ```bash
   docker build -t jmad .
   ```

2. **Create the Deno cache directory** (this avoids downloading all dependencies on every restart):
   ```bash
   mkdir -p deno-cache
   ```

3. **Development Mode / CMS** (with live reload):
   ```bash
   docker run --rm -it \
     -v $(pwd):/app \
     -v ./deno-cache:/home/ubuntu/.cache/deno \
     -p 3000:3000 \
     jmad task cms
   ```
   *   The site will be available at: [http://localhost:3000](http://localhost:3000)
   *   The CMS will be at: [http://localhost:3000/admin](http://localhost:3000/admin)

4. **Build the site for production**:
   ```bash
   docker run --rm -it \
     -v $(pwd):/app \
     -v ./deno-cache:/home/ubuntu/.cache/deno \
     jmad task build --location=https://jmad.madridjug.es/
   ```
   *   The generated site will be in the `_site/` directory.

#### 📝 Customization Notes (TOP Theme v0.4.1)

*   **Tickets**: If Markdown support is needed for ticket features, the file `_includes/blocks/tickets/tickets.vto` must be overwritten to add the `|> md` filter to text variables, as the original theme does not support it by default for all fields.
*   **YouTube Background Video**: The file `_includes/blocks/youtube/youtube.vto` allows placing a video as a background. It uses the `youtube` field for the video ID and supports a `mode` field (e.g., `background`) for autoplaying muted video. The `caption` field in this block already supports Markdown via the `|> md` filter.
