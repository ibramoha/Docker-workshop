FROM mhart/alpine-node:8
WORKDIR  /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]