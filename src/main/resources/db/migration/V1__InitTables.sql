/*
 1) version scripts e.g. V1__CREATE_USER.sql: are applied once to the database and are locked due to their checksum.
 2) version scripts e.g. R__CREATE_PERSON_VIEW.sql: to create a new version for a simple change like renaming a column
 in a view or updating the logic within a function or stored procedure.
*/
CREATE TABLE staff(
    id UUID NOT NULL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    username VARCHAR NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE post(
    post_Id UUID NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    staff_Id UUID NOT NULL
);