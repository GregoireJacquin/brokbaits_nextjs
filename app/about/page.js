import React from 'react'
import TextAndImageLeft from "../common/TextAndImageLeft";
import TextAndImageRight from "../common/TextAndImageRight";
import {about_text_first, about_text_second} from "@/app/constant";
import Image from "next/image";
import first  from '../images/about_first_image.jpg'
import second  from '../images/about_second_image.jpg'

const About = () => {
  return (
      <>
          <div className="flex-grow">
              <div className="relative px-8">
                  <div
                      className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
                      <div className="md:w-6/12 flex-shrink-0 relative "><a className="relative" href="/blog">
                          <Image className="rounded-lg object-cover object-center mx-auto pt-2 pb-2" src={first}
                                 width="200px"/>
                      </a>
                      </div>
                      <div className={`md:w-6/12 mt-16 md:mt-0 md:mr-8 lg:mr-16 md:order-first`}>
                          <div className="g:py-8 text-center md:text-left">
                              <span
                                  className="font-bold text-primary-500 text-sm text-center md:text-left uppercase"></span>
                              <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"></h2>
                              <p className="mt-4 md:text-left text-sm md:text-base lg:text-lg">
                                  Bienvenue dans l'univers de BAIK, la référence ultime pour les mordus de pêche au
                                  leurre souple visant les grands brochets.
                              </p>
                              <p className="mt-4 text-sm md:text-base lg:text-lg text-justify">
                                  Née de la passion dévorante d'un pêcheur chevronné, BAIK a vu le jour pour combler un
                                  besoin criant sur le marché : des leurres haut de gamme spécialement conçus pour
                                  traquer les plus gros spécimens de brochets. Après des années à peaufiner ses
                                  techniques et à tester d'innombrables produits, notre fondateur a décidé de mettre son
                                  expertise au service des pêcheurs en quête de défis.
                              </p>
                              <p className="mt-4 md:text-left text-sm md:text-base lg:text-lg">
                                  Chaque leurre BAIK est le fruit d'un long processus de recherche, de conception
                                  minutieuse et de tests approfondis sur le terrain. Des matériaux nobles, une ergonomie
                                  parfaite et un réalisme saisissant : nos créations allient performance et durabilité
                                  pour vous offrir une expérience de pêche inoubliable.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="relative px-8">
                  <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center">
                      <div className="md:w-6/12 flex-shrink-0 relative "><a className="relative" href="/blog">
                          <Image className="rounded-lg object-cover object-center mx-auto pt-2 pb-2" src={second}
                                 width="200px"/>
                      </a>
                      </div>
                      <div className={`md:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last`}>
                          <div className="g:py-8 text-center md:text-left">
                              <span
                                  className="font-bold text-primary-500 text-sm text-center md:text-left uppercase"></span>
                              <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"></h2>
                              <p className="mt-4 text-sm md:text-base lg:text-lg text-justify">
                                  Que vous soyez un chasseur de trophées aguerri ou un amateur passionné, BAIK dispose
                                  de la solution idéale pour concrétiser vos rêves les plus fous. Nos leurres high-tech
                                  sont taillés sur mesure pour répondre aux exigences des pêcheurs de gros brochets, en
                                  quête d'efficacité et de sensations fortes.
                              </p>
                              <p className="mt-4 text-sm md:text-base lg:text-lg text-justify">
                                  Au-delà de produits d'exception, BAIK se veut une véritable communauté de passionnés,
                                  partageant les mêmes valeurs de respect de la nature et d'amour du sport.
                                  Rejoignez-nous sur les réseaux sociaux pour échanger conseils, vidéos et photos de vos
                                  plus belles prises avec le hashtag #BAIKBaits. Ensemble, nous vivrons des moments
                                  inoubliables sur le chemin de l'exploit halieutique.
                              </p>
                              <p className="mt-4 text-sm md:text-base lg:text-lg text-justify mb-8">
                                  Pêcheurs, BAIK vous tend la main pour concrétiser vos rêves les plus fous. Alors
                                  n'attendez plus et lancez-vous à l'assaut des plus beaux trophées !
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              {/*<TextAndImageLeft desciption={about_text_first} image={first}/>*/}
              {/*<TextAndImageRight desciption={about_text_second} image={"public/images/about_second_image.jpg"}/>*/}
          </div>
      </>
  )
}
export default About