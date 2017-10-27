CREATE TABLE users VALUES(
    user_id serial primary key,
    user_name VARChAR 50,
    auth_id TEXT
);
CREATE TABLE lists VALUES(
    list_id serial primary key,
    user_id INTEGER REFERENCES users,
    title VARCHAR(50),
    description VARCHAR(130)
);