module.exports = {
  async execute(req) {
    const { year, brand } = req.body;

    try {
      const resultado = [
        {
          id: 1,
          img: "https://cdn.motor1.com/images/mgl/g4JXpN/s3/avaliacao-fiat-argo-trekking-cvt-2023-dianteira.jpg",
          marca: "Fiat",
          modelo: "Argo",
          ano: "2020/2021",
          km: 30807,
          cambio: "Manual",
          valor: 63290,
        },
        {
          id: 2,
          img: "https://tecmania.com.br/wp-content/uploads/2024/02/Magnifico-Ford-Fusion-2024-sobe-a-regua-dos-sedans-com-inovacao-e-design-830x450.jpg.webp",
          marca: "Ford",
          modelo: "Fusion",
          ano: "2023/2024",
          km: 1600,
          cambio: "Automático",
          valor: 124290,
        },
        {
          id: 3,
          img: "https://cdn.motor1.com/images/mgl/rv6v6/s1/volkswagen-golf-8-gti-clubsport-2021.jpg",
          marca: "Wolksvagen",
          modelo: "Golf",
          ano: "2020",
          km: 22000,
          cambio: "Manual",
          valor: 74290,
        },
        {
          id: 4,
          img: "https://quatrorodas.abril.com.br/wp-content/uploads/2024/01/03_COROLLA_2024_1FLP4760.jpg?quality=70&strip=info",
          marca: "Toyota",
          modelo: "Corolla",
          ano: "2023/2024",
          km: 8000,
          cambio: "Automático",
          valor: 150290,
        },
        {
          id: 5,
          img: "https://cdn.motor1.com/images/mgl/P3gRkX/s1/jeep-compass-2024---europa.webp",
          marca: "Geep",
          modelo: "Compass",
          ano: "2018/2019",
          km: 8000,
          cambio: "Automático",
          valor: 84290,
        },
        {
          id: 6,
          img: "https://cdn.motor1.com/images/mgl/g4JXpN/s3/avaliacao-fiat-argo-trekking-cvt-2023-dianteira.jpg",
          marca: "Fiat",
          modelo: "Argo",
          ano: "2017",
          km: 45807,
          cambio: "Manual",
          valor: 63290,
        },
        {
          id: 7,
          img: "https://tecmania.com.br/wp-content/uploads/2024/02/Magnifico-Ford-Fusion-2024-sobe-a-regua-dos-sedans-com-inovacao-e-design-830x450.jpg.webp",
          marca: "Ford",
          modelo: "Fusion",
          ano: "2023/2024",
          km: 82000,
          cambio: "Automático",
          valor: 105290,
        },
        {
          id: 8,
          img: "https://cdn.motor1.com/images/mgl/rv6v6/s1/volkswagen-golf-8-gti-clubsport-2021.jpg",
          marca: "Wolksvagen",
          modelo: "Golf",
          ano: "2021",
          km: 54000,
          cambio: "Manual",
          valor: 63290,
        },
        {
          id: 9,
          img: "https://quatrorodas.abril.com.br/wp-content/uploads/2024/01/03_COROLLA_2024_1FLP4760.jpg?quality=70&strip=info",
          marca: "Toyota",
          modelo: "Corolla",
          ano: "2023/2024",
          km: 12000,
          cambio: "Automático",
          valor: 124290,
        },
        {
          id: 10,
          img: "https://cdn.motor1.com/images/mgl/P3gRkX/s1/jeep-compass-2024---europa.webp",
          marca: "Geep",
          modelo: "Compass",
          ano: "2023/2024",
          km: 15000,
          cambio: "Automático",
          valor: 90290,
        },
      ];

      return resultado;
    } catch (err) {
      process.exit(1);
    }
  },
};
