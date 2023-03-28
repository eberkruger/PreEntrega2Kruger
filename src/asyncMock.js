const products = [
    {
        id: 1,
        nombre: 'Apple iPhone 13 Pro',
        descripcion: 'Smartphone con pantalla OLED de 6,1", cámara triple de 12MP y 5G',
        detalles: 'Pantalla: pantalla Super Retina XDR de 6,1 pulgadas con resolución de 2532 x 1170 píxeles y tasa de refresco de 120 Hz. Procesador: chip A15 Bionic con Neural Engine de última generación para un rendimiento potente y eficiente. Cámara: sistema de triple cámara trasera de 12 MP con teleobjetivo, gran angular y ultra gran angular, y cámara frontal de 12 MP con tecnología TrueDepth.',
        categoria: 'Smartphones',
        precio: 1099,
        imgUrl: '../assets/id1/img1.jpg',
        stock: 10
    },
    {
        id: 2,
        nombre: 'Samsung Galaxy S23 Ultra',
        descripcion: 'Smartphone con pantalla AMOLED de 6,8", cámara cuádruple de 108MP y 5G',
        detalles: 'Cámara de 200+10+10 MP; sacá fotos nítidas y claras tanto de día como de noche. El Samsung Galaxy S23 Ultra posee un procesador Octa-Core (3.36GHz,2.8GHz,2GHz) para que disfrutes de todas tus aplicaciones sin inconvenientes. Memoria interna de 256 GB.',
        categoria: 'Smartphones',
        precio: 1199,
        imgUrl: '../assets/id2/img1.jpg',
        stock: 10
    },
    {
        id: 3,
        nombre: 'Lenovo Legion 5',
        descripcion: 'Portátil gaming con procesador AMD Ryzen 7, tarjeta gráfica NVIDIA GeForce RTX 3060 y pantalla de 15,6"',
        detalles: 'Potente rendimiento: cuenta con procesadores de última generación AMD Ryzen o Intel Core de hasta 11ª generación, y tarjetas gráficas NVIDIA GeForce GTX o RTX. Pantalla de alta calidad: ofrece una pantalla IPS de 15,6 o 17,3 pulgadas con resolución Full HD (1920 x 1080 píxeles) y una frecuencia de actualización de hasta 165 Hz. Sistema de enfriamiento avanzado. Diseño resistente: cuenta con un diseño robusto y duradero con chasis de aluminio y teclado retroiluminado con iluminación RGB.',
        categoria: 'Portátiles',
        precio: 1399,
        imgUrl: '../assets/id3/img1.jpg',
        stock: 10
    },
    {
        id: 4,
        nombre: 'Apple iPad Air',
        descripcion: 'Tableta con pantalla Liquid Retina de 10,9", chip A14 Bionic y soporte para Apple Pencil',
        detalles: 'Diseño delgado y ligero. Pantalla de alta calidad: Ofrece una pantalla Retina de 10,9 pulgadas con resolución de 2360 x 1640 píxeles. Potente rendimiento: Está equipado con el chip A14 Bionic de Apple, que ofrece un rendimiento rápido y eficiente en la gestión de aplicaciones y juegos. Conectividad avanzada: Ofrece conectividad Wi-Fi 6 y 4G LTE.',
        categoria: 'Tabletas',
        precio: 599,
        imgUrl: '../assets/id4/img1.jpg',
        stock: 10
    },
    {
        id: 5,
        nombre: 'Sony WH-1000XM4',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido, control táctil y batería de hasta 30 horas',
        detalles: 'ANC avanzada: cancelación activa de ruido líder en la industria. Audio de alta resolución: calidad de sonido excepcional con tecnología DSEE Extreme. Diseño ergonómico: diadema ajustable y almohadillas suaves para mayor comodidad. Funciones inteligentes: control táctil, asistentes de voz y conectividad Bluetooth multipunto.',
        categoria: 'Auriculares',
        precio: 349,
        imgUrl: '../assets/id5/img1.jpg',
        stock: 10
    },
    {
        id: 6,
        nombre: 'LG EVO OLED',
        descripcion: 'Televisor OLED de 55" con resolución 4K, soporte para HDR y Dolby Vision, y sistema operativo webOS',
        detalles: 'Pantalla OLED: ofrece negros perfectos, colores vibrantes y contraste infinito. Procesador α9 Gen 4 AI: mejora la calidad de imagen y sonido mediante el aprendizaje automático. Modo Filmmaker: muestra películas como el director las imaginó. Diseño elegante: diseño delgado y minimalista con marcos ultrafinos y soporte central.',
        categoria: 'Televisores',
        precio: 1799,
        imgUrl: '../assets/id6/img1.jpg',
        stock: 10
    },
    {
        id: 7,
        nombre: 'Samsung Galaxy Z Fold 3',
        descripcion: 'Smartphone plegable con pantalla principal de 7,6", pantalla secundaria de 6,2", cámara triple y 5G',
        detalles: 'Pantalla plegable: una pantalla interna de 7,6 pulgadas y una pantalla externa de 6,2 pulgadas, ambas con tecnología AMOLED. Cámara de alta calidad: triple cámara trasera de 12 MP, cámara frontal de 10 MP y cámara interna de 4 MP para videollamadas. Potente rendimiento: equipado con un procesador Snapdragon 888, 12 GB de RAM. Resistente al agua y al polvo.',
        categoria: 'Smartphones',
        precio: 1799,
        imgUrl: '../assets/id7/img1.jpg',
        stock: 10
    },
    {
        id: 8,
        nombre: 'Dell XPS 13',
        descripcion: 'Portátil con procesador Intel Core i7, pantalla Full HD de 13,4", 16GB de RAM y SSD de 512GB',
        detalles: 'Pantalla de borde a borde: pantalla InfinityEdge de 13,4 pulgadas con resolución FHD+ o UHD+. Diseño compacto: diseño delgado y ligero con chasis de aluminio y fibra de carbono. Potente rendimiento: procesador Intel Core i5 o i7 de 11ª generación, hasta 16 GB de RAM y hasta 1 TB de almacenamiento SSD. Duración de la batería: hasta 14 horas de duración de la batería con carga rápida.',
        categoria: 'Portátiles',
        precio: 1399,
        imgUrl: '../assets/id8/img1.jpg',
        stock: 10
    },
    {
        id: 9,
        nombre: 'Samsung Galaxy Tab S7+',
        descripcion: 'Tableta con pantalla Super AMOLED de 12,4", S Pen incluido y 5G',
        detalles: 'Pantalla Super AMOLED: pantalla de 12,4 pulgadas con resolución de 2800 x 1752 píxeles. Potente rendimiento: procesador Qualcomm Snapdragon 865+, hasta 8 GB de RAM y hasta 256 GB de almacenamiento interno. Cámaras de alta calidad: cámara trasera de 13 MP y cámara frontal de 8 MP. Batería de larga duración: batería de 10,090 mAh con carga rápida de 45 W y carga inalámbrica inversa.',
        categoria: 'Tabletas',
        precio: 849,
        imgUrl: '../assets/id9/img1.jpg',
        stock: 10
    },
    {
        id: 10,
        nombre: 'Bose QuietComfort Earbuds',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido y resistencia al sudor y la lluvia',
        detalles: 'Cancelación de ruido activa: tecnología avanzada de cancelación de ruido que bloquea el ruido externo. Sonido de alta calidad: calidad de sonido excepcional gracias a los controladores acústicos de alto rendimiento y la ecualización activa. Diseño cómodo y seguro: ajuste seguro y cómodo con puntas de silicona StayHear Max.',
        categoria: 'Auriculares',
        precio: 279,
        imgUrl: '../assets/id10/img1.jpg',
        stock: 10
    },
    {
        id: 11,
        nombre: 'Sony BRAVIA XR A80J',
        descripcion: 'Televisor OLED de 65" con resolución 4K, soporte para HDR y Dolby Vision, y sistema operativo Google TV',
        detalles: 'Pantalla OLED: pantalla OLED de 4K con resolución de 3840 x 2160 píxeles. Procesador Cognitive XR: procesador avanzado de Sony que optimiza la imagen y el sonido en tiempo real. Tecnología de sonido envolvente: sonido Dolby Atmos para una experiencia de sonido envolvente. Sistema operativo Android TV.',
        categoria: 'Televisores',
        precio: 2499,
        imgUrl: '../assets/id11/img1.jpg',
        stock: 10
    },
    {
        id: 12,
        nombre: 'iPhone SE (2020)',
        descripcion: 'Smartphone con pantalla Retina de 4,7", cámara de 12MP y procesador A13 Bionic',
        detalles: 'Pantalla Retina: pantalla Retina HD de 4,7 pulgadas con resolución de 1334 x 750 píxeles. Procesador A13 Bionic: procesador avanzado que ofrece un rendimiento rápido y eficiente. Cámara de alta calidad: cámara trasera de 12 MP y cámara frontal de 7 MP con modo retrato y efectos de iluminación. Touch ID.',
        categoria: 'Smartphones',
        precio: 399,
        imgUrl: '../assets/id12/img1.jpg',
        stock: 10
    },
    {
        id: 13,
        nombre: 'HP Spectre x360',
        descripcion: 'Portátil 2 en 1 con procesador Intel Core i7, pantalla táctil Full HD de 13,3" y 16GB de RAM',
        detalles: 'Pantalla táctil: pantalla táctil de 13,3 pulgadas con resolución Full HD o 4K. Diseño convertible: diseño 2 en 1 con bisagra de 360 grados para usar como laptop o tableta. Potente rendimiento: procesadores Intel Core de última generación, hasta 16 GB de RAM y hasta 2 TB de almacenamiento SSD. Batería de larga duración.',
        categoria: 'Portátiles',
        precio: 1499,
        imgUrl: '../assets/id13/img1.jpg',
        stock: 10
    },
    {
        id: 14,
        nombre: 'iPad Pro',
        descripcion: 'Tableta con pantalla Liquid Retina XDR de 12,9", chip M1 y soporte para Apple Pencil y Magic Keyboard',
        detalles: 'Pantalla Liquid Retina: pantalla Liquid Retina de 11 o 12,9 pulgadas con tecnología ProMotion. Potente rendimiento: procesador A12Z Bionic de Apple, hasta 1 TB de almacenamiento interno y hasta 6 GB de RAM. Cámara de alta calidad: cámara trasera de 12 MP con escáner LiDAR para mejorar la realidad aumentada y cámara frontal de 7 MP TrueDepth. Seguridad y privacidad: Touch ID o Face ID.',
        categoria: 'Tabletas',
        precio: 1099,
        imgUrl: '../assets/id14/img1.jpg',
        stock: 10
    },
    {
        id: 15,
        nombre: 'Sony WF-1000XM3',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido, control táctil y batería de hasta 30 horas',
        detalles: 'Cancelación de ruido: tecnología de cancelación de ruido activa para reducir el ruido ambiental. Calidad de sonido: calidad de sonido superior con los controladores HD de 6 mm y el procesador QN1e de Sony. Batería de larga duración: hasta 6 horas de duración de la batería con una sola carga y hasta 24 horas con el estuche de carga.',
        categoria: 'Auriculares',
        precio: 249,
        imgUrl: '../assets/id15/img1.jpg',
        stock: 10
    },
    {
        id: 16,
        nombre: 'LG NanoCell 90',
        descripcion: 'Televisor LED de 65" con resolución 4K, soporte para HDR y Dolby Vision, y sistema operativo webOS',
        detalles: 'Pantalla NanoCell: tecnología de pantalla NanoCell de LG que utiliza nanopartículas para mejorar la calidad de imagen y el color. Resolución 4K: resolución de pantalla Ultra HD 4K para imágenes más nítidas y detalladas. Procesador avanzado: procesador a7 Gen 4 AI de LG para mejorar la calidad de imagen y sonido. Sonido inmersivo: sonido envolvente con altavoces incorporados y soporte para Dolby Atmos.',
        categoria: 'Televisores',
        precio: 1299,
        imgUrl: '../assets/id16/img1.jpg',
        stock: 10
    },
    {
        id: 17,
        nombre: 'Google Pixel 6',
        descripcion: 'Smartphone con pantalla AMOLED de 6,4", cámara dual de 50MP y 5G',
        detalles: 'Pantalla AMOLED: pantalla AMOLED de 6,4 pulgadas con resolución de 2400 x 1080 píxeles. Procesador de última generación: procesador Google Tensor personalizado para mejorar el rendimiento y la inteligencia artificial del dispositivo. Cámara avanzada: cámara trasera dual con un sensor principal de 50 MP y un sensor de ultra gran angular de 12 MP, además de una cámara frontal de 8 MP.',
        categoria: 'Smartphones',
        precio: 799,
        imgUrl: '../assets/id17/img1.jpg',
        stock: 10
    },
    {
        id: 18,
        nombre: 'Asus ROG Zephyrus G14',
        descripcion: 'Portátil gaming con procesador AMD Ryzen 9, tarjeta gráfica NVIDIA GeForce RTX 3060 y pantalla de 14"',
        detalles: 'Procesador de alta gama: procesador AMD Ryzen 9 5900HS de 8 núcleos para un rendimiento de alta gama. Gráficos NVIDIA: tarjeta gráfica NVIDIA GeForce RTX 3060 para juegos y aplicaciones de alta intensidad gráfica. Pantalla de alta calidad: pantalla Full HD de 14 pulgadas con una tasa de refresco de 120 Hz y tecnología Adaptive Sync.',
        categoria: 'Portátiles',
        precio: 1799,
        imgUrl: '../assets/id18/img1.jpg',
        stock: 10
    },
    {
        id: 19,
        nombre: 'Samsung Galaxy Tab A7',
        descripcion: 'Tableta con pantalla LCD de 10,4", procesador Qualcomm Snapdragon y 3GB de RAM',
        detalles: 'Pantalla: pantalla de 10,4 pulgadas con resolución de 2000 x 1200 píxeles. Sonido envolvente: sonido envolvente Dolby Atmos con cuatro altavoces para una experiencia de audio inmersiva. Rendimiento: procesador de ocho núcleos y 3 GB de RAM para un rendimiento fluido y rápido. Batería de larga duración: batería de 7,040 mAh para una duración de hasta 13 horas de uso continuo.',
        categoria: 'Tabletas',
        precio: 239,
        imgUrl: '../assets/id19/img1.jpg',
        stock: 10
    },
    {
        id: 20,
        nombre: 'Apple AirPods Pro',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido, resistencia al sudor y la lluvia, y carga inalámbrica',
        detalles: 'Cancelación activa de ruido. Modo de sonido ambiente. Diseño ergonómico con puntas de silicona en tres tamaños diferentes. Estuche de carga inalámbrico y autonomía de la batería de hasta 4,5 horas de tiempo de escucha continua.',
        categoria: 'Auriculares',
        precio: 249,
        imgUrl: '../assets/id20/img1.jpg',
        stock: 10
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 0)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 0)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 0)
    })
}