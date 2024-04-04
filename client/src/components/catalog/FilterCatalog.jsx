import './FilterCatalog.css'



export default function FilterCatalog() {
    return (
        <div className='filter_container'>
            <div className='holder_options'>
                <div className='optionContainer'>

                    <label htmlFor="brand">Brand:</label>
                    <select id="brand">
                        <option value="toyota">Toyota</option>
                        <option value="ford">Ford</option>
                    </select>

                    <label htmlFor="brand">Model:</label>
                    <select id="brand">
                        <option value="toyota">Toyota</option>
                        <option value="ford">Ford</option>
                    </select>

                    <label htmlFor="condition">Condition:</label>
                    <select id="condition">
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </select>


                    <label htmlFor="mileage">Mileage:</label>
                    <input type="text" id="mileage" placeholder="Enter mileage"></input>

                    <label htmlFor="fuel">Fuel:</label>
                    <select id="fuel">
                        <option value="gas">Gasoline</option>
                        <option value="diesel">Diesel</option>
                    </select>

                    <label htmlFor="year">Year:</label>
                    <select id="year">
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>


                </div>
            </div>
        </div>
    )
} 