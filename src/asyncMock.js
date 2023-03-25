const productos = [
    {
        id: 1,
        nombre: 'Apple iPhone 13 Pro',
        descripcion: 'Smartphone con pantalla OLED de 6,1", cámara triple de 12MP y 5G',
        categoria: 'Smartphones',
        precio: 1099,
        img: './assets/id1/img1.jpg'
    },
    {
        id: 2,
        nombre: 'Samsung Galaxy S23 Ultra',
        descripcion: 'Smartphone con pantalla AMOLED de 6,8", cámara cuádruple de 108MP y 5G',
        categoria: 'Smartphones',
        precio: 1199,
        img: './assets/id2/img1.jpg'
    },
    {
        id: 3,
        nombre: 'Lenovo Legion 5',
        descripcion: 'Portátil gaming con procesador AMD Ryzen 7, tarjeta gráfica NVIDIA GeForce RTX 3060 y pantalla de 15,6"',
        categoria: 'Portátiles',
        precio: 1399,
        img: './assets/id3/img1.jpg'
    },
    {
        id: 4,
        nombre: 'Apple iPad Air',
        descripcion: 'Tableta con pantalla Liquid Retina de 10,9", chip A14 Bionic y soporte para Apple Pencil',
        categoria: 'Tabletas',
        precio: 599,
        img: './assets/id4/img1.jpg'
    },
    {
        id: 5,
        nombre: 'Sony WH-1000XM4',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido, control táctil y batería de hasta 30 horas',
        categoria: 'Auriculares',
        precio: 349,
        img: './assets/id5/img1.jpg'
    },
    {
        id: 6,
        nombre: 'LG EVO OLED',
        descripcion: 'Televisor OLED de 55" con resolución 4K, soporte para HDR y Dolby Vision, y sistema operativo webOS',
        categoria: 'Televisores',
        precio: 1799,
        img: './assets/id6/img1.jpg'
    },
    {
        id: 7,
        nombre: 'Samsung Galaxy Z Fold 3',
        descripcion: 'Smartphone plegable con pantalla principal de 7,6", pantalla secundaria de 6,2", cámara triple y 5G',
        categoria: 'Smartphones',
        precio: 1799,
        img: './assets/id7/img1.jpg'
    },
    {
        id: 8,
        nombre: 'Dell XPS 13',
        descripcion: 'Portátil con procesador Intel Core i7, pantalla Full HD de 13,4", 16GB de RAM y SSD de 512GB',
        categoria: 'Portátiles',
        precio: 1399,
        img: './assets/id8/img1.jpg'
    },
    {
        id: 9,
        nombre: 'Samsung Galaxy Tab S7+',
        descripcion: 'Tableta con pantalla Super AMOLED de 12,4", S Pen incluido y 5G',
        categoria: 'Tabletas',
        precio: 849,
        img: './assets/id9/img1.jpg'
    },
    {
        id: 10,
        nombre: 'Bose QuietComfort Earbuds',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido y resistencia al sudor y la lluvia',
        categoria: 'Auriculares',
        precio: 279,
        img: './assets/id10/img1.jpg'
    },
    {
        id: 11,
        nombre: 'Sony BRAVIA XR A80J',
        descripcion: 'Televisor OLED de 65" con resolución 4K, soporte para HDR y Dolby Vision, y sistema operativo Google TV',
        categoria: 'Televisores',
        precio: 2499,
        img: './assets/id11/img1.jpg'
    },
    {
        id: 12,
        nombre: 'iPhone SE (2020)',
        descripcion: 'Smartphone con pantalla Retina de 4,7", cámara de 12MP y procesador A13 Bionic',
        categoria: 'Smartphones',
        precio: 399,
        img: './assets/id12/img1.jpg'
    },
    {
        id: 13,
        nombre: 'HP Spectre x360',
        descripcion: 'Portátil 2 en 1 con procesador Intel Core i7, pantalla táctil Full HD de 13,3" y 16GB de RAM',
        categoria: 'Portátiles',
        precio: 1499,
        img: './assets/id13/img1.jpg'
    },
    {
        id: 14,
        nombre: 'iPad Pro',
        descripcion: 'Tableta con pantalla Liquid Retina XDR de 12,9", chip M1 y soporte para Apple Pencil y Magic Keyboard',
        categoria: 'Tabletas',
        precio: 1099,
        img: './assets/id14/img1.jpg'
    },
    {
        id: 15,
        nombre: 'Sony WF-1000XM3',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido, control táctil y batería de hasta 30 horas',
        categoria: 'Auriculares',
        precio: 249,
        img: './assets/id15/img1.jpg'
    },
    {
        id: 16,
        nombre: 'LG NanoCell 90',
        descripcion: 'Televisor LED de 65" con resolución 4K, soporte para HDR y Dolby Vision, y sistema operativo webOS',
        categoria: 'Televisores',
        precio: 1299,
        img: './assets/id16/img1.jpg'
    },
    {
        id: 17,
        nombre: 'Google Pixel 6',
        descripcion: 'Smartphone con pantalla AMOLED de 6,4", cámara dual de 50MP y 5G',
        categoria: 'Smartphones',
        precio: 799,
        img: './assets/id17/img1.jpg'
    },
    {
        id: 18,
        nombre: 'Asus ROG Zephyrus G14',
        descripcion: 'Portátil gaming con procesador AMD Ryzen 9, tarjeta gráfica NVIDIA GeForce RTX 3060 y pantalla de 14"',
        categoria: 'Portátiles',
        precio: 1799,
        img: './assets/id18/img1.jpg'
    },
    {
        id: 19,
        nombre: 'Samsung Galaxy Tab A7',
        descripcion: 'Tableta con pantalla LCD de 10,4", procesador Qualcomm Snapdragon y 3GB de RAM',
        categoria: 'Tabletas',
        precio: 239,
        img: './assets/id19/img1.jpg'
    },
    {
        id: 20,
        nombre: 'Apple AirPods Pro',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido, resistencia al sudor y la lluvia, y carga inalámbrica',
        categoria: 'Auriculares',
        precio: 249,
        img: './assets/id20/img1.jpg'
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1500)
    })
}