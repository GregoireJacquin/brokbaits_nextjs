const categories = {
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
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
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
    ]
}
export default categories;