import React from "react";

const products = [
  {
    id: 1,
    title: "Arbre de vie sur améthyste.",
    price: "90€",
    description: (
      <p>
        Arbre de vie sur améthyste.
        <br />
        Fait main en fil d'aluminium.
        <br />
        <br />
        Hauteur: 17cm
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/4804029395/arbre-de-vie-sur-amethyste.html"
        title="fiche produit"
        target="blank"
      >
        Sur commande...
        <br />
      </a>
    ),
    reference: "big_life_tree_01",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre01.jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre01(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre01(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre01(03).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre01(04).jpeg"
    ]
  },

  {
    id: 2,
    title: "Arbre de vie sur améthyste.",
    price: "90€",
    description: (
      <p>
        Arbre de vie sur améthyste. Fait main en fil d'aluminium.
        <br />
        <br />
        Hauteur: 17cm
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/4804029395/arbre-de-vie-sur-amethyste.html"
        title="fiche produit"
        target="blank"
      >
        Sur commande...
        <br />
      </a>
    ),
    reference: "Big_life_tree_02",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre02.jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre02(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre02(02).jpeg"
    ]
  },
  {
    id: 3,
    title: "arbre de vie sur améthyste",
    price: "120€",
    description: (
      <p>
        Arbre de vie sur améthyste. Fait main en fil d'aluminium.
        <br />
        Fil en acier inoxydable, 189 perles d'améthyste (et donc le double de
        racines ! )
        <br />
        Le tout monté sur une amethyste.
        <br />
        Très gros travail sur les racines et leur enchevêtrement.
        <br />
        Pièce d'art unique.
        <br />
        <br />
        Hauteur: 17cm
      </p>
    ),

    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/4804029395/arbre-de-vie-sur-amethyste.html"
        title="fiche produit"
        target="blank"
      >
        Sur commande...
        <br />
      </a>
    ),
    reference: "Big_life_tree_03",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre03.jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre03(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre03(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre03(03).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre03(04).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre03(05).jpeg"
    ]
  },

  {
    id: 4,
    title: "Arbre de vie sur améthyste.",
    price: "120€",
    description: (
      <p>
        Arbre de vie sur améthyste. Fait main en fil d'aluminium.
        <br />
        <br />
        Hauteur: 17cm
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/4804029395/arbre-de-vie-sur-amethyste.html"
        title="fiche produit"
        target="blank"
      >
        Sur commande...
        <br />
      </a>
    ),
    reference: "big_life_tree_4",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre04(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre04(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre04(03).jpeg"
    ]
  },

  {
    id: 5,
    title: "Arbre de vie inspiration cerisier du Japon.",
    price: "90€",
    description: (
      <p>
        Arbre de vie inspiration cerisier du Japon en fil d'aluminium et perles
        de rocaille en verre monté sur une Agathe colorée. <br />
        <br />
        Produit fait main.
        <br />
        Modèle unique.
        <br />
        Hauteur : 15cm
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/4804029394/arbre-de-vie-cerisier-du-japon.html"
        target="blanck"
        title="pendentif"
      >
        Disponible...
        <br />
      </a>
    ),
    reference: "big_life_tree_5",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre05(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre05(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre05(03).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre05(04).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre05(05).jpeg"
    ]
  },

  {
    id: 6,
    title: "Arbre de vie sur quartz.",
    price: "120€",
    description: (
      <p>
        Arbre de vie fait main en fil de fer et perles miyuki sur quartz brut .
        <br />
        <br />
        27 cm de hauteur
        <br />
        Poids: 644g
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/4804029401/arbre-de-vie-sur-quartz.html"
        target="blanck"
        title="arbre de vie sur quartz"
      >
        Disponible...
        <br />
      </a>
    ),
    reference: "big_life_tree_6",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre06.jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre06(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre06(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre06(03).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre06(04).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre06(05).jpeg"
    ]
  },
  {
    id: 7,
    title: "Arbre de vie sur améthyste.",
    price: "90€",
    description: (
      <p>
        Arbre de vie en fil de fer, perles en améthyste le tout monté sur une
        druse d'améthyste.
        <br />
        <br />
        Hauteur: 18 cm
        <br />
        Largeur: 10 cm
        <br />
        Poids: 416g
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/4804029395/arbre-de-vie-sur-amethyste.html"
        title="fiche produit"
        target="blank"
      >
        Disponible...
        <br />
      </a>
    ),
    reference: "big_life_tree_7",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre07.jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre07(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre07(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre07(03).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre07(04).jpeg"
    ]
  },
  {
    id: 8,
    title: "Arbre de vie sur améthyste.",
    price: "80€",
    description: (
      <p>
        Arbre de vie en fil d'aluminium et perles d'améthyste fait main le tout
        monté sur une druse d'améthyste.
        <br />
        Pièce unique. <br />
        <br />
        Hauteur: 16cm
        <br />
        Largeur: 9cm{" "}
      </p>
    ),
    link: (
      <a href="https://fr.shopping.rakuten.com/offer/buy/4804029399/arbre-de-vie-sur-amethyste.html">
        Disponible...
        <br />
      </a>
    ),
    reference: "big_life_tree_8",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre08.jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre08(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre08(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre08(03).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre08(04).jpeg"
    ]
  },
  {
    id: 9,
    title: "Arbre de vie 7 chakras sur agathe géode teintée.",
    price: "80€",
    description: (
      <p>
        Arbre de vie 7 chakras en fil d'aluminium et perles semi-précieuses fait
        main le tout monté sur une géode teintée.
        <br />
        Pièce unique. <br />
        <br />
        Hauteur: 21cm
        <br />
        Largeur: 11cm
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/4863359918/arbre-de-vie-7-chakras.html"
        title="page produit"
        target="blank"
      >
        Disponible...
        <br />
      </a>
    ),
    reference: "big_life_tree_9",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre09.jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(03).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(04).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(05).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(06).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(07).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(08).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(09).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(10).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(11).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(12).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(13).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(14).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(15).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(16).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(17).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(18).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre09(19).jpeg"
    ]
  },

  {
    id: 10,
    title: "Arbre de vie 7 chakras sur tourmaline noire.",
    price: "80€",
    description: (
      <p>
        Arbre de vie 7 chakras en fil d'aluminium et perles en pierre
        semi-précieuses fait main le tout monté sur une tourmaline noire brute.
        <br />
        Pièce unique. <br />
        <br />
        Hauteur: 16cm
        <br />
        Largeur: 9cm
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/4804029399/arbre-de-vie-sur-amethyste.html"
        title="page produit"
        target="blank"
      >
        Sur commande...
        <br />
      </a>
    ),
    reference: "big_life_tree_10",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre10.jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(03).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(04).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(05).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(06).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(07).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(08).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(09).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(10).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(11).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(12).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(13).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre10(14).jpeg"
    ]
  },

  {
    id: 11,
    title: "Arbre de vie perles d'ambre sur tourmaline noire.",
    price: "70€",
    description: (
      <p>
        arbre de vie fait main en fil d'aluminium et perles d'ambre le tout monté sur une tourmaline noire.
        <br />
        Pièce d'art unique. <br />
        <br />
        hauteur: 17 cm
        <br />
        largeur: 10 cm
        <br />
        poids: 396g
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/5179818575/arbre-de-vie-ambre.html"
        title="page produit"
        target="blank"
      >
        Sur commande...
        <br />
      </a>
    ),
    reference: "big_life_tree_11",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre11.jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(01).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(02).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(03).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(04).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(05).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(06).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(07).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(08).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(09).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(10).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(11).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(12).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(13).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(14).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(15).jpeg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre11(16).jpeg"

    ]
  },

  {
    id: 12,
    title: "Arbre de vie perles d'ambre sur tourmaline noire.",
    price: "70€",
    description: (
      <p>
        arbre de vie fait main en fil d'aluminium et perles d'ambre le tout monté sur une tourmaline noire.
        <br />
        Pièce d'art unique. <br />
        <br />
        hauteur:14cm 
        <br />
        largeur: 9cm 
        <br />
        poids:219g
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/5179955392/arbre-de-vie-ambre.html"
        title="page produit"
        target="blank"
      >
        Sur commande...
        <br />
      </a>
    ),
    reference: "big_life_tree_12",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre12.jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre12(01).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre12(02).jpg"
    ]
  },

  {
    id: 13,
    title: "Arbre de vie perles d'ambre sur une druse d'améthyste.",
    price: "70€",
    description: (
      <p>
        arbre de vie fait main en fil d'aluminium et perles d'ambre le tout monté sur une druse d'améthyste.
        <br />
        Pièce d'art unique. <br />
        <br />
        hauteur:12cm 
        <br />
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/5179955392/arbre-de-vie-ambre.html"
        title="page produit"
        target="blank"
      >
        Disponible...
        <br />
      </a>
    ),
    reference: "big_life_tree_13",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre13.jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre13(01).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre13(02).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre13(03).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre13(04).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre13(05).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre13(06).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre13(07).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre13(08).jpg"
    ]
  },

  {
    id: 14,
    title: "Arbre de vie perles de rocailles sur géode de quartz.",
    price: "90€",
    description: (
      <p>
        arbre de vie fait main en fil d'aluminium et perles de rocaille vertes, le tout monté sur un géode de quartz.
        <br />
        Pièce d'art unique. <br />
        <br />
        hauteur: 20cm 
        <br />
      </p>
    ),
    link: (
      <a
        href="https://fr.shopping.rakuten.com/offer/buy/5179955392/arbre-de-vie-ambre.html"
        title="page produit"
        target="blank"
      >
        Disponible...
        <br />
      </a>
    ),
    reference: "big_life_tree_14",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre14.jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(01).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(02).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(03).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(04).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(05).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(06).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(07).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(08).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(09).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre14(10).jpg"
    ]
  },

  {
    id: 15,
    title: "Sculpture en fil d'aluminium.",
    price: "70€",
    description: (
      <p>
        arbre de vie fait main en fil d'aluminium fait main.
        <br />
        Pièce d'art unique. <br />
        <br />
        hauteur: 20cm 
        <br />
        largeur: 15cm
      </p>
    ),
    link: (
      <a
        href="https://www.vinted.fr/femmes/accessoires-autres-accessoires/568013559-sculpture-arbre-de-vie"
        title="page produit"
        target="blank"
      >
        Disponible...
        <br />
      </a>
    ),
    reference: "big_life_tree_15",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre15.jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(01).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(02).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(03).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(04).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(05).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(06).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(07).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(08).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(09).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre15(10).jpg"
    ]
  },

  {
    id: 16,
    title: "Grande sculpture en fil d'aluminium.",
    price: "120€",
    description: (
      <p>
        arbre de vie fait main en fil d'aluminium fait main.
        <br />
        Pièce d'art unique. <br />
        <br />
        hauteur: 40cm
      </p>
    ),
    link: (
      <a
        href="https://www.vinted.fr/femmes/accessoires-autres-accessoires/568013559-sculpture-arbre-de-vie"
        title="page produit"
        target="blank"
      >
        Disponible...
        <br />
      </a>
    ),
    reference: "big_life_tree_16",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre16.jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre16(01).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre16(02).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre16(03).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre16(04).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre16(05).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre16(06).jpg"
    ]
  },

  {
    id: 17,
    title: "Grand arbre de vie sur améthyste.",
    price: "120€",
    description: (
      <p>
        Arbre de vie sur améthyste. Fait main en fil d'aluminium.
        <br />
        <br />
        Hauteur: 25cm
        <br />
        Largeur: 15cm
      </p>
    ),
    link: (
      <a
        href="https://www.etsy.com/fr/MilhieCreation/listing/838459402/"
        title="fiche produit"
        target="blank"
      >
        Sur commande...
        <br />
      </a>
    ),
    reference: "Big_life_tree_02",
    images: [
      "https://milhiecreation.milhie.fr/images/arbres/arbre17.jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre17(01).jpg",
      "https://milhiecreation.milhie.fr/images/arbres/arbre17(02).jpg"
    ]
  }
];
export default products;
