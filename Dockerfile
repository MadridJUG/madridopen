FROM ubuntu:24.04

RUN apt update && \
    apt upgrade -y && \
    apt install -y curl unzip && \
    apt-get clean

USER 1000:1000

WORKDIR /app

ENV DENO_INSTALL="/home/ubuntu/.deno"

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV PATH="$DENO_INSTALL/bin:$PATH"

ENTRYPOINT ["/home/ubuntu/.deno/bin/deno"]
