module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: 'strapi-22',
            publicFiles: false,
            uniform: false,
            basePath: '',
        },
    },
}