import autumn from "../assets/images/Autumn Lake.jpg"
import butterfly from "../assets/images/Butterfly.jpg"
import colorful from "../assets/images/Colorful Forest.jpg"
import forest from "../assets/images/Forest View.jpg"
import green from "../assets/images/Green Hills.jpg"
import king from "../assets/images/Kingfisher.jpg"
import mountain from "../assets/images/Mountain River.jpg"
import winter from "../assets/images/Winter River.jpg"


function Images()
{
    return(
        <div class="gallery">
        <div class="gallery-item">
            <div class="image-container">
                <img src={autumn} alt="" class="gallery-image"></img>
            </div>
            <div class="image-info">
                <h3>Autumn Lake</h3>
                <p>A calm lake with autumn colors </p>
            </div>
        </div>

        <div class="gallery-item">
            <div class="image-container">
                <img src={butterfly} alt="" class="gallery-image"></img>
            </div>
            <div class="image-info">
                <h3>Butterfly</h3>
                <p>A butterfly on a flower</p>
            </div>
        </div>

        <div class="gallery-item">
            <div class="image-container">
                <img src={colorful} alt="" class="gallery-image"></img>
            </div>
            <div class="image-info">
                <h3>Colorful Forest</h3>
                <p>A forest with vibrant colors</p>
            </div>
        </div>

        <div class="gallery-item">
            <div class="image-container">
                <img src={forest} alt="" class="gallery-image"></img>
            </div>
            <div class="image-info">
                <h3>Forest View</h3>
                <p>A view of green trees and hills</p>
            </div>
        </div>

        <div class="gallery-item">
            <div class="image-container">
                <img src={green} alt="" class="gallery-image"></img>
            </div>
            <div class="image-info">
                <h3>Green Hills</h3>
                <p>Green hills with house</p>
            </div>
        </div>

        <div class="gallery-item">
            <div class="image-container">
                <img src={king} alt="" class="gallery-image"></img>
            </div>
            <div class="image-info">
                <h3>Kingfisher</h3>
                <p>A bird sitting on a rock in water</p>
            </div>
        </div>

        <div class="gallery-item">
            <div class="image-container">
                <img src={mountain} alt="" class="gallery-image"></img>
            </div>
            <div class="image-info">
                <h3>Mountain River</h3>
                <p>A river flowing through mountains</p>
            </div>
        </div>

        <div class="gallery-item">
            <div class="image-container">
                <img src={winter} alt="" class="gallery-image"></img>
            </div>
            <div class="image-info">
                <h3>Winter River</h3>
                <p>A snowy river with trees around</p>
            </div>
            </div>
            </div>
    )
}
export default Images