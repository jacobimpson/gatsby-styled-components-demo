export const colors = {
    grayLighter: '#ededed',
    grayLight: '#cecece',
    grayDefault: '#4c4c4c',
    grayDark: '#494949',
    blue: '#2186fa',
    green: '#78C372'
}

export const theme = {
    primary: colors.blue,
    success: colors.green,
    heading: colors.grayDark,
    headingLight: colors.grayLight,
    paragraph: colors.grayDefault,
    bodyColor: colors.grayLighter,
    borderColor: colors.grayLighter
}

export const breakpoints = {
    xs: 480,
    sm: 768,
    md: 1024,
    lg: 1280,
}

export const fontSizes = {
    xxs: 0.9,
    xs: 1.0,
    sm: 1.1,
    md: 1.2,
    lg: 2.2,
    xl: 2.6,
};

export const product = {
    title: 'Audio-Technica ATH-MDR7',
    subtitle: '2017 Best Headphones of the Year Award Winner',
    price: {
        regular: 89.99,
        sale: 59.99,
    },
    colors: [{
            image: '/images/black.jpg',
            value: 'black',
            label: 'Black',
        },
        {
            image: '/images/brown.jpg',
            value: 'brown',
            label: 'Brown',
        },
    ],
    tabs: [{
            title: 'Description',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ex voluptatum adipisci dicta, libero laborum quisquam error.
                Saepe iste officia tempora distinctio, atque, suscipit mollitia ab
                perferendis debitis blanditiis quas.
            `,
        },
        {
            title: 'Details',
            content: `Vero autem ea beatae, libero perspiciatis, aperiam fuga ratione
                inventore nemo nam maxime explicabo, minima impedit sit laudantium
                voluptatem reiciendis accusamus dolores! minima impedit sit laudantium
                voluptatem reiciendis accusamus dolores!
            `,
        },
    ],
}