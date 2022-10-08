import * as IonIcon from "react-icons/io5";
import * as Gi from  "react-icons/gi";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


function Blogy() {

    const arr=['Sports','hello','Electronics','Fashion','Computer','Phones','Food']

    const sliderLeft=()=>{
        let slider=document.getElementById('slider')
        slider.scrollLeft=slider.scrollLeft-400
      }
      const sliderRight=()=>{
        let slider=document.getElementById('slider')
        slider.scrollLeft=slider.scrollLeft+400
      }

    function MealCard(){
        return (
    <div className="meal">
    <img src="https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full-750x500.jpeg" className="meal-img" alt="Japanese Gyozas"/>
    <div className="meal-content">
        <div className="meal-tags">
            <span className="tag tag--vegetarian">Vegetables</span>
        </div>
        <p className="meal-title">Japanese Gyozas</p>

        <ul className="meal-attributes">
            <li className="meal-attribute">
                <IonIcon.IoRestaurantOutline className="meal-icon" name="flame-outline"/>
               
                <span><strong>100%</strong> organic</span>
            </li>
            <li className="meal-attribute">
                <Gi.GiStrongMan className="meal-icon" name="restaurant-outline"/>
                <span>NutriScore <strong>74</strong></span>
            </li>
            <li className="meal-attribute">
                <IonIcon.IoStarOutline className="meal-icon" name="star-outline"/>
                <span>4.9 rating <strong>(537)</strong></span>
            </li>
        </ul>
    </div>
</div>
        )
    }
  return (
    <div className="product inline-block ">
        <div id="slider" className="flex flex-row scrollbar-hide overflow-x-scroll scroll white-space-nowrap scroll-smooth ">
            <MealCard/>
            <MealCard/>
            <div className="diets">
                    <h3 className="heading-tertiary">We Work with any Item:</h3>
                    <ul className="list">
                        {
                         arr.map(item=>{
                            return(
                                <li className="list-item">
                                    <IonIcon.IoCheckmarkOutline className="list-icon" name="checkmark-outline"/><span>{item}</span>
                                </li>
                            )
                         })   
                        }
                    </ul>
                </div>
        </div>
        <div className="container all-recipes">
                <a href="#" className="link">See all Products &rarr; </a>
            </div>
    </div>
  )
}

export default Blogy
