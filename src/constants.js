export const colors = {
    grayLighter: '#ededed',
    grayLight: '#cecece',
    grayDefault: '#4c4c4c',
    grayDark: '#494949',
    blue: '#2186fa',
    blueDark: '#1973da',
    green: '#78C372'
}

export const theme = {
    primary: colors.blue,
    primaryDark: colors.blueDark,
    success: colors.green,
    heading: colors.grayDark,
    headingLight: colors.grayLight,
    paragraph: colors.grayDefault,
    bodyColor: colors.grayLighter,
    borderColor: colors.grayLighter,
    transitionDefault: '620ms cubic-bezier(0.215, 0.61, 0.355, 1)',
    transitionFast: '220ms cubic-bezier(0.215, 0.61, 0.355, 1)'
}

export const breakpoints = {
    desktop: 1024,
}

export const fontSizes = {
    xxs: 0.75,
    xs: 0.875,
    sm: 0.9,
    md: 0.93,
    lg: 1.69,
    xl: 1.91,
};

export const product = {
    title: 'Audio-Technica ATH-MSR7',
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
                perferendis debitis blanditiis quas. Llibero laborum quisquam error.
                Saepe iste officia tempora distinctio, atque, suscipit mollitia ab
                perferendis debitis blanditiis quas. Llibero laborum quisquam error.
                Saepe iste officia tempora distinctio.
            `,
        },
        {
            title: 'Details',
            content: `Vero autem ea beatae, libero perspiciatis, aperiam fuga ratione
                inventore nemo nam maxime explicabo, minima impedit sit laudantium
                voluptatem reiciendis accusamus dolores! minima impedit sit laudantium
                voluptatem reiciendis accusamus dolores! Llibero laborum quisquam error.
                Saepe iste officia tempora distinctio, atque, suscipit mollitia ab
                perferendis debitis blanditiis quas.
            `,
        },
    ],
}