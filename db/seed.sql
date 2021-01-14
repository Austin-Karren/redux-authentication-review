create table if not exists realtors (
    realtor_id serial primary key,
    email varchar(150),
    password varchar(250)
);

create table if not exists houses (
    house_id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
);

-- postgres://qmwiyaeoyrnoij:bdbdda05b57fdac4742cc36a03602e24be02d95066cfc4926521731fd5a4947a@ec2-18-206-84-251.compute-1.amazonaws.com:5432/dds4i8lkqencqi