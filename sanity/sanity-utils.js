import { createClient, groq } from 'next-sanity'
import client from './config/client-config';
import imageUrlBuilder from '@sanity/image-url'

export const getProducts = async () => {
  return createClient(client).fetch(
    groq`*[_type == "products"] | order(_createdAt desc) {
        _id,
        _createdAt,
        name,
        title,
        "slug": slug.current,
        price,
        quantity,
        image,
        description,
        color,
        category,
    }`
  )
}
export const getProduct = async (slug) => {
  return createClient(client).fetch(
    groq`*[_type == "products" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      title,
      "slug": slug.current,
      price,
      quantity,
      image,
      description,
      color,
      category,
    }`,
    { slug }
  )
}
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source)
}
