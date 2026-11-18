export type CartaItem = {
  name: string
  description?: string
  tag?: 'Vegano' | 'Vegetariano'
}

export type CartaGroup = {
  title: string
  note?: string
  items: CartaItem[]
}

export type CartaSection = {
  id: string
  label: string
  tagline: string
  image: string
  intro?: string
  groups: CartaGroup[]
}

export const carta: CartaSection[] = [
  {
    id: 'pizzas',
    tagline: 'Masa artesanal al horno',
    image: '/media/margherita.jpeg',
    label: 'Pizzas',
    groups: [
      {
        title: 'Especialidades de la casa',
        items: [
          {
            name: 'Tarantella',
            description:
              'Mozzarella, aceitunas, cebolla caramelizada, tocino, jamón y choclo.',
          },
          {
            name: 'Gamberetto',
            description:
              'Camarón ecuatoriano, choclo, aceitunas, toque de albahaca, tomate cherry y mozzarella.',
          },
          {
            name: 'Calabria',
            description: 'Carne mechada, cebolla morada, choclo y aceitunas.',
          },
          {
            name: 'Pepperoni',
            description: 'Doble pepperoni y aceitunas.',
          },
          {
            name: 'Quattro Formaggio',
            description:
              'Parmesano, mozzarella, cheddar, cebolla morada y roquefort.',
          },
          {
            name: 'Fugazzetta',
            description:
              'Mozzarella, aceitunas y mix de cebollas asadas al olivo.',
          },
          {
            name: 'Verdure',
            description:
              'Champiñón, cebolla morada, tomate cherry, pimentón al olivo y albahaca.',
            tag: 'Vegetariano',
          },
          {
            name: 'De la Nonna',
            description:
              'Tomate fresco, choclo, pollo BBQ, cebolla morada y albahaca fresca.',
          },
          {
            name: 'Quattro di Manzo',
            description:
              'Mechada, longaniza, jamón, tocino, cebolla morada y choclo.',
          },
          {
            name: 'Napolitana',
            description:
              'Jamón acaramelado, tomate fresco y aceitunas negras.',
          },
          {
            name: 'Emy Blue',
            description: 'Queso azul, salsa bolognesa y cebolla morada.',
          },
        ],
      },
      {
        title: 'Vegetarianas y veganas',
        items: [
          {
            name: 'Fungo',
            description:
              'Champiñón, choclo, aceitunas y albahaca fresca.',
            tag: 'Vegetariano',
          },
          {
            name: 'Margherita',
            description:
              'Tomate fresco, aceitunas negras y albahaca natural.',
            tag: 'Vegetariano',
          },
          {
            name: 'Roqueta',
            description:
              'Queso de cabra, aceitunas, rúcula, tomate cherry y albahaca.',
            tag: 'Vegetariano',
          },
          {
            name: 'Vegan Margherita',
            description:
              'Albahaca fresca, tomates cherry, aceitunas negras y queso mozzarella vegano.',
            tag: 'Vegano',
          },
        ],
      },
    ],
  },
  {
    id: 'pastas',
    tagline: 'Hechas en casa',
    image: '/media/fontana-di-pasta.jpeg',
    label: 'Pastas',
    groups: [
      {
        title: 'Pastas caseras',
        items: [
          {
            name: 'Lasagna',
            description: 'Bolognesa o vegetariana.',
          },
          {
            name: 'Lasagna de pollo',
            description: 'Con salsa cuatro quesos.',
          },
          {
            name: 'Cannelloni',
            description: 'Bolognesa, o espinaca y cuatro quesos.',
          },
          {
            name: 'Ñoquis',
            description: 'Con la salsa de la casa que prefieras.',
          },
          {
            name: 'Spaghetti o Fettuccini',
            description: 'Con la salsa de la casa que prefieras.',
          },
          {
            name: 'Torteletti',
            description: 'De verduras o de jamón y queso.',
          },
          {
            name: 'Fontana di Pasta',
            description: 'Para 3 a 4 personas, 2 pastas a elección.',
          },
        ],
      },
      {
        title: 'Salsas de la casa',
        items: [
          { name: 'Bolognesa' },
          { name: 'Alfredo' },
          { name: 'Pesto' },
          { name: 'Cuatro quesos' },
          { name: 'Bechamel' },
          { name: 'Vegetariana' },
          { name: 'Pomodoro y albahaca' },
          { name: 'Tocino crema' },
        ],
      },
    ],
  },
  {
    id: 'compartir',
    tagline: 'Entradas y acompañamientos',
    image: '/media/local-tarantella.jpeg',
    label: 'Para compartir',
    groups: [
      {
        title: 'Entradas y acompañamientos',
        items: [
          { name: 'Palitos de ajo' },
          {
            name: 'Panzerottis',
            description: 'Vegetarianos y/o napolitanos.',
          },
          {
            name: 'Empanadas',
            description: 'Espinaca, queso o napolitana.',
          },
          {
            name: 'Quesadillas',
            description: 'Pollo y queso, o champiñón y queso.',
          },
        ],
      },
    ],
  },
  {
    id: 'postres',
    tagline: 'El cierre perfecto',
    image: '/media/fachada-tarantella.jpeg',
    label: 'Postres y bebidas',
    groups: [
      {
        title: 'Postres',
        items: [
          {
            name: 'Celestino',
            description: 'Dulce de leche, crema y nueces.',
          },
        ],
      },
      {
        title: 'Bebidas',
        items: [
          { name: 'Bebidas en lata' },
          { name: 'Bebidas 2 litros' },
          {
            name: 'Jugo natural',
            description: 'Fruta de la estación.',
          },
        ],
      },
    ],
  },
]
