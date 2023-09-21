--DROP TABLE IF EXISTS ad;
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



INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('voiture','description 1','James',10000,'https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=826&t=st=1695202577~exp=1695203177~hmac=9084b56fdd56226b2b38f3c52f4a561d9d8c76f57a33ce4408e6c1bb58d147d4','Paris','2023-09-18');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('vélo vintage','description 2','Hugo',100,'https://img.freepik.com/premium-photo/orange-bicycle-with-word-bike-it_655090-80678.jpg?w=826','Bordeaux','2023-09-05');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('micro-onde','description 3','Paloma',110,'https://img.freepik.com/free-photo/retro-microwaves-kitchen_23-2150711866.jpg?t=st=1695203467~exp=1695207067~hmac=fee5bf7b930f8a9c6a02d44fea40129884f66231a5bf59caf739cbf392afb3d0&w=740','Lyon','2023-09-05');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('MacBook Air','description 4','Punani',700,'https://img.freepik.com/premium-photo/mockup-pc-laptop-screen-contain-illustration-light-color-pastel-landing-page-generative-ai_527096-24161.jpg?w=826','Lyon','2023-09-23');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('Gourde neuve','description 5','Moon',20,'https://img.freepik.com/free-photo/clean-water-bottle-healthy-sports-drink-generated-by-ai_188544-13719.jpg?t=st=1695203644~exp=1695207244~hmac=fa720b58ebeb7ded36793fb4341a845a5d258fad3d97d6dfaad6c670281639e2&w=1380','Paris','2023-09-02');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('bureau','description 6','Isabelle',80,'https://img.freepik.com/free-photo/wireless-mouse-wheel-scrolling-data-input-tool-generated-by-ai_188544-27098.jpg?t=st=1695203916~exp=1695207516~hmac=9c53cfd698fda225917eddbbcbbca6cc62ffc3cfa05202fbdf92e648bd3a29d2&w=1380','Paris','2023-09-03');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('souris','description 7','Marion',60,'https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=826&t=st=1695202577~exp=1695203177~hmac=9084b56fdd56226b2b38f3c52f4a561d9d8c76f57a33ce4408e6c1bb58d147d4','Bordeaux','2023-09-01');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('moto','description 8','Ambre',4000,'https://img.freepik.com/free-vector/illustration-motorcycle-red-color_1308-35859.jpg?w=1380&t=st=1695203375~exp=1695203975~hmac=b1b9d8873380830ec6eebf037c7b78afa485592910d99556509eb33107c00972','Paris','2023-09-18');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('lit','description 9','Louise',100,'https://img.freepik.com/free-photo/bed-bedroom-decorated-with-brazilian-folklore-design_23-2150794095.jpg?t=st=1695203990~exp=1695207590~hmac=4c0775f97226116113f741e6c0bf40e1bf3ee315aabe0e4adfba46b98baf04a0&w=1380','Lyon','2023-09-18');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('salon de jardin','description 10','Johanne',200,'https://img.freepik.com/free-photo/rustic-patio-furniture-house-deck-with-vegetation_23-2150698282.jpg?t=st=1695204017~exp=1695207617~hmac=e05955c46daeeb1bbbe13cc6f18f8ed68e0bbff2a55cd6e4574ea46f1b43fbff&w=740','Lyon','2023-09-27');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('broderie','description 11','James','Margaux',40,'https://img.freepik.com/premium-photo/round-box-with-red-flower-design_867442-1543.jpg?w=1380','Bordeaux','2023-09-12');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('rideau','description 12','James','Elips',20,'https://img.freepik.com/free-photo/window-room-with-surreal-mystical-view_23-2150309272.jpg?t=st=1695204103~exp=1695207703~hmac=4c270201c6554aead68a3f11914ac6816d7a9f2ad2215c9db960fa4838f1b29f&w=740','Paris','2023-09-18');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('commode','description 13','Ludovic',100,'https://img.freepik.com/free-photo/home-entryway-with-modern-furnishing-design_23-2150791114.jpg?t=st=1695204124~exp=1695207724~hmac=10e8b20501298ff4d1da5634f228b798948c49bea7c6c5579e69680099587201&w=1380','Lyon','2023-09-21');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('lampe','description 14','Stéphane',30,'https://img.freepik.com/free-photo/lamp-with-word-lamp-it_1340-23634.jpg?t=st=1695204140~exp=1695207740~hmac=98a1a51704e30d1d17925d6f59bb4f5d2c3b7254ab6c4602f86806e0bf32d41a&w=1380','Lyon','2023-09-08');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('cactus','description 15','Dider',50,'https://img.freepik.com/premium-photo/world-s-most-beautiful-cactus_973612-346.jpg?w=740','Bordeaux','2023-09-11');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('télévision','description 16','Salomé',120,'https://img.freepik.com/free-photo/retro-tv-indoors_23-2150711800.jpg?t=st=1695204220~exp=1695207820~hmac=532151b03431563f1e5ffb248cbc56dbdb5fcdbb0aab6855d4b8b16eaf64cfd9&w=740','Lyon','2023-09-22');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('table','description 17','Jules',70,'https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=826&t=st=1695202577~exp=1695203177~hmac=9084b56fdd56226b2b38f3c52f4a561d9d8c76f57a33ce4408e6c1bb58d147d4','Paris','2023-09-16');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('chaises','description 18','Opale',150,'https://img.freepik.com/free-photo/view-room-furniture-monochrome-palette_23-2150635152.jpg?t=st=1695204247~exp=1695207847~hmac=769f204fbfbc92b76a037479424fc083d8c87425754868af3988360e524538f8&w=1380','Lyon','2023-09-03');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('longboard','description 19','Saphir',100,'https://img.freepik.com/premium-photo/most-amazing-hd-8k-wallpaper-stock-photographic-image_915071-34641.jpg?w=996','Bordeaux','2023-09-17');
INSERT INTO ad(title, description, owner, price, picture, location,createdAt) VALUES ('skate','description 20','Blanche',60,'https://img.freepik.com/premium-photo/technological-design-orange-skateboard-dynamic-parking-lot_899449-55517.jpg?w=1380','Bordeaux','2023-09-10');