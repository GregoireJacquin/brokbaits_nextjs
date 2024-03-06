const caroussel = {
    name: 'caroussel',
    title: 'Caroussel',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            name: 'image',
            title: 'Image',
            type:'array',
            of: [
                {
                    type: 'image', name: 'image',
                    options: {
                        hotspot: true,
                    },
                }
            ]
        }
    ]
}
export default caroussel;