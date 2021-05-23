CREATE DATABASE bookLibrary;

CREATE USER 'librarian'@'localhost' IDENTIFIED BY 'password123!';

GRANT ALL ON bookLibrary.* TO 'librarian'@'localhost';

USE bookLibrary;

CREATE TABLE authors (
  id INT auto_increment,
  nameFirst VARCHAR(255) NOT NULL,
  nameLast VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE novels (
  id INT auto_increment,
  title VARCHAR(255) NOT NULL,
  authorId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (authorId) REFERENCES authors(id)
);

CREATE TABLE genres (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE novelsGenres (
  genreId INT,
  novelId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(genreId, novelId)
  FOREIGN KEY (genreId) REFERENCES genres(id)
  FOREIGN KEY (novelId) REFERENCES novels(id)
);

INSERT INTO authors (nameFirst, nameLast) 
VALUES 
  ("Agatha", "Christie"),
  ("Alexandre", "Dumas"),
  ("Alice", "Walker"),
  ("Arthur", "Conan Doyle"),
  ("Arthur", "Miller"),
  ("Bram", "Stoker"),
  ("Charles", "Dickens"),
  ("Chinua", "Achebe"),
  ("Fyodor", "Dostoyevsky"),
  ("George", "Orwell"),
  ("H.G.", "Wells"),
  ("Leo", "Tolstoy"),
  ("Oscar", "Wilde"),
  ("Ray", "Bradbury"),
  ("Robert", "Louis Stevenson");

INSERT INTO novels (title, authorId) 
VALUES 
  ("Murder on the Orient Express", 1),
  ("The Three Musketeers", 2),
  ("The Color Purple", 3),
  ("The Hound of the Baskervilles", 4),
  ("The Crucible", 5),
  ("Dracula", 6),
  ("A Tale of Two Cities", 7),
  ("Things Fall Apart", 8),
  ("Crime and Punishment", 9),
  ("Animal Farm", 10),
  ("The Time Machine", 11),
  ("War and Peace", 12),
  ("The Picture of Dorian Gray", 13),
  ("Fahrenheit 451", 14),
  ("The Strange Case of Dr. Jekyll and Mr. Hyde", 15);

INSERT INTO genres (name) 
VALUES 
  ("Adventure"),
  ("African Literature"),
  ("Crime"),
  ("Drama"),
  ("Dystopia"),
  ("Fantasy"),
  ("Fiction"),
  ("French Literature"),
  ("Gothic"),
  ("Historical Fiction"),
  ("Horror"),
  ("Mystery"),
  ("Plays"),
  ("Russian Literature"),
  ("Science Fiction"),
  ("Time Travel"),
  ("Thriller"),  
  ("War");