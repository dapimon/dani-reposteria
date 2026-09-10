import { products, categories } from "../data/products";
import Image from "next/image";

const WHATSAPP_NUMBER = "573012502846";

const reviews = [
  {
    name: "María P.",
    rating: 5,
    text: "Los brownies son increíbles y el servicio fue súper atento. Siempre pido para reuniones y todos quedan encantados.",
  },
  {
    name: "Andrés C.",
    rating: 4,
    text: "La calidad de los panes y pasteles es excelente. Todo llega bien presentado y con un sabor muy casero.",
  },
  {
    name: "Sofía L.",
    rating: 5,
    text: "Me encantó la torta de cumpleaños; tenía un sabor delicioso y se veía hermosa. Sin duda volveré a comprar.",
  },
];

function whatsappUrl(product?: string) {
  const text = product
    ? `Hola, estoy interesado en ${product}. ¿Me pueden dar más información?`
    : "Hola, quiero conocer sus productos.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="logo" href="/">
        <Image
    src="/images/logo.png"
    alt="Dani Repostería y Panadería"
    width={160}
    height={60}
  />
           <span className="brandName">
    Dani Repostería y Panadería
  </span></a>
        <nav>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#reviews">Reviews</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="navCta" href={whatsappUrl()}>WhatsApp</a>
      </header>

      <section className="hero">
        <div className="heroOverlay">
          <p className="eyebrow">HECHO CON INTENCIÓN</p>
          <h1>Productos que<br />merecen ser descubiertos.</h1>
          <p className="heroText">
            Repostería y panadería hecha con cariño para disfrutar y compartir.
          </p>
          <a className="button" href="#productos">Ver productos</a>
        </div>
      </section>

      <section className="intro">
        <p className="eyebrow">DESCUBRE NUESTRA COLECCIÓN</p>
        <h2>Calidad, personalidad y una historia detrás de cada producto.</h2>
      </section>

      <section className="categories">
        {categories.map((category) => (
          <a href="#productos" className="category" key={category}>
            <div className="placeholderImage" />
            <span>{category}</span>
          </a>
        ))}
      </section>

      <section id="productos" className="section">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">CATÁLOGO</p>
            <h2>Nuestros productos</h2>
          </div>
          <a href="#contacto">¿Tienes alguna pregunta?</a>
        </div>

        <div className="grid">
          {products.map((product) => (
            <article className="card" key={product.id}>
              <div className="productImage">
                <img src={product.image} alt={product.name} width={600}
  height={600} />
              </div>
              <div className="cardBody">
                <p className="categoryLabel">{product.category}</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="cardBottom">
                  <strong>{product.price}</strong>
                  <a href={whatsappUrl(product.name)}>Pedir</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="nosotros" className="about">
        <div className="aboutImage">
          <Image
      src="/images/marca.jpeg"
      alt="Dani Repostería y Panadería"
      fill
    />
          </div>
        <div className="aboutCopy">
          <p className="eyebrow">SOBRE NOSOTROS</p>
          <h2>Una marca cercana, con productos que hablan por sí mismos.</h2>
          <p>
            En Dani Repostería & Panadería creemos que el amor también se hace con las manos.
            Creamos productos con dedicación, cuidado y pasión,
            buscando que cada sabor se convierta en un pequeño momento de felicidad.
<span></span>
            Nos inspira lo hecho a mano, la calidad de cada preparación y la ilusión de compartir productos que no solo deleiten, sino que también hagan sentir especial a quien los disfruta.
Dani es cercanía, sabor y amor en cada creación.
          </p>
          <a className="textLink" href="#contacto">Conoce nuestra historia →</a>
        </div>
      </section>

      <section id="reviews" className="section reviews">
        <div className="sectionHeading reviewsHeading">
          <div>
            <p className="eyebrow">REVIEWS</p>
            <h2>Lo que dicen nuestros clientes</h2>
          </div>
        </div>

        <div className="reviewGrid">
          {reviews.map((review) => (
            <article className="reviewCard" key={review.name}>
              <div className="reviewHeader">
                <div className="reviewAvatar">{review.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
                <div>
                  <strong>{review.name}</strong>
                  <div
                    className="stars"
                    aria-label={`${review.rating} de 5 estrellas`}
                    role="img"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={`${review.name}-${index}`} className={index < review.rating ? "star filled" : "star"}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p>{review.text}</p>
              <span className="reviewScore">{review.rating}.0/5</span>
            </article>
          ))}
        </div>
      </section>

      <section id="galeria" className="section">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">GALERÍA</p>
            <h2>Conoce nuestro mundo</h2>
          </div>
        </div>
        <div className="gallery">
          <div className="galleryLarge">
      <Image
        src="/images/galeria-1.jpeg"
        alt="Dani Repostería y Panadería"
        fill
      />
    </div>

    <div>
      <Image
        src="/images/galeria-2.jpeg"
        alt="Productos de Dani"
        fill
      />
    </div>

    <div>
      <Image
        src="/images/galeria-3.jpeg"
        alt="Repostería artesanal"
        fill
      />
    </div>

    <div>
      <Image
        src="/images/galeria-4.jpg"
        alt="Panadería artesanal"
        fill
      />
    </div>

    <div>
      <Image
        src="/images/galeria-5.jpg"
        alt="Productos artesanales"
        fill
      />
    </div>
        </div>
      </section>

      <section id="contacto" className="cta">
        <p className="eyebrow">HABLEMOS</p>
        <h2>¿Quieres conocer nuestros productos?</h2>
        <p>Escríbenos y te ayudamos a elegir.</p>
        <a className="button" href={whatsappUrl()}>Hablar por WhatsApp</a>
      </section>

      <footer>
        <div>
          <div className="logo">Dani Repostería y Panadería</div>
          <p>Catálogo de productos.</p>
        </div>
        <div>
          <strong>Enlaces</strong>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div>
          <strong>Contacto</strong>
          <span>WhatsApp</span>
          <span>Instagram</span>
          <span>Medellín, Colombia</span>
        </div>
      </footer>
    </main>
  );
}