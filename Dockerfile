FROM node:12
WORKDIR /app
COPY . .
EXPOSE 31184
RUN npm install
CMD ["npm", "start"]
