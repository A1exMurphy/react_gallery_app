CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.')
  ('images/Gaia.webp', 'Mother Earth', 'An interpretation of the goddess of the Earth.')
  ('images/theGoodtheBadandtheJolly.jpg', 'Santas got a list!', 'Santas back and hes got a present.')
  ('images/Trex.png', 'T Rex!', 'The once and forever king.')


  