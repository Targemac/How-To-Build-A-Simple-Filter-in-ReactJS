import React, { useState } from 'react'

const Filter = () => {
    const [state, setState] = useState({
        publication_id: '',
        service: '',
        start_date: "",
        end_date: ""
    });

    const handleFilter = (e) => {
        e.preventDefault()

        console.log(state)

        // handle your async function to the backend here
    }

    return (
        <div className='filter_wrapper'>
            <h1 className="heading">Filter</h1>

            <form className="filter_form">
                <div className="input_group">
                    <label htmlFor="publication_id" className="input_label">Publication ID:</label>
                    <input
                        type="text"
                        name='publication_id'
                        className="input_field"
                        id='publication_id'
                        placeholder='Enter Publication ID'
                        onChange={e => setState((prev) => ({ ...prev, publication_id: e.target.value }))}
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="service" className="input_label">Service:</label>
                    <select
                        name="service"
                        id="service"
                        onChange={e => setState((prev) => ({ ...prev, service: e.target.value }))}
                    >
                        <option value="option_1">option 1</option>
                        <option value="option_2">option 2</option>
                        <option value="option_3">option 3</option>
                    </select>
                </div>

                <div className="input_group">
                    <label htmlFor="start_date" className="input_label">Start Date:</label>
                    <input
                        type="date"
                        name='start_date'
                        className="input_field"
                        id='start_date'
                        onChange={e => setState((prev) => ({ ...prev, start_date: e.target.value }))}
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="end_date" className="input_label">End Date:</label>
                    <input
                        type="date"
                        name='end_date'
                        className="input_field"
                        id='end_date'
                        onChange={e => setState((prev) => ({ ...prev, end_date: e.target.value }))}
                    />
                </div>

                <div className="input_group">
                    <input type="submit" className="form_button" value='Filter Publications' onClick={handleFilter} />
                </div>
            </form>
        </div>
    )
}

export default Filter
