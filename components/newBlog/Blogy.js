import * as IonIcon from "react-icons/io5";
import * as Gi from  "react-icons/gi";
function Blogy() {



    function MealCard(){
        return (

            <div class="meal">
    <img src="https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full-750x500.jpeg" class="meal-img" alt="Japanese Gyozas"/>
    <div class="meal-content">
        <div class="meal-tags">
            <span class="tag tag--vegetarian">Vegetables</span>
        </div>
        <p class="meal-title">Japanese Gyozas</p>

        <ul class="meal-attributes">
            <li class="meal-attribute">
                <IonIcon.IoRestaurantOutline class="meal-icon" name="flame-outline"/>
               
                <span><strong>100%</strong> organic</span>
            </li>
            <li class="meal-attribute">
                <Gi.GiStrongMan class="meal-icon" name="restaurant-outline"/>
                <span>NutriScore <strong>74</strong></span>
            </li>
            <li class="meal-attribute">
                <IonIcon.IoStarOutline class="meal-icon" name="star-outline"/>
                <span>4.9 rating <strong>(537)</strong></span>
            </li>
        </ul>
    </div>
</div>
        )
    }
  return (
    <>
        <div class="flex flex-row">
            <MealCard/>
            <MealCard/>
            <MealCard/>
</div>
    </>
  )
}

export default Blogy
