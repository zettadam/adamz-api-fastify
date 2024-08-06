FROM node:22.5.1-alpine3.19 AS development

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app

# default to port 3000 for node, and 9229 and 9230 (tests) for debug
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT 9229 9230

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci

# build the application
CMD ["npm", "run build"]

# copy in our source code last, as it changes the most
COPY . /app

# if you want to use npm start instead, then use `docker run --init in production`
# so that signals are passed properly. Note the code in index.js is needed to catch Docker signals
# using node here is still more graceful stopping then npm with --init afaik
# I still can't come up with a good production way to run with npm and graceful shutdown
CMD [ "node", "dist/index.js" ]
