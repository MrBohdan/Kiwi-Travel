CREATE TABLE users(
    id UUID NOT NULL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    username VARCHAR NOT NULL,
    password VARCHAR(100) NOT NULL
);
