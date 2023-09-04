const products = {
    name: 'products',
    title: 'Products',
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
            name: 'price',
            title: 'Price',
            type: 'string',
        },
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'string',
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
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}],        
        },
        {
            name: 'color',
            title: 'Color',
           type:'array',
           of: [
             {
              type: 'string', name: 'color',
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
        {
            name: 'colorSelected',
            title: 'ColorSelected',
            type: 'string',
        },
        {
            name: 'imageSelected',
            title: 'ImageSelected',
            type: 'image',
        },
    ]
}
export default products;

/*
Titre
Prix
Description
Poids
Couleur
Stock
Category
*/