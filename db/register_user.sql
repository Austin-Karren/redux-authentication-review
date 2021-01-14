insert into realtors (email, password)
values ($1, $2)
returning realtor_id, email;