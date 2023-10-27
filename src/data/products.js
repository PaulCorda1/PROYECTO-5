const products = [
    {
        "id": 1,
        "nombre": "Camiseta de fútbol para mujer",
        "precio": 29.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/p2288288/k$8415a33e5084c16d0248f8caec89e4f8/sq/camiseta-de-futbol-mujer-blanca-manga-corta-corte-recto.jpg?format=auto&f=800x0"
    },
    {
        "id": 2,
        "nombre": "Shorts de running para hombre",
        "precio": 24.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/p2413670/k$dca6bc1914d398e18c15a4f261389e52/sq/short-running-hombre-kiprun-split-amarillo.jpg?format=auto&f=800x0"
    },
    {
        "id": 3,
        "nombre": "Zapatillas para niños",
        "precio": 39.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/p1730118/k$3796541e7ba0549568097041e2fc8b24/sq/zapatillas-deportivas-adidas-advantage-ninos-blanco-del-28-al-34.jpg?format=auto&f=800x0"
    },
    {
        "id": 4,
        "nombre": "Balón de fútbol",
        "precio": 14.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/p2154127/k$2799c00bbec1a4ad63c8b1af80083172/sq/balon-de-futbol-hibrido-fifa-basic-f500-talla-5-blanco-amarillo.jpg?format=auto&f=800x0"
    },
    {
        "id": 5,
        "nombre": "Chaqueta deportiva para mujer",
        "precio": 49.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/m3987422/k$19bd3fb1104526d1ea9f6d4d9947b529/sq/chaqueta-urbana-y-deportiva-para-mujer-alder-w-izas.jpg?format=auto&f=800x0"
    },
    {
        "id": 6,
        "nombre": "Camiseta de baloncesto para hombre",
        "precio": 34.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/p2423631/k$9857f55ffe5fab02881a688bf47e615e/sq/camiseta-de-baloncesto-sin-mangas-unisex-ts500-rojo.jpg?format=auto&f=800x0"
    },
    {
        "id": 7,
        "nombre": "Botas de fútbol para niños",
        "precio": 29.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/m10773176/k$1e40bb34f7f526d173e5f7f8c50248d0/sq/botas-de-futbol-ninos-future-play-mg-puma-azul.jpg?format=auto&f=800x0"
    },
    {
        "id": 8,
        "nombre": "Cinta de correr",
        "precio": 699.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/p2332850/k$19c2898171f7fdb9245f3c11c6f11532/sq/cinta-de-correr-plegable-t900d-18kmh-50143cm.jpg?format=auto&f=800x0"
    },
    {
        "id": 9,
        "nombre": "Camiseta de baloncesto para mujer",
        "precio": 29.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/m13845949/k$a2adc3d5061d9caa57bb25361a624660/sq/camiseta-manga-corta-kelme-camiseta-fed-turquia-baloncesto-unisex-blanco.jpg?format=auto&f=800x0"
    },
    {
        "id": 10,
        "nombre": "Pantalones deportivos para hombre",
        "precio": 34.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/m14076950/k$daf5f6014c3452720bf0e293351fd0d5/sq/pantalones-deportivos-hombre-puma-active-tricot-azul.jpg?format=auto&f=800x0"
    },
    {
        "id": 11,
        "nombre": "Chanclas para niños",
        "precio": 39.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/p2131922/k$2e5db6dd146b57596df7b36fd22303e3/sq/chanclas-piscina-nino-pala-azul.jpg?format=auto&f=800x0"
    },
    {
        "id": 12,
        "nombre": "Balón de rugby",
        "precio": 14.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/p2333079/k$3484336dcc61f1814bf058c7fcc78c77/sq/balon-de-rugby-talla-5-espana.jpg?format=auto&f=800x0"
    },
    {
        "id": 13,
        "nombre": "Sudadera deportiva para mujer",
        "precio": 49.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/p2310522/k$3e6952e9d74ca152727a526e584c422a/sq/sudadera-polar-de-montana-y-trekking-con-capucha-mujer-quechua-mh100-hoodie.jpg?format=auto&f=800x0"
    },
    {
        "id": 14,
        "nombre": "Gorra de hombre",
        "precio": 24.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/p2209864/k$14e0d4632e9ee72462569397798a0342/sq/gorra-de-tenis-artengo-tc-100-negro.jpg?format=auto&f=800x0"
    },
    {
        "id": 15,
        "nombre": "Polo",
        "precio": 29.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/p2239391/k$403a4b7a6deb22486706413528c3d94f/sq/polo-de-golf-manga-corta-hombre-mw500-caqui.jpg?format=auto&f=800x0"
    },
    {
        "id": 16,
        "nombre": "Mancuernas",
        "precio": 699.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/p2174810/k$70487cd16fe29f0648f2aa94c0702df0/sq/mancuerna-10-kg-hexagonal-dumbbell-musculacion-cross-training-corength.jpg?format=auto&f=800x0"
    },
    {
        "id": 17,
        "nombre": "Conjunto deportivo para mujer",
        "precio": 54.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/p2174810/k$70487cd16fe29f0648f2aa94c0702df0/sq/mancuerna-10-kg-hexagonal-dumbbell-musculacion-cross-training-corength.jpg?format=auto&f=800x0"
    },
    {
        "id": 18,
        "nombre": "Sudadera para hombre",
        "precio": 19.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/p2073099/k$0dd6e26b582cf8b9509d70c258c6aa17/sq/sudadera-chaqueta-fitness-con-capucha-hombre-domyos-100-negro.jpg?format=auto&f=800x0"
    },
    {
        "id": 19,
        "nombre": "Sudadera para niños",
        "precio": 27.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/p2244780/k$1d550679d93e99c9e74ca547e62734a1/sq/sudadera-ninos-calida-capucha.jpg?format=auto&f=800x0"
    },
    {
        "id": 20,
        "nombre": "Pelota de tenis",
        "precio": 7.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/p2405556/k$c2348b7b252c207cc28420fae03ca6ac/sq/pelota-de-tenis-polivalente-artengo-confort-x4.jpg?format=auto&f=800x0"
    },
    {
        "id": 21,
        "nombre": "Camiseta deportiva para mujer",
        "precio": 22.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/m12075535/k$29afdb6f2947bace86448599b10e1e5e/sq/camiseta-deportiva-tecnica-de-manga-corta-para-mujer-izas-creus-w.jpg?format=auto&f=800x0"
    },
    {
        "id": 22,
        "nombre": "Pantalones de yoga para hombre",
        "precio": 29.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/p2384684/k$7cfa20f0f7be22c6f95f1a31146329c3/sq/pantalon-yoga-suave-hombre-blanco-tela-lino-algodon.jpg?format=auto&f=800x0"
    },
    {
        "id": 23,
        "nombre": "Zapatillas para bebés",
        "precio": 14.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/p2185449/k$4359dad6996446c0226b5009a5daa719/sq/zapatillas-gimnasia-primero-pasos-bebes-domyos-azul-tallas-20-al-24.jpg?format=auto&f=800x0"
    },
    {
        "id": 24,
        "nombre": "Raquetas de tenis",
        "precio": 79.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/p2558581/k$d202769442325f1bb9c71d9403f49364/sq/raqueta-de-tenis-adulto-babolat-pure-drive-300-gr.jpg?format=auto&f=800x0"
    },
    {
        "id": 25,
        "nombre": "Vestido deportivo para mujer",
        "precio": 39.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/p2456592/k$d1dc4cee3619320a65795ed49c776df8/sq/vestido-dry-soft-mujer-dry-negro.jpg?format=auto&f=800x0"
    },
    {
        "id": 26,
        "nombre": "Pantalones de jogging para hombre",
        "precio": 26.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/m4198202/k$76d70a148b62d7be4a55faf986b11ba6/sq/pantalon-chandal-jogging-pirata-hombre-gorilla-wear-knoxville-34-gris.jpg?format=auto&f=800x0"
    },
    {
        "id": 27,
        "nombre": "Conjunto de ropa para bebés",
        "precio": 19.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/m13587825/k$f4cfdd6956eef14476309ba93d4c9731/sq/conjunto-essentials-allover-print-bebe.jpg?format=auto&f=800x0"
    },
    {
        "id": 28,
        "nombre": "Dardo",
        "precio": 9.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/m11971723/k$48fc2cc0f0afa51c2234f0b28d72f34e/sq/dardos-target-agora-verde-av31.jpg?format=auto&f=800x0"
    },
    {
        "id": 29,
        "nombre": "Shorts deportivos para mujer",
        "precio": 19.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/m12493293/k$3af83f6e3eb2187c49add9ae56bfd422/sq/shorts-deportivos-de-mujer-kumari-born-living-yoga-con-efecto-moldeador.jpg?format=auto&f=800x0"
    },
    {
        "id": 30,
        "nombre": "Camiseta de manga larga para hombre",
        "precio": 27.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/p1745175/k$e873722ae40151800026fbb8ad56c5f1/sq/camiseta-termica-de-futbol-manga-larga-adulto-kipsta-keepdry-500-negra.jpg?format=auto&f=800x0"
    },
    {
        "id": 31,
        "nombre": "Calcetines para bebés",
        "precio": 14.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/p2056620/k$50c32ab8983b07619e3fe49d680efb2b/sq/calcetines-esqui-bebe-warm-turquesa.jpg?format=auto&f=800x0"
    },
    {
        "id": 32,
        "nombre": "Pelota de baloncesto",
        "precio": 12.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/p1907035/k$7b015b843aebec73c24465151684dfaf/sq/balon-de-baloncesto-talla-7-sp-molten-b7g-4500-naranja.jpg?format=auto&f=800x0"
    },
    {
        "id": 33,
        "nombre": "Leggings deportivos para mujer",
        "precio": 22.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/m13693326/k$53f0960028c5b0ac29993d3949a5160b/sq/leggings-mallas-deportivas-yingyang-78-de-mujer-black-limba-black.jpg?format=auto&f=800x0"
    },
    {
        "id": 34,
        "nombre": "Pantalones de mezclilla para hombre",
        "precio": 34.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/p298242/k$6ae2163ac64dbdcaae26ed826610383b/sq/pantalon-de-caza-hombre-solognac-steppe-300-verde-resistente-multibolsillos.jpg?format=auto&f=800x0"
    },
    {
        "id": 35,
        "nombre": "Conjunto de ropa para bebés",
        "precio": 18.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/m13074817/k$b604839c9bfa22f6facd634fe71e1957/sq/conjunto-deportivo-para-bebe-minicats-colourblock-puma-racing-blue.jpg?format=auto&f=800x0"
    },
    {
        "id": 36,
        "nombre": "Raqueta de bádminton",
        "precio": 29.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/p1563951/k$5e8047dff2ad683f9061598aff1af62f/sq/raqueta-de-badminton-perfly-br-160-adulto-negroverde.jpg?format=auto&f=800x0"
    },
    {
        "id": 37,
        "nombre": "Camiseta de gimnasio para mujer",
        "precio": 24.99,
        "categoria": "ropa mujer",
        "imagen": "https://contents.mediadecathlon.com/p2429240/k$67fdc74cbb8816a0c27c2c416bdd231d/sq/camiseta-sin-mangas-fitness-cardio-my-top-mujer-gris-jaspeado-espalda-natacion.jpg?format=auto&f=800x0"
    },
    {
        "id": 38,
        "nombre": "Pantalones cortos de playa para hombre",
        "precio": 17.95,
        "categoria": "ropa hombre",
        "imagen": "https://contents.mediadecathlon.com/p2385709/k$ca7b11b6c29080939e0e9ce8bb9fa6be/sq/pantalon-corto-hombre-star-by-gl-deportes-playa-azul.jpg?format=auto&f=800x0"
    },
    {
        "id": 39,
        "nombre": "Neopreno para bebés",
        "precio": 16.99,
        "categoria": "ropa infantil",
        "imagen": "https://contents.mediadecathlon.com/p2381121/k$b1ce1a51bc59500237813b641099219a/sq/neopreno-bebe-kloupi-anti-uv-verde.jpg?format=auto&f=800x0"
    },
    {
        "id": 40,
        "nombre": "Pelota de golf",
        "precio": 7.99,
        "categoria": "equipamiento",
        "imagen": "https://contents.mediadecathlon.com/m4849925/k$9b3b076b16b637d5ade2ba5fbe6da7ce/sq/pelota-de-golf-staff-model-x12-blanco.jpg?format=auto&f=800x0"
    }
]



export default products 