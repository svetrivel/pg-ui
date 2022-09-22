FROM node

WORKDIR /clientApp

COPY . /clientApp/

CMD ["npm" , "start"]