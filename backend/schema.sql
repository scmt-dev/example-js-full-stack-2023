create table users(
    id int not null auto_increment primary key,
    fname varchar(255) not null,
    lname varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    avatar varchar(255)  null
);

insert into users(fname, lname, email, password, avatar) values('John', 'Doe', 'johndoe@email.com', '123456', 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50');

create table posts(
    id int not null auto_increment primary key,
    body text not null,
    user_id int not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    foreign key(user_id) references users(id)
);
