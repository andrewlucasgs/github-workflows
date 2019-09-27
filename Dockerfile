FROM node:8

ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Install dependencies
COPY package*.json ./
RUN npm install && npm cache clean --force

# For production 
# RUN npm install --production && npm cache clean --force


# Copy project files
COPY . .

# Expose running port
EXPOSE 3000

RUN chown -R node:node ${APP_DIR}

USER node
