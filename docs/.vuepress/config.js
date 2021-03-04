module.exports = {
    base: '/vue-wheel/',
    title: 'Eternity UI',
    description: 'Vue UI 组件库',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'Github', link: 'https://google.com' },
        ],
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
                children: [
                    '/components/icon',
                    '/components/button',
                    '/components/input',
                    '/components/layout',
                    '/components/container',
                    '/components/toast',
                    '/components/popover',
                    '/components/tabs',
                    '/components/collapse',
                ],
                collapsable: false,
            }
        ],

    }
}