import React from "react";
import './footer.css'


export default function Footer(){
    return(
        <div className="footer"><h1 className="footer_h1">Есть вопросы? <br/>
            Мы вам перезвоним</h1>
            <div className="input_boshi">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Ваш номер" aria-label="Username" />
                    <input type="text" class="form-control1" placeholder="Ваша имя" aria-label="Server" />
                </div>
                <div class="input-group">
                    <textarea class="form-control2" aria-label="With textarea">Сообщения</textarea>
                </div>
                <button className="footer_btn">Отправить</button>
            </div>
            </div>
    
    
    )
}