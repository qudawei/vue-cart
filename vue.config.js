module.exports = {
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: {
            '/api': {
                target: 'http://localhost:9999',
                changeOrigin: true,
                secure: false,
                // ws: true,
                pathRewrite: {
                    '^/api': ''   // 请求数据路径别名,这里是注意将static/mock放入public文件夹
                }
            }
        },
        before: app => { }

    },
    lintOnSave: false
}