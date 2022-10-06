function Blogy() {
  return (
    <>
        <div class="container grid grid--3-cols margin-bottom-md">

<div class="meal">
    <img src="img/meals/meal-1.jpg" class="meal-img" alt="Japanese Gyozas"/>
    <div class="meal-content">
        <div class="meal-tags">
            <span class="tag tag--vegetarian">Vegetarian</span>
        </div>
        <p class="meal-title">Japanese Gyozas</p>

        <ul class="meal-attributes">
            <li class="meal-attribute">
                <ion-icon class="meal-icon" name="flame-outline">
                </ion-icon>
                <span><strong>650</strong> calories</span>
            </li>
            <li class="meal-attribute">
                <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
                <span>NutriScore &reg; <strong>74</strong></span>
            </li>
            <li class="meal-attribute">
                <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                <span>4.9 rating <strong>(537)</strong></span>
            </li>
        </ul>
    </div>
</div>
<div class="meal">
    <img src="img/meals/meal-2.jpg" class="meal-img" alt="Avocado Salad"/>
    <div class="meal-content">
        <div class="meal-tags">
            <span class="tag tag--vegan">Vegan</span>
            <span class="tag tag--paleo">Paleo</span>
        </div>
        <p class="meal-title">Avocado Salad</p>

        <ul class="meal-attributes">
            <li class="meal-attribute">
                <ion-icon class="meal-icon" name="flame-outline">
                </ion-icon>
                <span><strong>400</strong> calories</span>
            </li>
            <li class="meal-attribute">
                <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
                <span>NutriScore &reg; <strong>92</strong></span>
            </li>
            <li class="meal-attribute">
                <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                <span><strong>4.9</strong> rating <strong>(537)</strong></span>
            </li>
        </ul>
    </div>
</div>

<div class="diets">
    <h3 class="heading-tertiary">Works with any diet:</h3>
    <ul class="list">
        <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon><span>Vegetarian</span></li>
        <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon><span>Vegan</span></li>
        <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon><span>Pescatarian</span></li>
        <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon><span>Gluten-free</span></li>
        <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon><span>Lactose-free</span></li>
        <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon><span>Keto</span></li>
        <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon><span>Paleo</span></li>
        <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon><span>Low FODMAP</span></li>
        <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon><span>Kid-friendly</span></li>
    </ul>
</div>

</div>
    </>
  )
}

export default Blogy
