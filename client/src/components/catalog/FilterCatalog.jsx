import './FilterCatalog.css'



export default function FilterCatalog() {
    return (
        <div className='filter_container'>
            <div className='holder_options'>
                <div className='optionContainer'>

                    <label for="brand">Brand:</label>
                    <select id="brand">
                        <option value="toyota">Toyota</option>
                        <option value="ford">Ford</option>
                    </select>

                    <label for="brand">Model:</label>
                    <select id="brand">
                        <option value="toyota">Toyota</option>
                        <option value="ford">Ford</option>
                    </select>

                    <label for="condition">Condition:</label>
                    <select id="condition">
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </select>


                    <label for="mileage">Mileage:</label>
                    <input type="text" id="mileage" placeholder="Enter mileage"></input>

                    <label for="fuel">Fuel:</label>
                    <select id="fuel">
                        <option value="gas">Gasoline</option>
                        <option value="diesel">Diesel</option>
                    </select>

                    <label for="year">Year:</label>
                    <select id="year">
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>


                </div>
            </div>
        </div>
    )
} 