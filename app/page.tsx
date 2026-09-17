import { products, categories } from "../data/products";
import Image from "next/image";

const WHATSAPP_NUMBER = "573012502846";

const reviews = [
  {
    name: "Cristina Díez",
    rating: 5,
    text: "Los productos son muy frescos, se sienten esponjosos y de un muy buen sabor.",
  },
  {
    name: "Guillermo Gómez",
    rating: 5,
    text: "Muy buena atención y los productos cumplen a cabalidad lo ofrecido.",
  },
  {
    name: "Luisa Giraldo",
    rating: 5,
    text: "Me encantan los croissant son muy frescos y no importa si te los comes calientes o fríos, siempre están deliciosos. No me puedo decidir entre los pasteles de Arequipe y Guayaba, son crocantes, el hojaldre es delicioso y el precio ni se diga!!",
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
    src="/images/logo-dani.svg"
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
          <h1 >Repostería y panadería hecha con cariño para disfrutar y compartir.</h1>
          
          <p className="heroText">
            Productos que merecen ser descubiertos.
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
          <a
            href="#productos"
            className="category"
            key={category.name}
            style={{ backgroundImage: `linear-gradient(180deg, rgba(27, 18, 16, 0.12), rgba(27, 18, 16, 0.68)), url('${category.image}')` }}
          >
            <div className="placeholderImage" aria-hidden="true" />
            <span>{category.name}</span>
          </a>
        ))}
      </section>

      <section id="productos" className="section">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">CATÁLOGO</p>
            <h2>Nuestros productos</h2>
          </div>
          <div className="catalogActions">
            <a href="https://www.canva.com/design/DAHTQgE2c54/oNRsjcTaGm1YaR7lFmmxgQ/view?utm_content=DAHTQgE2c54&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfd73268142" target="_blank" rel="noreferrer">Catálogo completo</a>
          </div>
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
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "contain", objectPosition: "center top" }}
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
          
        </div>
      </section>

      <section id="reviews" className="section reviews">
        <div className="sectionHeading reviewsHeading">
          <div>
            <p className="eyebrow"></p>
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
        src="/images/alfajores.jpeg"
        alt="Panadería artesanal"
        fill
      />
    </div>

    <div>
      <Image
        src="/images/galeria-5.jpeg"
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
          <span>
          <a className="footerInstagram" href="https://www.canva.com/design/DAHTQgE2c54/oNRsjcTaGm1YaR7lFmmxgQ/view?utm_content=DAHTQgE2c54&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfd73268142" target="_blank" rel="noreferrer">
          Catálogo de productos.</a>
          </span>
          <span>
          <a className="footerWhatsApp" href="https://canva.link/am4i468ww343hbx" target="_blank" rel="noreferrer">
          Paso a paso de Compra.</a>
          </span>
        </div>
        <div>
          <strong>Enlaces</strong>
          <span>
          <a href="#productos">Productos</a>
          </span>
          <span>
          <a href="#nosotros">Nosotros</a>
          </span>
          <span>
          <a href="#contacto">Contacto</a>
          </span>
          
        </div>
        <div>
          <strong>Contacto</strong>
          <span>
          <a className="footerWhatsApp" href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
          </span>
          <span>
          <a className="footerInstagram" href="https://www.instagram.com/dani_reposteriaypanaderia?stkn=N3ZlcXlyejFsY200" target="_blank" rel="noreferrer">Instagram</a>
          </span>
          <span>Corregimiento de Santa Elena, Colombia</span>
          <br />
          <strong>Horario de atención</strong>
          <span>Lunes a sábado: 8:00 a. m. - 7:00 p. m.</span>
          <span>Domingos: 9:00 a. m. - 4:00 p. m.</span>
        </div>
      </footer>
    </main>
  );
}