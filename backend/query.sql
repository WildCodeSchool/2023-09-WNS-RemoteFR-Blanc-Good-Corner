DROP TABLE IF EXISTS ad;
CREATE TABLE ad 
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title VARCHAR(100) NOT NULL,
	description TEXT,
	owner VARCHAR(100) NOT NULL,
	price INT,
  picture VARCHAR(100),
  location VARCHAR(100),
	createdAt DATE
);

INSERT INTO ad (title, owner, price) VALUES ('Bike', 'john@gmail.com', 100), ('Car', 'amy@gmail.com', 300);

INSERT INTO ad(title, description, owner, price, picture, location, createdAt) VALUES 
('Bike1', 'Bike in good condition 1', 'owner1@example.com', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Paris', '2023-09-05T10:13:14.755Z'),
('Bike2', 'Bike in good condition 2', 'owner2@example.com', 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-02T10:13:14.755Z'),
('Bike3', 'Bike in good condition 3', 'owner3@example.com', 300, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Paris', '2023-09-03T10:13:14.755Z'),
('Bike4', 'Bike in good condition 4', 'owner4@example.com', 400, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-04T10:13:14.755Z'),
('Bike5', 'Bike in good condition 5', 'owner5@example.com', 500, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Bordeaux', '2023-09-05T10:13:14.755Z'),
('Bike6', 'Bike in good condition 6', 'owner6@example.com', 600, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Bordeaux', '2023-09-06T10:13:14.755Z'),
('Bike7', 'Bike in good condition 7', 'owner7@example.com', 700, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-07T10:13:14.755Z'),
('Bike9', 'Bike in good condition 9', 'owner9@example.com', 900, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-09T10:13:14.755Z'),
('Bike10', 'Bike in good condition 10', 'owner10@example.com', 1000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-050T10:13:14.755Z'),
('Bike11', 'Bike in good condition 11', 'owner1@e1xample.com', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Bordeaux', '2023-09-05T10:113:14.755Z'),
('Bike12', 'Bike in good condition 12', 'owner1@exa2mple.com', 100, 'h2ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Bordeaux', '2023-09-05T10:13:124.755Z'),
('Bike13', 'Bike in good condition 13', 'owner1@examp3le.com', 100, 'http3s://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-05T10:13:14.7535Z'),
('Bike14', 'Bike in good condition 14', '4owner1@example4.com', 100, 'https:/4/encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-05T10:13:14.755Z'),
('Bike15', 'Bike in good condition 15', 'o5wner1@example.c5om', 100, 'https://en5crypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Bordeaux', '2023-09-05T10:13:14.755Z'),
('Bike16', 'Bike in good condition 16', 'ow6ner1@example.com6', 100, 'https://encry6pted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Paris', '2023-09-05T10:13:14.755Z'),
('Bike17', 'Bike in good condition 17', 'own7er1@example.com',100, 'https://encrypte7d-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-05T10:13:14.755Z'),
('Bike18', 'Bike in good condition 18', 'owne8r1@example.com', 1800, 'https://encrypted-t8bn0.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-05T10:13:14.755Z'),
('Bike19', 'Bike in good condition 19', 'owner91@example.com', 1009, 'https://encrypted-tbn09.gstatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Bordeaux', '2023-09-05T10:13:14.755Z'),
('Bike20', 'Bike in good condition 20', 'owner20@example.com', 1008,  'https://encrypted-tbn0.g20tatic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-05T10:13:14.755Z'),
('Bike21', 'Bike in good condition 21', 'owner121example.com', 100, 'ttps://encrypted-tbn0.gsta21ic.com/images?q=tbn:ANd9GcT7I_MAYoylF7_1RRDn93BIbUNNDiis5JoTDA&usqp=CAU', 'Lyon', '2023-09-05T10:13:14.755Z21');

SELECT * FROM ad;

SELECT * FROM ad WHERE location = 'Bordeaux';

DELETE FROM ad WHERE price < 400;

UPDATE ad SET price = 0 WHERE STRFTIME('%d/%m/%Y', createdAt) = '04/09/2023';

SELECT STRFTIME('%d/%m/%Y', createdAt) FROM ad;

SELECT AVG(price) FROM ad WHERE location = 'Lyon';

SELECT AVG(price) AS moyenne, location 
FROM ad 
GROUP BY location
HAVING moyenne >= 500;