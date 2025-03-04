# JMad

This repo is created following https://top.gal/ template. You can check there for more info.

If you don't want to install anything locally and prefer to use Docker:

- Build the docker image:
```shell
docker build -t jmad .
```

- Create the directory for the Deno cache:
```shell
mkdir deno-cache
```

- Start in CMS mode to edit the content and watch the changes:
```shell
docker run --rm -it -v $(pwd):/app -v ./deno-cache:/home/ubuntu/.cache/deno -p 3000:3000 jmad task cms
```

Now you can browse http://localhost:3000/admin to enter the CMS and http://localhost:3000 to watch the website.

- To build the web that you will deploy, run:
```shell
docker run --rm -it -v $(pwd):/app -v ./deno-cache:/home/ubuntu/.cache/deno jmad task build --location=https://jmad.madridjug.es/
```
The web will be available in the directory `_site`.
