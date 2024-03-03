import React from 'react'
import TextAndImageLeft from "../common/TextAndImageLeft";
import TextAndImageRight from "../common/TextAndImageRight";

const About = () => {
  return (
      <>
          <div className="flex-grow">
            <TextAndImageLeft title={"Ludo au paradis de la pêche"} desciption={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec odio sem. Donec cursus consectetur nulla, at imperdiet erat iaculis nec. Cras vitae massa ante. Nunc tincidunt ligula nec sollicitudin interdum."} image={"https://france3-regions.francetvinfo.fr/image/lZARG7gUfk5_-xCDjus8PKhKtB4/600x400/regions/2020/06/09/5edf8aa460536_19_pecheur_de_99_ans-00_00_39_24-4345652.jpg"}/>
            <TextAndImageRight title={"Ludo au paradis de la pêche"} desciption={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec odio sem. Donec cursus consectetur nulla, at imperdiet erat iaculis nec. Cras vitae massa ante. Nunc tincidunt ligula nec sollicitudin interdum."} image={"https://www.pechetarnetgaronne.fr/wp-content/uploads/2023/04/Brochet-Alexandre-Pretto-compressee.jpeg"}/>
          </div>
      </>
  )
}
export default About