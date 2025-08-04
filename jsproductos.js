const plantas = [
  {
    nombre: "Madroño",
    imagen: "img/madrono.jpg",
    descripcion: "Árbol nacional de Nicaragua, con flores blancas fragantes que decoran los altares de La Purísima.",
    detalles: [
      "Familia: Rubiaceae.",
      "Altura: 15–20 m, corteza rojiza exfoliante, flores blancas en racimos.",
      "Distribución: Bosques secos y tropicales del Pacífico centroamericano.",
      "Ambiente óptimo: Suelo bien drenado, 0–800 m, clima cálido seco/templado."
    ]
  },
  {
    nombre: "Flor Nacional (Plumeria rubra)",
    imagen: "img/plumeria.jpg",
    descripcion: "Arbusto o pequeño árbol con flores muy perfumadas, símbolo floral de Nicaragua.",
    detalles: [
      "Familia: Apocynaceae.",
      "Altura: típicamente 5–8 m (hasta 25 m).",
      "Distribución: Originaria de México y Centroamérica.",
      "Ambiente óptimo: Suelo ligero, pleno sol, clima cálido tropical."
    ]
  },
  {
    nombre: "Chufles",
    imagen: "img/chufles.jpg",
    descripcion: "Planta de follaje ornamentado con hojas grandes y rayas amarillas sobre verde, originaria de Centroamérica.",
    detalles: [
      "Familia: Marantaceae.",
      "Altura: 0.6–1.8 m; rizoma subterráneo.",
      "Distribución: Bosques húmedos de 0–1100 m.",
      "Ambiente óptimo: Alta humedad, sombra parcial, suelo rico."
    ]
  },
  {
    nombre: "Loroco (Fernaldia pandurata)",
    imagen: "img/loroco.jpg",
    descripcion: "Enredadera cuyas flores aromáticas comestibles son muy apreciadas en la cocina centroamericana.",
    detalles: [
      "Familia: Apocynaceae.",
      "Hojas oblongas, opuestas, 4–22 cm de largo.",
      "Distribución: América Central (Nicaragua, El Salvador, Guatemala).",
      "Ambiente óptimo: Clima cálido húmedo, sombra parcial, suelo orgánico bien drenado, con soporte para trepar."
    ]
  },
  {
    nombre: "Limón (Citrus × limon)",
    imagen: "img/limon.jpg",
    descripcion: "Árbol de cítrico ácido muy usado en cocina y medicina natural, resistente y de rápido crecimiento.",
    detalles: [
      "Familia: Rutaceae.",
      "Árbol de 3–6 m típicamente.",
      "Distribución: Cultivado en zonas tropicales y subtropicales.",
      "Ambiente óptimo: Clima cálido, pleno sol, suelo bien drenado, riego regular sin encharcar."
    ]
  },
  {
    nombre: "Aguacate (Persea americana)",
    imagen: "img/aguacate.jpg",
    descripcion: "Árbol de sombra y fruto nutritivo con grasas saludables, muy popular en huertos familiares.",
    detalles: [
      "Familia: Lauraceae.",
      "Árbol potencialmente mayor a 10 m.",
      "Distribución: Mesoamérica, nativo en Nicaragua.",
      "Ambiente óptimo: Clima cálido húmedo/subhúmedo, suelos neutros a ligeramente ácidos, buen drenaje."
    ]
  },
  {
    nombre: "Papaya (Carica papaya)",
    imagen: "img/papaya.jpg",
    descripcion: "Planta herbácea con frutos grandes, dulces, ricos en vitamina C y papaína.",
    detalles: [
      "Familia: Caricaceae.",
      "Altura: hasta 10 m (tallo suculento).",
      "Distribución: Cultivada en zonas tropicales, común en Nicaragua.",
      "Ambiente óptimo: Clima cálido, pleno sol, suelo fértil y bien drenado, evitar frío/exceso de humedad."
    ]
  },
  {
    nombre: "Mango (Mangifera indica)",
    imagen: "img/mango.jpg",
    descripcion: "Árbol frutal de gran porte, frutos dulces o ácidos según variedad, muy apreciado localmente.",
    detalles: [
      "Familia: Anacardiaceae.",
      "Árbol que puede superar los 10–20 m.",
      "Distribución: Originario del sudeste asiático, adaptado al trópico americano.",
      "Ambiente óptimo: Clima cálido seco o húmedo, pleno sol, suelo profundo, tolera sequías moderadas."
    ]
  },
  {
    nombre: "Naranja agria (Citrus aurantium)",
    imagen: "img/naranja_agria.jpg",
    descripcion: "Árbol cítrico tradicional, usado en refrescos, adobos y medicina casera.",
    detalles: [
      "Familia: Rutaceae.",
      "Altura: 4–8 m.",
      "Distribución: Introducida desde Asia y naturalizada en Centroamérica.",
      "Ambiente óptimo: Clima cálido tropical, pleno sol, suelos pobres a moderadamente fértiles, riego moderado."
    ]
  },
  {
    nombre: "Guayaba (Psidium guajava)",
    imagen: "img/guayaba.jpg",
    descripcion: "Árbol pequeño con frutos dulces o agridulces muy apreciados en jugos y dulces.",
    detalles: [
      "Familia: Myrtaceae.",
      "Arbusto o árbol de hasta 6–10 m.",
      "Distribución: América tropical, común en Nicaragua.",
      "Ambiente óptimo: Pleno sol, suelo bien drenado, resistente a sequía moderada."
    ]
  },
  {
    nombre: "Tamarindo (Tamarindus indica)",
    imagen: "img/tamarindo.jpg",
    descripcion: "Árbol de sombra de crecimiento lento con vainas comestibles de sabor ácido.",
    detalles: [
      "Familia: Fabaceae.",
      "Altura: hasta 20 m, copa extendida.",
      "Distribución: África tropical, naturalizado en Nicaragua.",
      "Ambiente óptimo: Clima seco o húmedo tropical, pleno sol, suelo profundo y bien drenado."
    ]
  },
  {
    nombre: "Guanábana (Annona muricata)",
    imagen: "img/guanabana.jpg",
    descripcion: "Árbol de frutos grandes, suaves y aromáticos, valorado por sabor y propiedades medicinales.",
    detalles: [
      "Familia: Annonaceae.",
      "Altura: 5–7 m.",
      "Distribución: América tropical, cultivada en Nicaragua.",
      "Ambiente óptimo: Clima cálido húmedo, suelos fértiles y bien drenados, protección contra vientos fuertes."
    ]
  },
  {
    nombre: "Maracuyá (Passiflora edulis)",
    imagen: "img/maracuya.jpg",
    descripcion: "Enredadera vigorosa con flores exóticas y frutos aromáticos usados en jugos y postres.",
    detalles: [
      "Familia: Passifloraceae.",
      "Enredadera que necesita tutor, hojas lobuladas.",
      "Distribución: América tropical y subtropical, cultivada en Nicaragua.",
      "Ambiente óptimo: Clima cálido subhúmedo, pleno sol o sombra parcial, suelo húmedo bien drenado."
    ]
  },
  {
    nombre: "Zapote (Pouteria sapota)",
    imagen: "img/zapote.jpg",
    descripcion: "Árbol con frutos grandes de pulpa anaranjada, suave y muy dulce, ideal para batidos y postres.",
    detalles: [
      "Familia: Sapotaceae.",
      "Altura: 8–20 m, a veces más.",
      "Distribución: Mesoamérica, de México a Nicaragua.",
      "Ambiente óptimo: Clima tropical húmedo, altitud 0–800 m (hasta 1,400 m), suelo profundo, fértil y bien drenado."
    ]
  },
  {
    nombre: "Cactus de Navidad (Schlumbergera truncata)",
    imagen: "img/cactus_navidad.jpg",
    descripcion: "Cactus colgante que florece en invierno con tonos rosados, rojos o blancos.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 30 cm.",
      "Distribución: Brasil tropical.",
      "Ambiente óptimo: Semi sombra, suelos bien drenados, ambientes húmedos tropicales."
    ]
  },
  {
    nombre: "Aloe Vera (Aloe barbadensis miller)",
    imagen: "img/aloe_vera.jpg",
    descripcion: "Planta suculenta conocida por su gel con propiedades medicinales.",
    detalles: [
      "Familia: Asphodelaceae.",
      "Altura: 60–100 cm.",
      "Distribución: Norte de África, ampliamente cultivada.",
      "Ambiente óptimo: Suelo arenoso, pleno sol, clima seco o semiárido."
    ]
  },
  {
    nombre: "Rosa de Siria (Hibiscus syriacus)",
    imagen: "img/hibiscus_syriacus.jpg",
    descripcion: "Arbusto ornamental con flores vistosas y colores variados.",
    detalles: [
      "Familia: Malvaceae.",
      "Altura: 2–4 m.",
      "Distribución: Asia del Este.",
      "Ambiente óptimo: Suelo fértil, pleno sol, clima tropical y subtropical."
    ]
  },
  {
    nombre: "Palma Areca (Dypsis lutescens)",
    imagen: "img/palma_areca.jpg",
    descripcion: "Palma ornamental de rápido crecimiento ideal para interiores y jardines.",
    detalles: [
      "Familia: Arecaceae.",
      "Altura: 1.5–6 m.",
      "Distribución: Madagascar.",
      "Ambiente óptimo: Semi sombra, suelos húmedos bien drenados, climas cálidos."
    ]
  },
  {
    nombre: "Espina de Cristo (Euphorbia milii)",
    imagen: "img/euphorbia_milii.jpg",
    descripcion: "Suculenta con espinas y flores rojas o rosadas todo el año.",
    detalles: [
      "Familia: Euphorbiaceae.",
      "Altura: 30–150 cm.",
      "Distribución: Madagascar.",
      "Ambiente óptimo: Pleno sol, clima cálido, suelo arenoso bien drenado."
    ]
  },
  {
    nombre: "Sansevieria (Sansevieria trifasciata)",
    imagen: "img/sansevieria.jpg",
    descripcion: "Planta de interior resistente con hojas verticales y rayadas.",
    detalles: [
      "Familia: Asparagaceae.",
      "Altura: hasta 1 m.",
      "Distribución: África tropical occidental.",
      "Ambiente óptimo: Interior con poca luz, suelo seco, resistente a sequías."
    ]
  },
  {
    nombre: "Lengua de suegra tricolor (Sansevieria trifasciata 'Laurentii')",
    imagen: "img/sansevieria_tricolor.jpg",
    descripcion: "Variedad de sansevieria con bordes dorados y hojas erectas.",
    detalles: [
      "Familia: Asparagaceae.",
      "Altura: 60–100 cm.",
      "Distribución: Cultivar ornamental.",
      "Ambiente óptimo: Luz filtrada o directa, poco riego, suelo arenoso."
    ]
  },
  {
    nombre: "Corona de novia (Spiraea spp.)",
    imagen: "img/corona_novia.jpg",
    descripcion: "Arbusto decorativo con racimos de pequeñas flores blancas.",
    detalles: [
      "Familia: Rosaceae.",
      "Altura: 1–2.5 m.",
      "Distribución: Asia, Europa.",
      "Ambiente óptimo: Suelo bien drenado, sol parcial, clima templado."
    ]
  },
  {
    nombre: "Crotón (Codiaeum variegatum)",
    imagen: "img/croton.jpg",
    descripcion: "Arbusto de colores intensos y hojas multicolores llamativas.",
    detalles: [
      "Familia: Euphorbiaceae.",
      "Altura: 60–180 cm.",
      "Distribución: Indonesia, Malasia, Filipinas.",
      "Ambiente óptimo: Clima cálido, pleno sol o media sombra, suelo fértil."
    ]
  },
  {
    nombre: "Duranta (Duranta erecta)",
    imagen: "img/duranta.jpg",
    descripcion: "Arbusto con flores lilas o azules y frutos dorados.",
    detalles: [
      "Familia: Verbenaceae.",
      "Altura: 2–4 m.",
      "Distribución: América tropical.",
      "Ambiente óptimo: Pleno sol, suelos fértiles, clima cálido-húmedo."
    ]
  },
  {
    nombre: "Coleus (Plectranthus scutellarioides)",
    imagen: "img/coleus.jpg",
    descripcion: "Planta de follaje colorido con gran variedad de patrones.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–90 cm.",
      "Distribución: Asia tropical.",
      "Ambiente óptimo: Sombra parcial, suelo húmedo pero bien drenado."
    ]
  },
  {
    nombre: "Lavanda (Lavandula angustifolia)",
    imagen: "img/lavanda.jpg",
    descripcion: "Planta aromática con flores violetas y propiedades relajantes.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–80 cm.",
      "Distribución: Región mediterránea.",
      "Ambiente óptimo: Pleno sol, suelo alcalino y bien drenado."
    ]
  },
  {
    nombre: "Bugambilia (Bougainvillea glabra)",
    imagen: "img/bugambilia.jpg",
    descripcion: "Trepadora con flores vistosas en tonos fucsia, blanco o naranja.",
    detalles: [
      "Familia: Nyctaginaceae.",
      "Altura: Hasta 10 m (trepadora).",
      "Distribución: Sudamérica tropical.",
      "Ambiente óptimo: Pleno sol, clima cálido seco, suelo fértil y drenado."
    ]
  },
  {
    nombre: "Helecho espada (Nephrolepis exaltata)",
    imagen: "img/helecho.jpg",
    descripcion: "Planta colgante de hojas verdes arqueadas ideal para interiores.",
    detalles: [
      "Familia: Lomariopsidaceae.",
      "Altura: Hasta 90 cm.",
      "Distribución: América tropical.",
      "Ambiente óptimo: Sombra o luz difusa, humedad alta, suelo rico en materia orgánica."
    ]
  },
  {
    nombre: "Menta (Mentha spicata)",
    imagen: "img/menta.jpg",
    descripcion: "Planta aromática usada en cocina y medicina natural.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–90 cm.",
      "Distribución: Europa y Asia.",
      "Ambiente óptimo: Semi sombra, suelos húmedos y fértiles."
    ]
  },
  {
    nombre: "Orégano (Origanum vulgare)",
    imagen: "img/oregano.jpg",
    descripcion: "Hierba aromática de uso culinario y propiedades medicinales.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–60 cm.",
      "Distribución: Región mediterránea.",
      "Ambiente óptimo: Pleno sol, suelo seco y bien drenado."
    ]
  },
  {
    nombre: "Zinnia (Zinnia elegans)",
    imagen: "img/zinnia.jpg",
    descripcion: "Planta anual de flores vibrantes en múltiples colores.",
    detalles: [
      "Familia: Asteraceae.",
      "Altura: 30–100 cm.",
      "Distribución: México y América Central.",
      "Ambiente óptimo: Pleno sol, suelos bien drenados."
    ]
  },
  {
    nombre: "Cactus orejas de conejo (Opuntia microdasys)",
    imagen: "img/opuntia.jpg",
    descripcion: "Cactus plano con espinas finas en forma de almohadillas.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: Hasta 60 cm.",
      "Distribución: México.",
      "Ambiente óptimo: Pleno sol, suelos arenosos, clima seco."
    ]
  },
  {
    nombre: "Cactus erizo dorado (Echinocactus grusonii)",
    imagen: "img/echinocactus.jpg",
    descripcion: "Cactus globoso con espinas doradas, muy ornamental.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: Hasta 1 m.",
      "Distribución: México.",
      "Ambiente óptimo: Sol directo, suelo pedregoso, clima árido."
    ]
  },
  {
    nombre: "Cilantro (Coriandrum sativum)",
    imagen: "img/cilantro.jpg",
    descripcion: "Hierba de aroma fuerte usada en la cocina tradicional nicaragüense.",
    detalles: [
      "Familia: Apiaceae.",
      "Altura: 30–50 cm.",
      "Distribución: Región mediterránea y Asia.",
      "Ambiente óptimo: Suelos húmedos, pleno sol o sombra ligera."
    ]
  },
  {
    nombre: "Nopalillo de Jinotega (Disocactus aurantiacus)",
    imagen: "img/disocactus_aurantiacus.jpg",
    descripcion: "Cactus epífito colgante con flores amarillas a naranja muy llamativas.",
    detalles: [
      "Familia: Cactaceae.",
      "Tallos aplastados de hasta 1 m, flores de 12–15 cm.",
      "Distribución: Honduras a Nicaragua, bosques húmedos.",
      "Ambiente óptimo: Sombra parcial, alta humedad, suelos orgánicos y bien drenados."
    ]
  },
  {
    nombre: "Cruceta (Acanthocereus tetragonus)",
    imagen: "img/acanthocereus_tetragonus.jpg",
    descripcion: "Cactus arbustivo o columnar, con frutos rojos comestibles y espinas aciculares.",
    detalles: [
      "Familia: Cactaceae.",
      "Tallos hasta 7 m; costillas 3–5 cm de grosor.",
      "Distribución: Florida, Caribe, Centroamérica incluyendo Nicaragua.",
      "Ambiente óptimo: Pleno sol, clima seco, suelo arenoso y drenado."
    ]
  },
  {
    nombre: "Acanthocereus hirschtianus",
    imagen: "img/acanthocereus_hirschtianus.jpg",
    descripcion: "Cactus rastrero o trepador con flores nocturnas blancas y frutos rojos.",
    detalles: [
      "Familia: Cactaceae.",
      "Tallos hasta 2 m, espinas de hasta 5.5 cm.",
      "Distribución: Costa Rica, Nicaragua y países vecinos.",
      "Ambiente óptimo: Clima seco estacional, pleno sol, suelo bien drenado."
    ]
  },
  {
    nombre: "Opuntia decumbens",
    imagen: "img/opuntia_decumbens.jpg",
    descripcion: "Nopal rastrero con cladodios verdes y flores amarillas, típico de entornos secos.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura hasta ≈ 1 m, cladodios obovados.",
      "Distribución: Centroamérica (incluyendo Nicaragua).",
      "Ambiente óptimo: Pleno sol, suelo seco y arenoso, clima árido."
    ]
  },
  {
    nombre: "Echinocereus grusonii (Erizo dorado)",
    imagen: "img/echinocactus_grusonii.jpg",
    descripcion: "Cactus globoso con espinas doradas muy ornamental y resistente.",
    detalles: [
      "Familia: Cactaceae.",
      "Hasta 1 m, forma globosa o cilíndrica.",
      "Distribución: México, cultivado ornamentalmente.",
      "Ambiente óptimo: Sol directo, clima árido, suelo pedregoso y drenado."
    ]
  },
  {
    nombre: "Echinocereus viridiflorus",
    imagen: "img/echinocereus_viridiflorus.jpg",
    descripcion: "Cactus pequeño o cilíndrico con espinas rojas o amarillas y flores verdes o amarillas.",
    detalles: [
      "Familia: Cactaceae.",
      "Tamaño: pocos cm a 20 cm, flores < 5 cm.",
      "Distribución: EE. UU. (centro‑sur) y norte de México.",
      "Ambiente óptimo: Sequía moderada, pleno sol, suelos áridos bien drenados."
    ]
  },
  {
    nombre: "Cereus peruvianus (pitaya)",
    imagen: "img/cereus_peruvianus.jpg",
    descripcion: "Cactus columnar grande que produce fruto dulce (pitaya).",
    detalles: [
      "Familia: Cactaceae.",
      "Puede superar 5 m de altura.",
      "Distribución: Sudamérica, cultivado en Nicaragua.",
      "Ambiente óptimo: Pleno sol, suelo arenoso y drenado, clima cálido."
    ]
  },
  {
    nombre: "Selenicereus undatus (Dragon fruit)",
    imagen: "img/dragon_fruit.jpg",
    descripcion: "Cactus trepador con flores nocturnas grandes y frutos de pulpa blanca o roja.",
    detalles: [
      "Familia: Cactaceae.",
      "Tallos colgantes o trepadores, frutos ovalados.",
      "Distribución: América tropical, vendido en viveros.",
      "Ambiente óptimo: Sombra parcial a sol, clima cálido húmedo, suelo drenado."
    ]
  },
  {
    nombre: "Sansevieria trifasciata variedad",
    imagen: "img/sansevieria_variedad2.jpg",
    descripcion: "Planta de interior con hojas rayadas y formas variadas según cultivar.",
    detalles: [
      "Familia: Asparagaceae.",
      "Altura: 60–100 cm.",
      "Distribución: Cultivo global.",
      "Ambiente óptimo: Interior con poca luz, suelo seco, resistente."
    ]
  },
  {
    nombre: "Coleus variedades múltiples",
    imagen: "img/coleus_variedad.jpg",
    descripcion: "Plantas de follaje decorativo en tonos morado, verde, rojo y amarillo.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–90 cm.",
      "Distribución: Cultivo ornamental global.",
      "Ambiente óptimo: Sombra o sol parcial, suelo húmedo pero drenado."
    ]
  },
  {
    nombre: "Zinnia variedad de colores",
    imagen: "img/zinnia_variedad.jpg",
    descripcion: "Flores anuales en múltiples colores brillantes: rojo, amarillo, rosa, blanco.",
    detalles: [
      "Familia: Asteraceae.",
      "Altura: 30–100 cm.",
      "Distribución: México y Centroamérica.",
      "Ambiente óptimo: Pleno sol, suelo bien drenado."
    ]
  },
  {
    nombre: "Lavanda variedad ornamental",
    imagen: "img/lavanda_variedad.jpg",
    descripcion: "Flores violetas aromáticas, usadas como ornamental y relajante.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–80 cm.",
      "Distribución: Región mediterránea, cultivada.",
      "Ambiente óptimo: Pleno sol, clima templado seco, suelo alcalino."
    ]
  },
  {
    nombre: "Duranta erecta variedad",
    imagen: "img/duranta_variedad.jpg",
    descripcion: "Arbusto con flores y bayas decorativas en tonos lila y dorado.",
    detalles: [
      "Familia: Verbenaceae.",
      "Altura: 2–4 m.",
      "Distribución: América tropical.",
      "Ambiente óptimo: Pleno sol, clima cálido, suelo fértil y drenado."
    ]
  },
  {
    nombre: "Menta fresca (Mentha spicata)",
    imagen: "img/menta_variedad.jpg",
    descripcion: "Hierba culinaria popular con aromas intensos y frescura.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–90 cm.",
      "Distribución: Cultivo global, común en Nicaragua.",
      "Ambiente óptimo: Suelo húmedo, sombra parcial o sol suave."
    ]
  },
  {
    nombre: "Orégano común (Origanum vulgare)",
    imagen: "img/oregano_variedad.jpg",
    descripcion: "Hierba aromática usada en cocina tradicional y medicinal.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–60 cm.",
      "Distribución: Región mediterránea, cultivada localmente.",
      "Ambiente óptimo: Pleno sol, clima seco, suelo bien drenado."
    ]
  },
  {
    nombre: "Helecho espada (Nephrolepis exaltata)",
    imagen: "img/helecho_variedad.jpg",
    descripcion: "Planta colgante con frondas verdes frondosas, ideal en interiores.",
    detalles: [
      "Familia: Lomariopsidaceae.",
      "Altura: hasta 90 cm.",
      "Distribución: Zonas tropicales de América.",
      "Ambiente óptimo: Sombra, alta humedad, suelo rico en materia orgánica."
    ]
  },
  {
    nombre: "Bugambilia variedad colorida",
    imagen: "img/bugambilia_variedad.jpg",
    descripcion: "Trepadora ornamental con brácteas en fucsia, blanco, naranja o morado.",
    detalles: [
      "Familia: Nyctaginaceae.",
      "Altura variable hasta 10 m.",
      "Distribución: Sudamérica tropical, ampliamente cultivada.",
      "Ambiente óptimo: Pleno sol, clima cálido seco, suelo drenado."
    ]
  },
  {
    nombre: "Crotón multicolor (Codiaeum variegatum variedades)",
    imagen: "img/croton_variedad.jpg",
    descripcion: "Arbusto ornamental con hojas en combinaciones de rojo, amarillo y verde.",
    detalles: [
      "Familia: Euphorbiaceae.",
      "Altura: 60–180 cm.",
      "Distribución: Asia tropical, cultivado en Nicaragua.",
      "Ambiente óptimo: Sol parcial o pleno, suelo fértil y bien drenado."
    ]
  },
  {
    nombre: "Rosa de jardín variadas",
    imagen: "img/rosa_variedad.jpg",
    descripcion: "Rosas ornamentales disponibles en múltiples colores y fragancias.",
    detalles: [
      "Familia: Rosaceae.",
      "Altura: 50 cm a 2 m según cultivar.",
      "Distribución: Cultivo mundial, común en viveros.",
      "Ambiente óptimo: pleno sol, suelo fértil y buen drenaje."
    ]
  },
  {
    nombre: "Aloe arborescens",
    imagen: "img/aloe_arborescens.jpg",
    descripcion: "Sucu­lenta arbórea conocida por sus propiedades medicinales y flores rojas.",
    detalles: [
      "Familia: Asphodelaceae.",
      "Altura: hasta 3 m.",
      "Distribución: África austral y oriental.",
      "Ambiente óptimo: Pleno sol, suelo bien drenado, clima seco a semiárido."
    ]
  },
  {
    nombre: "Guayaba fresa (Psidium cattleyanum)",
    imagen: "img/guayaba_fresa.jpg",
    descripcion: "Árbol pequeño con frutos similares a la guayaba, sabor dulce y aroma intenso.",
    detalles: [
      "Familia: Myrtaceae.",
      "Altura: 3–7 m.",
      "Distribución: América tropical.",
      "Ambiente óptimo: Clima cálido, suelo fértil, pleno sol."
    ]
  },
  {
    nombre: "Ixora (Ixora coccinea)",
    imagen: "img/ixora.jpg",
    descripcion: "Arbusto ornamental con racimos compactos de flores rojas, naranjas o rosas.",
    detalles: [
      "Familia: Rubiaceae.",
      "Altura: 1–2 m.",
      "Distribución: Asia tropical.",
      "Ambiente óptimo: Pleno sol o sombra parcial, suelo fértil y húmedo."
    ]
  },
  {
    nombre: "Jazmín estrella (Trachelospermum jasminoides)",
    imagen: "img/jazmin_estrella.jpg",
    descripcion: "Trepadora con flores blancas fragantes, usada para coberturas y enredaderas.",
    detalles: [
      "Familia: Apocynaceae.",
      "Altura: hasta 6 m (trepadora).",
      "Distribución: Asia oriental.",
      "Ambiente óptimo: Pleno sol o sombra parcial, suelo bien drenado."
    ]
  },
  {
    nombre: "Buganvilla (Bougainvillea spectabilis)",
    imagen: "img/buganvilla.jpg",
    descripcion: "Trepadora con vistosas brácteas rosas, púrpuras o blancas durante gran parte del año.",
    detalles: [
      "Familia: Nyctaginaceae.",
      "Altura: hasta 10 m.",
      "Distribución: Sudamérica tropical.",
      "Ambiente óptimo: Pleno sol, suelo bien drenado, clima cálido y seco."
    ]
  },
  {
    nombre: "Níspero (Manilkara zapota)",
    imagen: "img/nispero.jpg",
    descripcion: "Árbol frutal tropical con frutos dulces y aromáticos, usados en jugos y postres.",
    detalles: [
      "Familia: Sapotaceae.",
      "Altura: hasta 20 m.",
      "Distribución: Mesoamérica.",
      "Ambiente óptimo: Clima cálido húmedo, suelos profundos y bien drenados."
    ]
  },
  {
    nombre: "Flor de Jamaica (Hibiscus sabdariffa)",
    imagen: "img/flor_jamaica.jpg",
    descripcion: "Planta anual con flores rojas utilizadas en bebidas y remedios naturales.",
    detalles: [
      "Familia: Malvaceae.",
      "Altura: 1.5–2 m.",
      "Distribución: África occidental, cultivada en trópicos.",
      "Ambiente óptimo: Pleno sol, suelos fértiles y bien drenados."
    ]
  },
  {
    nombre: "Geranio (Pelargonium spp.)",
    imagen: "img/geranio.jpg",
    descripcion: "Planta ornamental de hojas aromáticas y flores en diversos colores.",
    detalles: [
      "Familia: Geraniaceae.",
      "Altura: 20–60 cm.",
      "Distribución: Sudáfrica, cultivo mundial.",
      "Ambiente óptimo: Pleno sol, suelo bien drenado."
    ]
  },
  {
    nombre: "Hierba buena (Mentha spicata)",
    imagen: "img/hierba_buena.jpg",
    descripcion: "Hierba aromática usada en cocina y medicina tradicional.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–90 cm.",
      "Distribución: Cultivo global.",
      "Ambiente óptimo: Suelos húmedos, sombra parcial a pleno sol."
    ]
  },
  {
    nombre: "San Pedro (Echinopsis pachanoi)",
    imagen: "img/san_pedro.jpg",
    descripcion: "Cactus columnar sagrado usado tradicionalmente en rituales andinos.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 6 m.",
      "Distribución: Andes de Sudamérica.",
      "Ambiente óptimo: Clima templado, pleno sol, suelo bien drenado."
    ]
  },
  {
    nombre: "Peperomia (Peperomia spp.)",
    imagen: "img/peperomia.jpg",
    descripcion: "Planta pequeña de interior con hojas carnosas y diversas formas y colores.",
    detalles: [
      "Familia: Piperaceae.",
      "Altura: 10–30 cm.",
      "Distribución: América tropical y subtropical.",
      "Ambiente óptimo: Luz indirecta, suelo bien drenado, humedad moderada."
    ]
  },
  {
    nombre: "Ficus benjamina",
    imagen: "img/ficus_benjamina.jpg",
    descripcion: "Árbol ornamental común en interiores y jardines, con follaje brillante.",
    detalles: [
      "Familia: Moraceae.",
      "Altura: hasta 30 m en exterior, 2–3 m en interiores.",
      "Distribución: Asia tropical.",
      "Ambiente óptimo: Luz indirecta, riego moderado, suelo fértil."
    ]
  },
  {
    nombre: "Rosa China (Hibiscus rosa-sinensis)",
    imagen: "img/rosa_china.jpg",
    descripcion: "Arbusto con grandes flores vistosas en diversos colores, ornamental popular.",
    detalles: [
      "Familia: Malvaceae.",
      "Altura: 2–5 m.",
      "Distribución: Asia tropical.",
      "Ambiente óptimo: Pleno sol, suelos bien drenados y ricos en materia orgánica."
    ]
  },
  {
    nombre: "Lirio de la paz (Spathiphyllum spp.)",
    imagen: "img/lirio_paz.jpg",
    descripcion: "Planta de interior con flores blancas y hojas verdes brillantes, purificadora de aire.",
    detalles: [
      "Familia: Araceae.",
      "Altura: 30–60 cm.",
      "Distribución: América tropical y subtropical.",
      "Ambiente óptimo: Sombra, suelo húmedo pero no encharcado."
    ]
  },
  {
    nombre: "Begonia (Begonia spp.)",
    imagen: "img/begonia.jpg",
    descripcion: "Planta ornamental con hojas atractivas y flores en varios colores.",
    detalles: [
      "Familia: Begoniaceae.",
      "Altura: 20–60 cm.",
      "Distribución: América tropical y subtropical.",
      "Ambiente óptimo: Sombra parcial, suelo bien drenado."
    ]
  },
  {
    nombre: "Cactus bola de nieve (Mammillaria hahniana)",
    imagen: "img/mammillaria_hahniana.jpg",
    descripcion: "Pequeño cactus globoso cubierto de espinas blancas, muy decorativo.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 20 cm.",
      "Distribución: México.",
      "Ambiente óptimo: Pleno sol, suelo arenoso y bien drenado."
    ]
  },
  {
    nombre: "Café (Coffea arabica)",
    imagen: "img/cafe.jpg",
    descripcion: "Planta arbórea que produce los granos para la producción de café.",
    detalles: [
      "Familia: Rubiaceae.",
      "Altura: 3–5 m.",
      "Distribución: África oriental, cultivada en Nicaragua.",
      "Ambiente óptimo: Clima templado húmedo, sombra parcial, suelos fértiles."
    ]
  },
  {
    nombre: "Frangipani (Plumeria rubra)",
    imagen: "img/frangipani.jpg",
    descripcion: "Árbol pequeño con flores perfumadas, símbolo nacional de Nicaragua.",
    detalles: [
      "Familia: Apocynaceae.",
      "Altura: 5–8 m.",
      "Distribución: América tropical.",
      "Ambiente óptimo: Clima cálido, pleno sol, suelo bien drenado."
    ]
  },
  {
    nombre: "Café Arábigo (Coffea arabica)",
    imagen: "img/cafe_arabica.jpg",
    descripcion: "Variedad de café de alta calidad, cultivada en altitudes moderadas.",
    detalles: [
      "Familia: Rubiaceae.",
      "Altura: 3–5 m.",
      "Distribución: Cultivo en zonas montañosas de Nicaragua.",
      "Ambiente óptimo: Clima templado húmedo, sombra parcial, suelo fértil y bien drenado."
    ]
  },
  {
    nombre: "Cactus Peyote (Lophophora williamsii)",
    imagen: "img/peyote.jpg",
    descripcion: "Cactus pequeño y globoso conocido por sus propiedades psicoactivas.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: 5–8 cm.",
      "Distribución: México y sur de EE.UU.",
      "Ambiente óptimo: Clima árido, suelo arenoso, pleno sol."
    ]
  },
  {
    nombre: "Cactus Saguaro (Carnegiea gigantea)",
    imagen: "img/cactus_saguaro.jpg",
    descripcion: "Cactus icónico del desierto de Sonora, de gran tamaño y lento crecimiento.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 12 m.",
      "Distribución: Desierto de Sonora, México y EE.UU.",
      "Ambiente óptimo: Clima árido, suelo arenoso y muy bien drenado."
    ]
  },
  {
    nombre: "Petunia (Petunia hybrida)",
    imagen: "img/petunia.jpg",
    descripcion: "Planta anual de flores grandes y vistosas en múltiples colores.",
    detalles: [
      "Familia: Solanaceae.",
      "Altura: 15–30 cm.",
      "Distribución: Cultivo mundial.",
      "Ambiente óptimo: Pleno sol, suelo bien drenado."
    ]
  },
  {
    nombre: "Hibiscus rosa-sinensis (Rosa de China)",
    imagen: "img/hibiscus_rosa_sinensis.jpg",
    descripcion: "Arbusto ornamental con grandes flores vistosas y colores variados.",
    detalles: [
      "Familia: Malvaceae.",
      "Altura: 2–5 m.",
      "Distribución: Asia tropical.",
      "Ambiente óptimo: Pleno sol, suelo fértil y bien drenado."
    ]
  },
  {
    nombre: "Margarita africana (Osteospermum ecklonis)",
    imagen: "img/margarita_africana.jpg",
    descripcion: "Planta anual con flores parecidas a margaritas en colores brillantes.",
    detalles: [
      "Familia: Asteraceae.",
      "Altura: 30–60 cm.",
      "Distribución: Sudáfrica.",
      "Ambiente óptimo: Pleno sol, suelo bien drenado."
    ]
  },
  {
    nombre: "Cactus Opuntia ficus-indica",
    imagen: "img/opuntia_ficus_indica.jpg",
    descripcion: "Nopal común con frutos comestibles llamados tunas.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 5 m.",
      "Distribución: México y América Central.",
      "Ambiente óptimo: Clima árido, suelo arenoso y drenado."
    ]
  },
  {
    nombre: "Cactus Mammillaria elongata",
    imagen: "img/mammillaria_elongata.jpg",
    descripcion: "Pequeño cactus cilíndrico cubierto de espinas doradas.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 20 cm.",
      "Distribución: México.",
      "Ambiente óptimo: Pleno sol, suelo arenoso y bien drenado."
    ]
  },
  {
    nombre: "Palma real (Roystonea regia)",
    imagen: "img/palma_real.jpg",
    descripcion: "Palma alta y elegante común en parques y avenidas.",
    detalles: [
      "Familia: Arecaceae.",
      "Altura: hasta 20–30 m.",
      "Distribución: Caribe y América tropical.",
      "Ambiente óptimo: Pleno sol, suelo profundo y húmedo."
    ]
  },
  {
    nombre: "Girasol (Helianthus annuus)",
    imagen: "img/girasol.jpg",
    descripcion: "Planta anual con grandes flores amarillas que siguen al sol.",
    detalles: [
      "Familia: Asteraceae.",
      "Altura: 1.5–3 m.",
      "Distribución: Norteamérica.",
      "Ambiente óptimo: Pleno sol, suelo fértil y bien drenado."
    ]
  },
  {
    nombre: "Cactus Astrophytum myriostigma",
    imagen: "img/astrophytum_myriostigma.jpg",
    descripcion: "Cactus sin espinas con forma de estrella y piel moteada blanca.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 30 cm.",
      "Distribución: México.",
      "Ambiente óptimo: Pleno sol, suelo arenoso y bien drenado."
    ]
  },
  {
    nombre: "Planta ZZ (Zamioculcas zamiifolia)",
    imagen: "img/planta_zz.jpg",
    descripcion: "Planta de interior resistente con hojas brillantes y forma elegante.",
    detalles: [
      "Familia: Araceae.",
      "Altura: hasta 60 cm.",
      "Distribución: África oriental.",
      "Ambiente óptimo: Luz indirecta, riego moderado, suelo bien drenado."
    ]
  },
  {
    nombre: "Bonsái Ficus",
    imagen: "img/bonsai_ficus.jpg",
    descripcion: "Árbol en miniatura para interior con tronco retorcido y hojas pequeñas.",
    detalles: [
      "Familia: Moraceae.",
      "Altura: variable según cultivo.",
      "Distribución: Asia tropical.",
      "Ambiente óptimo: Luz indirecta, riego controlado, suelo fértil."
    ]
  },
  {
    nombre: "Helecho nido de ave (Asplenium nidus)",
    imagen: "img/helecho_nido_ave.jpg",
    descripcion: "Planta de interior con grandes hojas verdes en forma de roseta.",
    detalles: [
      "Familia: Aspleniaceae.",
      "Altura: hasta 1 m.",
      "Distribución: Asia y Oceanía tropical.",
      "Ambiente óptimo: Sombra, alta humedad, suelo bien drenado."
    ]
  },
  {
    nombre: "Cactus Gymnocalycium mihanovichii",
    imagen: "img/gymnocalycium_mihanovichii.jpg",
    descripcion: "Cactus pequeño y globoso popular en variedades injertadas de colores vivos.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 10 cm.",
      "Distribución: Argentina y Paraguay.",
      "Ambiente óptimo: Pleno sol parcial, suelo arenoso y drenado."
    ]
  },
  {
    nombre: "Palma abanico (Washingtonia robusta)",
    imagen: "img/palma_abanico.jpg",
    descripcion: "Palma de hojas en forma de abanico, alta y delgada.",
    detalles: [
      "Familia: Arecaceae.",
      "Altura: hasta 20 m.",
      "Distribución: México y Norteamérica.",
      "Ambiente óptimo: Pleno sol, suelo profundo y drenado."
    ]
  },
  {
    nombre: "Cactus Mammillaria bocasana",
    imagen: "img/mammillaria_bocasana.jpg",
    descripcion: "Cactus pequeño cubierto de espinas blancas suaves y flores rosas.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 15 cm.",
      "Distribución: México.",
      "Ambiente óptimo: Pleno sol, suelo arenoso y bien drenado."
    ]
  },
  {
    nombre: "Albahaca (Ocimum basilicum)",
    imagen: "img/albahaca.jpg",
    descripcion: "Hierba aromática muy utilizada en gastronomía y medicina tradicional.",
    detalles: [
      "Familia: Lamiaceae.",
      "Altura: 30–60 cm.",
      "Distribución: Asia tropical y cultivada globalmente.",
      "Ambiente óptimo: Pleno sol, suelo fértil y húmedo."
    ]
  },
  {
    nombre: "Cactus Rebutia muscula",
    imagen: "img/rebutia_muscula.jpg",
    descripcion: "Cactus pequeño con flores amarillas y cuerpo globoso.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 8 cm.",
      "Distribución: Bolivia.",
      "Ambiente óptimo: Pleno sol parcial, suelo arenoso y drenado."
    ]
  },
  {
    nombre: "Hiedra inglesa (Hedera helix)",
    imagen: "img/hiedra_inglesa.jpg",
    descripcion: "Planta trepadora de hojas lobuladas usada para cobertura y decoración.",
    detalles: [
      "Familia: Araliaceae.",
      "Altura: hasta 20 m (trepadora).",
      "Distribución: Europa y Asia.",
      "Ambiente óptimo: Sombra parcial, suelo húmedo y bien drenado."
    ]
  },
  {
    nombre: "Cactus Lobivia (Lobivia spp.)",
    imagen: "img/lobivia.jpg",
    descripcion: "Cactus pequeño con flores grandes y coloridas, ideal para macetas.",
    detalles: [
      "Familia: Cactaceae.",
      "Altura: hasta 15 cm.",
      "Distribución: Andes sudamericanos.",
      "Ambiente óptimo: Pleno sol parcial, suelo arenoso y drenado."
    ]
  },
  {
  nombre: "Petunia híbrida variedad",
  imagen: "img/petunia_variedad.jpg",
  descripcion: "Flores vistosas en múltiples colores, usada para jardinería anual.",
  detalles: [
    "Familia: Solanaceae.",
    "Altura: 15–30 cm.",
    "Distribución: Cultivo mundial.",
    "Ambiente óptimo: Pleno sol, suelo bien drenado."
  ]
}
]

