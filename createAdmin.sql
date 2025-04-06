-- Active: 1740380082978@@127.0.0.1@5432@products_with_categories@public

CREATE TYPE UserRole as ENUM ('ADMIN');

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(13) NOT NULL UNIQUE,
    role UserRole NOT NULL,
    status VARCHAR(20) DEFAULT 'ACTIVE',
    avatar VARCHAR(255) NOT NULL,
    regionId UUID
)

INSERT INTO users (fullname, email, password, phone, role, status, avatar, regionid) VALUES ('Abdulboriy Mahamatjanov', 'abdulborimahammadjanov86@gmail.com', 'Admin12345', '+998507525150', 'ADMIN', 'ACTIVE', 'http://res.cloudinary.com/dnle8xg73/image/upload/v1743929444/ysdk5yllutfbzdkfhrd1.jpg', '15e4713c-06cd-4a82-a78d-b6eb180dfedd')