FROM mhart/alpine-node:12

WORKDIR /src
ADD . .

RUN apk add --no-cache make gcc g++ python
RUN npm install

EXPOSE 8080
CMD ["node", "index.js"]