const galeria = document.getElementById("galeria");
const detalle = document.getElementById("detalle");
const nombreComun = document.getElementById("nombreComun");
const descripcionDestacada = document.getElementById("descripcionDestacada");
const taxonomia = document.getElementById("taxonomia");

plantas.forEach((planta, index) => {
  const card = document.createElement("div");
  card.className = "tarjeta";
  card.innerHTML = `
    <img src="${planta.imagen}" alt="${planta.nombre}">
    <h4>${planta.nombre}</h4>
  `;
  card.onclick = () => mostrarDetalle(index);
  galeria.appendChild(card);
});

function mostrarDetalle(index) {
  const planta = plantas[index];
  nombreComun.textContent = planta.nombre;
  descripcionDestacada.textContent = planta.descripcion;
  taxonomia.innerHTML = "";
  planta.detalles.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    taxonomia.appendChild(li);
  });
  detalle.classList.remove("oculto");
  galeria.style.display = "none";
}

function cerrarDetalle() {
  detalle.classList.add("oculto");
  galeria.style.display = "flex";
}
function buscarPlanta() {
  const texto = document.getElementById("inputBuscar").value.toLowerCase();
  const tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach(tarjeta => {
    const titulo = tarjeta.querySelector("h4").textContent.toLowerCase();
    if (titulo.includes(texto)) {
      tarjeta.style.display = "block";
    } else {
      tarjeta.style.display = "none";
    }
  });
}