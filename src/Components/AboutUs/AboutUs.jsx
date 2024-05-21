import React from "react";
import "./AboutUs.css";
import img from "../../Assets/image.jpg";
import img1 from "../../Assets/Kuta.jpg";
import img2 from "../../Assets/Seminyak.jpg";
import img3 from "../../Assets/Ungasan.jpg";
import img4 from "../../Assets/Balikpapan.jpg";
import img5 from "../../Assets/Bandung.jpg";
import img6 from "../../Assets/Jakarta.jpg";
import img7 from "../../Assets/Makassar.jpg";
import img8 from "../../Assets/Manado.jpg";
import img9 from "../../Assets/Medan.jpg";
import img10 from "../../Assets/Surabaya.jpg";
import img11 from "../../Assets/TP.jpg";

const aboutUs = () => {
  const images = [
    {
      src: img1,
      text1: "Kuta, Bali",
      text2: "Jl. Benesari, Kuta, Kuta, Badung",
    },
    {
      src: img2,
      text1: "Seminyak, Bali",
      text2:
        "Jl. Petitenget Gang Cendrawasih No.99, Kerobokan Kelod, Kuta Utara, Badung",
    },
    {
      src: img3,
      text1: "Ungasan, Bali",
      text2: "Jl. Raya Uluwatu, Ungasan, Kuta Selatan, Badung",
    },
    {
      src: img4,
      text1: "Balikpapan",
      text2: "Jl. Pelita No.19, Sepinggan, Balikpapan Selatan, Balikpapan",
    },
    {
      src: img5,
      text1: "Bandung",
      text2: "Jl. Ir. H. Juanda No.46, Citarum, Bandung Wetan, Bandung",
    },
    {
      src: img6,
      text1: "Jakarta Thamrin",
      text2: "Jl. M.H. Thamrin Kav 9, Gondangdia, Menteng, Jakarta Pusat",
    },
    {
      src: img7,
      text1: "Makassar",
      text2: "Jl. Andi Djemma No.130, Banta-Bantaeng, Rappocini, Makassar",
    },
    {
      src: img8,
      text1: "Manado",
      text2: "Jl. Piere Tendean, Sario Tumpaan, Sario, Manado",
    },
    {
      src: img9,
      text1: "Medan",
      text2: "Jl. Gatot Subroto No.395, Sei Sikambing D, Medan Petisah, Medan",
    },
    {
      src: img10,
      text1: "Pakuwon Indah, Surabaya",
      text2: "Jl. Raya Lontar No.2, Babatan, Wiyung, Surabaya",
    },
    {
      src: img11,
      text1: "Tunjungan Plaza, Surabaya",
      text2: "Jl. Embong Malang No.25-31, Kedungdoro, Tegalsari, Surabaya",
    },
  ];

  return (
    <section className="about">
      <div className="text">
        <h1>
          Step into a world of timeless elegance where modern amenities
          seamlessly merge with classic charm, offering guests an unparalleled
          retreat.
        </h1>
        <p>
          Nestled in the heart of the city, our hotel is a testament to refined
          elegance and unparalleled hospitality. With a commitment to providing
          an exceptional stay, we blend modern comfort seamlessly with timeless
          charm.{" "}
        </p>
      </div>
      <div className="image">
        <img src={img} classNamealt="img" />
      </div>
      <hr />
      <div className="content2">
        <h2>Your Retreat Our Passion</h2>
        
        <h5>
          Four Points by Sheraton is travel reinvented. Four Points serves as
          the center of where business meets pleasure, enabling guests to kick
          back and relax on the road. Designed for the smart, independent
          traveler, Four Points offers the timeless style and comfort guests are
          looking for, coupled with genuine service and everything that matters
          most, all around the world. Four Points hotels can be found in
          sprawling urban centers, near the closest airport, on the beach, or
          nestled in the suburbs. Each hotel offers a familiar and authentic
          sense of the local, friendly service that allows guests to relax and
          unwind, watch local sports, and enjoy the brand’s Best Brews program.
          Best Brews provides guests with the chance to sample craft beers and
          enjoy authentic local flavors at every hotel pub across the brand’s
          200+ property portfolio with each brew strategically chosen for its
          unique flavor, popularity and quality ingredients. Committed to
          improving productivity while on the road, Four Points also offers what
          business travelers around the world need most, including free in-room
          water, in-room and public space Wi-Fi and more. A true global brand,
          Four Points is 4th in total number of properties open outside North
          America amongst Marriott International’s entire portfolio.
        </h5>
      </div>

      <hr />
      <h2 className="bottom">Four Points by Sheraton</h2>
      <h3 className="bottom">in Indonesia</h3>

      <div className="loop">
        {images.map((image, index) => (
          <div key={index} className="image-description">
            <img
              src={image.src}
              alt={`image ${index}`}
              style={{ width: "100%" }}
            />
            <div className="description">
              <p className="bold">{image.text1}</p>
              <p className="p">{image.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default aboutUs;
