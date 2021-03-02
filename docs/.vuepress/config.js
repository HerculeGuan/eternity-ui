module.exports = {
    title: 'Eternity UI',
    description: 'Vue UI 组件库',
    themeConfig: {
        sidebar: [
            {
                title: '开发指南',
                children: [
                    '/install/',
                    '/get-started/',
                ],
                collapsable: false,
            },
            {
                title: '组件',
                children: ['/components/button',],
                collapsable: false,
            }
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ]
    }
}