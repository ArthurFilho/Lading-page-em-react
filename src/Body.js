function Body(){
return(
    <section>
               <div className="formcontainer">
                     <h2>
                        Learn with this super cheap workshop to become one of the best film producers in the country and learning from the best.


                
                    </h2>
                 <p className="mb"> Lorem Ipsum is  Ipsum passages, and more rece.</p>
                 <form>
                    <input id="name" name="FNAME" type="text" placeholder="Name"/>
                    <input id="email" name="EMAIL" type="email" placeholder="Email"/>
                    <select id="PLACE">
                        <option value="BA">Bahia</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de janeiro</option>
                        <option value="PE">Pernambuco</option>
                    </select> 
                        
                   
             <input id="inputsubmit" type="submit" value="INSCREVA-SE"/> 
             </form>
            </div>
        </section>
)
}

export default Body;