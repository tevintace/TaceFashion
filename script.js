* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #fff;
  color: #333;
  line-height: 1.6;
}

/* HEADER */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: #f5f5f5;
}

.logo {
  font-size: 1.8em;
  font-weight: bold;
}
.logo span {
  color: #e91e63;
}

nav a {
  text-decoration: none;
  color: #333;
  margin-left: 20px;
  font-weight: 500;
}
nav a:hover {
  color: #e91e63;
}

/* HERO */
.hero {
  background: url('images/banner.jpg') no-repeat center center/cover;
  height: 90vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero h1 {
  font-size: 3em;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.hero p {
  margin: 15px 0;
  max-width: 600px;
}
.btn {
  background: #e91e63;
  color: white;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 25px;
  transition: 0.3s;
}
.btn:hover {
  background: #c2185b;
}

/* COLLECTION */
.collection {
  padding: 60px;
  text-align: center;
}
.collection h2 {
  margin-bottom: 30px;
  font-size: 2em;
}
.products {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.product {
  width: 250px;
  margin: 15px;
  text-align: center;
}
.product img {
  width: 100%;
  border-radius: 10px;
  transition: 0.3s;
}
.product img:hover {
  transform: scale(1.05);
}

/* ABOUT */
.about {
  padding: 60px;
  text-align: center;
  background: #f5f5f5;
}
.about p {
  max-width: 600px;
  margin: 10px auto;
}

/* GALLERY */
.gallery {
  padding: 60px;
  text-align: center;
}
.gallery-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}
.gallery-images img {
  width: 100%;
  border-radius: 10px;
}

/* FOOTER */
footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
}
.socials a {
  color: #e91e63;
  text-decoration: none;
  margin: 0 10px;
}
.socials a:hover {
  text-decoration: underline;
}
